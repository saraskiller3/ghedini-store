import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react"; 
import AutocompleteInput from "../components/AutocompleteInput";
import { parts } from "../data/parts";
import SiteFooter from "../components/SiteFooter";
import BackToLanding from "./BackToLanding";
// ===== SMART AUTOCOMPLETE SEARCH =====

const PART_TYPES = [
    { key: "final-drive", en: "Final drives", lt: "Varančiosios pavaros (pilnos)" },
    { key: "travel-gearbox", en: "Travel gearboxes", lt: "Varančiosios pavaros reduktoriai" },
    { key: "swing-gearbox", en: "Swing gearboxes", lt: "Posūkio reduktoriai" },
    { key: "hydraulic-pump", en: "Hydraulic pumps", lt: "Hidrauliniai siurbliai" },
    { key: "hydraulic-pump-parts", en: "Hydraulic pump parts", lt: "Dalys hidrauliniams siurbliams" },
    { key: "swing-motor", en: "Swing motors", lt: "Posūkio hidromotorai" }, 
    { key: "travel-motor", en: "Travel motors", lt: "Varančiosios pavaros hidromotorai" },
    { key: "gear-parts", en: "Gear parts", lt: "Pavarų detalės" },
    { key: "computer", en: "Computers and displays", lt: "Kompiuteriai ir ekranai (displėjai)" },
    { key: "fan-pump", en: "Fan pumps", lt: "Aušinimo sistemos siurbliai" },
    { key: "fan-motor", en: "Fan motors", lt: "Aušinimo sistemos hidromotorai" },
    { key: "gear-pump", en: "Gear pumps", lt: "Krumpliaratiniai siurbliai" },
    { key: "slewing-bearing", en: "Slewing bearings", lt: "Posūkio žiedai"},
{ key: "cylinders", en: "Cylinder assemblies", lt: "Strėlės stūmokliai"}
];
function normalize(s) {
    return (s || "").toString().trim().toLowerCase();
}

function buildSuggestions(query) {
    const q = normalize(query);
    if (!q) return [];

    const scoreItem = (value, type) => {
        const v = normalize(value);
        let score = 999;
        if (v.startsWith(q)) score = 0;
        else if (v.includes(q)) score = 1;
        return { value, type, score };
    };

    const items = [
        ...MAKES.map(v => scoreItem(v, "make")),
        ...MODELS.map(v => scoreItem(v, "model")),
        ...PART_NUMBERS.map(v => scoreItem(v, "part")),
    ]
        .filter(x => x.score !== 999)
        .sort((a, b) => a.score - b.score || a.value.localeCompare(b.value))
        .slice(0, 8);

    return items;
}

function PartsSearch({ value, onChange }) {
    
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    const suggestions = useMemo(() => buildSuggestions(value), [value]);

    useEffect(() => {
        const onDown = (e) => {
            if (!wrapRef.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, []);

    const commit = (val) => {
        onChange(val);
        setOpen(false);
        
    };

    return (
        <div ref={wrapRef} className="relative w-full max-w-xl">
            <input
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    setOpen(true);
                }}
                placeholder="Search by make, model or part number (CAT 259D3, 487-6186)"
                className="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-500"
            />

            {open && suggestions.length > 0 && (
                <div className="absolute z-50 mt-2 w-full rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden">
                    {suggestions.map((s, i) => (
                        <div
                            key={i}
                            onClick={() => commit(s.value)}
                            className="px-4 py-3 text-sm cursor-pointer hover:bg-neutral-900 flex justify-between"
                        >
                            <span>{s.value}</span>
                            <span className="text-xs text-neutral-400 uppercase">{s.type}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default function Parts({ lang, handleLangChange }) {
    const location = useLocation();
    const navigate = useNavigate();
    const resultsRef = useRef(null);
    const topRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const t = (en, lt) => (lang === "lt" ? lt : en);
    
    // init from URL on first load
    const [makeQ, setMakeQ] = useState(() => searchParams.get("make") || "");
    const [modelQ, setModelQ] = useState(() => searchParams.get("model") || "");
    const [partQ, setPartQ] = useState(() => searchParams.get("part") || "");
    const [typeQ, setTypeQ] = useState(() => searchParams.get("type") || "");
    const clearSearch = () => {
        setMakeQ("");
        setModelQ("");
        setPartQ("");
        setTypeQ("");
    };
    const PER_PAGE = 21;

    

    const pageFromUrl = () => {
        const sp = new URLSearchParams(location.search);
        const raw = parseInt(sp.get("page") || "1", 10);
        return Number.isFinite(raw) && raw > 0 ? raw : 1;
    };

    const [page, setPage] = useState(pageFromUrl());

    // keep state in sync if user uses back/forward or edits URL
    useEffect(() => {
        setPage(pageFromUrl());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search]);
    const filteredParts = useMemo(() => {
        const make = makeQ.trim().toLowerCase();
        const model = modelQ.trim().toLowerCase();
        const part = partQ.trim().toLowerCase();
        const type = typeQ;

        return parts.filter((p) => {
            // category
            if (type && (p.type || "") !== type) return false;

            // nothing typed → show all
            if (!make && !model && !part) return true;

            // must match inside the SAME fit row
            return (p.fits || []).some((f) => {
                const fMake = (f.make || "").toLowerCase();
                const fModel = (f.model || "").toLowerCase();
                const fPart = (f.partNumber || "").toLowerCase();

                if (make && !fMake.startsWith(make)) return false;
                if (model && !fModel.startsWith(model)) return false;
                if (part && !fPart.startsWith(part)) return false;

                return true;
            });
        });
    }, [makeQ, modelQ, partQ, typeQ]);

    useEffect(() => {
        // whenever filters change, go back to first page
        setPage(1);

        const sp = new URLSearchParams(location.search);
        sp.set("page", "1");
        navigate(`${location.pathname}?${sp.toString()}`, { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [makeQ, modelQ, partQ, typeQ]);

    const totalPages = Math.max(1, Math.ceil(filteredParts.length / PER_PAGE));
    const safePage = Math.min(Math.max(1, page), totalPages);

    const pagedParts = useMemo(() => {
        const start = (safePage - 1) * PER_PAGE;
        return filteredParts.slice(start, start + PER_PAGE);
    }, [filteredParts, safePage]);

    const goToPage = (next) => {
        const nextPage = Math.min(Math.max(1, next), totalPages);
        setPage(nextPage);

        const sp = new URLSearchParams(location.search);
        sp.set("page", String(nextPage));
        navigate(`${location.pathname}?${sp.toString()}`, { replace: false });
    };
    useEffect(() => {
        if (page === 1) {
            topRef.current?.scrollIntoView({ behavior: "auto" });
        } else { 
       
            resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [page]);

    useEffect(() => {
        const next = new URLSearchParams();

        if (makeQ.trim()) next.set("make", makeQ.trim());
        if (modelQ.trim()) next.set("model", modelQ.trim());
        if (partQ.trim()) next.set("part", partQ.trim());
        if (typeQ) next.set("type", typeQ);

        // ✅ KEEP PAGE IN URL
        next.set("page", String(safePage));

        setSearchParams(next, { replace: true });
    }, [makeQ, modelQ, partQ, typeQ, safePage, setSearchParams])

    const makeSuggestions = useMemo(() => {
        const q = makeQ.trim().toLowerCase();
        const uniques = Array.from(
            new Set(
                parts.flatMap(p => (p.fits || []).map(f => (f.make || "").trim())).filter(Boolean)
            )
        );

        if (!q) return uniques.slice(0, 8);
        return uniques.filter(v => v.toLowerCase().startsWith(q)).slice(0, 8);
    }, [makeQ]);

    const modelSuggestions = useMemo(() => {
        const make = makeQ.trim().toLowerCase();
        const q = modelQ.trim().toLowerCase();

        const pool = parts.flatMap(p =>
            (p.fits || [])
                .filter(f => !make || (f.make || "").toLowerCase().startsWith(make))
                .map(f => (f.model || "").trim())
        ).filter(Boolean);

        const uniques = Array.from(new Set(pool));
        if (!q) return uniques.slice(0, 8);
        return uniques.filter(v => v.toLowerCase().startsWith(q)).slice(0, 8);
    }, [modelQ, makeQ]);

    const partSuggestions = useMemo(() => {
        const make = makeQ.trim().toLowerCase();
        const model = modelQ.trim().toLowerCase();
        const q = partQ.trim().toLowerCase();

        const pool = parts.flatMap(p =>
            (p.fits || [])
                .filter(f => !make || (f.make || "").toLowerCase().startsWith(make))
                .filter(f => !model || (f.model || "").toLowerCase().startsWith(model))
                .map(f => (f.partNumber || "").trim())
        ).filter(Boolean);

        const uniques = Array.from(new Set(pool));
        if (!q) return uniques.slice(0, 8);
        return uniques.filter(v => v.toLowerCase().startsWith(q)).slice(0, 8);
    }, [partQ, makeQ, modelQ]);
    const handleLangClick = (nextLang) => {
        const path = location.pathname;
        

        // ✅ If we are on the Parts list page, switch list route
        if (path === "/parts" || path === "/dalys") {
            navigate(nextLang === "lt" ? "/dalys" : "/parts");
            handleLangChange(nextLang);
            return;
        }

        // Legal pages
        if (path === "/privacy-policy" || path === "/privacy-policy-lt") {
            navigate(nextLang === "lt" ? "/privacy-policy-lt" : "/privacy-policy");
            handleLangChange(nextLang);
            return;
        }

        if (path === "/terms-and-conditions" || path === "/terms-and-conditions-lt") {
            navigate(nextLang === "lt" ? "/terms-and-conditions-lt" : "/terms-and-conditions");
            handleLangChange(nextLang);
            return;
        }

        // All other pages
        handleLangChange(nextLang);
    };
    return (
        <div className="min-h-screen bg-black text-white">
            <div ref={topRef} >
            {/* Top bar */}
            <div className="border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-neutral-300">
                    {/* Left info */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="tel:+37065595179" className="hover:text-yellow-400 transition">
                            📞 +370 655 95179
                        </a>

                        <a
                            href="mailto:sales@forestasbaltic.lt"
                            className="hover:text-yellow-400 transition"
                        >
                            📧 sales@forestasbaltic.lt
                        </a>

                        <a
                            href="https://maps.app.goo.gl/fgvekbrxxsW5sysP7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400 transition"
                        >
                            📍 Alytus, Lietuva
                        </a>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-4">
                        {/* Language switcher */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleLangClick("lt")}
                                className={`font-semibold transition ${lang === "lt"
                                    ? "text-yellow-400"
                                    : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                LT
                            </button>

                            <span className="text-neutral-600">|</span>

                            <button
                                onClick={() => handleLangClick("en")}
                                className={`font-semibold transition ${lang === "en"
                                    ? "text-yellow-400"
                                    : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 mt-4">
                <BackToLanding lang={lang} />
            </div>
            {/* Page content */}
            <div className="mx-auto max-w-7xl px-4 py-10">
                
                <h1 className="text-2xl font-bold">{t("Parts", "Dalys")}</h1>

                <p className="text-neutral-400 mt-2">
                    {t(
                        "Search by machine make/model or part number.",
                        "Ieškokite pagal markę/modelį arba detalės numerį."
                    )}
                </p>

                {/* Search bars */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <AutocompleteInput
                        label={t("Make", "Markė")}
                        placeholder={t(
                            "Type make (CAT, Bobcat…)",
                            "Įveskite markę (CAT, Bobcat…)"
                        )}
                        value={makeQ}
                        onChange={setMakeQ}
                        suggestions={makeSuggestions}
                    />

                    <AutocompleteInput
                        label={t("Model", "Modelis")}
                        placeholder={t(
                            "Type model (259D…)",
                            "Įveskite modelį (259D…)"
                        )}
                        value={modelQ}
                        onChange={setModelQ}
                        suggestions={modelSuggestions}
                    />

                    <AutocompleteInput
                        label={t("Part number", "Detalės nr.")}
                        placeholder={t(
                            "Type part no. (487-6186…)",
                            "Įveskite detalės nr. (487-6186…)"
                        )}
                        value={partQ}
                        onChange={setPartQ}
                        suggestions={partSuggestions}
                    />
                </div>
                
                    <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="h-[42px] w-full rounded-xl border border-neutral-700 bg-neutral-800 text-sm font-semibold text-neutral-300 hover:border-yellow-400 hover:text-yellow-400 transition"
                    >
                        {t("Clear filters", "Išvalyti filtrus")}
                    </button>
                </div>
                {/* Results + Sidebar */}
                <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
                    {/* LEFT SIDEBAR */}
                    <aside className="h-fit rounded-2xl border border-neutral-800 bg-neutral-900 p-4 lg:sticky lg:top-6">
                        <div className="text-sm font-semibold text-neutral-200">
                            {t("Categories", "Kategorijos")}
                        </div>

                        <div className="mt-3 flex flex-col gap-2">
                            {/* ALL */}
                            <button
                                type="button"
                                onClick={() => setTypeQ("")}
                                className={`text-left text-sm transition ${typeQ === ""
                                    ? "text-yellow-400"
                                    : "text-neutral-300 hover:text-yellow-400"
                                    }`}
                            >
                                {t("All", "Visos")}
                            </button>

                            {PART_TYPES.map((c) => (
                                <button
                                    key={c.key}
                                    type="button"
                                    onClick={() => setTypeQ(c.key)}
                                    className={`text-left text-sm transition ${typeQ === c.key
                                        ? "text-yellow-400"
                                        : "text-neutral-300 hover:text-yellow-400"
                                        }`}
                                >
                                    {lang === "lt" ? c.lt : c.en}
                                </button>
                            ))}
                        </div>

                        {typeQ && (
                            <button
                                type="button"
                                onClick={() => setTypeQ("")}
                                className="mt-4 text-xs text-neutral-400 hover:text-yellow-400 transition"
                            >
                                {t("Clear category", "Išvalyti kategoriją")}
                            </button>
                        )}
                    </aside>

                    
                    {/* RIGHT RESULTS GRID */}
                    <section>
                        
                        <div ref={resultsRef} >
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                            {pagedParts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/${lang === "lt" ? "dalys" : "parts"}/${p.slug || p.id}`}
                                    className="block h-full"
                                >
                                    <div
                                        className="
            h-full flex flex-col
            rounded-3xl border border-neutral-800 bg-neutral-900
            hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10
            transition cursor-pointer overflow-hidden
          "
                                    >
                                        {/* IMAGE ZONE — FIXED HEIGHT */}
                                        <div className="h-48 w-full bg-black flex items-center justify-center overflow-hidden">
                                            {p.images?.[0] ? (
                                                <img
                                                    src={p.images[0]}
                                                    alt={p.title}
                                                    className="w-full h-full object-contain"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="text-neutral-600 text-sm">
                                                    No image
                                                </div>
                                            )}
                                        </div>

                                        {/* TEXT ZONE — FLEX LOCKED */}
                                        <div className="flex flex-col flex-1 p-5">
                                            {/* TITLE — FIXED TO 2 LINES */}
                                            <h3 className="text-lg font-semibold leading-snug line-clamp-2 min-h-[3.5rem]">
                                                {p.title?.[lang] || p.title?.en}
                                            </h3>

                                            {/* SPECS — FIXED HEIGHT */}
                                            <div className="mt-3 text-sm text-neutral-300 space-y-1 min-h-[4.5rem]">
                                                <div>
                                                    {t("Make", "Markė")}:{" "}
                                                    <span className="text-white">{p.fits?.[0]?.make}</span>
                                                </div>
                                                <div>
                                                    {t("Model", "Modelis")}:{" "}
                                                    <span className="text-white">{p.fits?.[0]?.model}</span>
                                                </div>
                                                <div>
                                                    {t("Part No.", "Detalės nr.")}:{" "}
                                                    <span className="text-white">{p.fits?.[0]?.partNumber}</span>
                                                </div>
                                            </div>

                                            {/* COMPATIBILITY FOOTER — PUSHED TO BOTTOM */}
                                            {p.fits?.length > 1 && (
                                                <div className="mt-auto pt-3 text-xs text-neutral-400">
                                                    + {p.fits.length - 1}{" "}
                                                    {t("compatible models", "kiti suderinami modeliai")}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {filteredParts.length > 0 && totalPages > 1 && (
                            <div className="mt-8 flex items-center justify-center gap-3 text-sm">
                                <button
                                    type="button"
                                    onClick={() => goToPage(safePage - 1)}
                                    disabled={safePage === 1}
                                    className={`rounded-xl border px-4 py-2 transition ${safePage === 1
                                            ? "border-neutral-800 text-neutral-500 cursor-not-allowed"
                                            : "border-neutral-700 text-neutral-200 hover:border-yellow-500 hover:text-yellow-400"
                                        }`}
                                >
                                    {t("Previous", "Atgal")}
                                </button>

                                <div className="text-neutral-300">
                                    {t("Page", "Puslapis")}{" "}
                                    <span className="text-white font-semibold">{safePage}</span>{" "}
                                    {t("of", "iš")}{" "}
                                    <span className="text-white font-semibold">{totalPages}</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => goToPage(safePage + 1)}
                                    disabled={safePage === totalPages}
                                    className={`rounded-xl border px-4 py-2 transition ${safePage === totalPages
                                            ? "border-neutral-800 text-neutral-500 cursor-not-allowed"
                                            : "border-neutral-700 text-neutral-200 hover:border-yellow-500 hover:text-yellow-400"
                                        }`}
                                >
                                    {t("Next", "Pirmyn")}
                                </button>
                            </div>
                        )}

                        {filteredParts.length === 0 && (
                            <p className="mt-6 text-neutral-400">
                                {t("No matching parts found.", "Nerasta tinkamų detalių.")}
                            </p>
                                )}
                        
                        </div>
                    </section>
                </div>
                <SiteFooter lang={lang} t={t} />
        </div>
            </div >
        </div>
    )
}