import React, { useMemo, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
// =====================================
// Ghedini Showcase � Simplified version
// � No prices, no specs
// � Just image + name + inquiry flow
// =====================================

// --- Categories (optional quick filters) ---
const CATEGORIES = [
    { id: "mulchers", name: "Mulchers" },
    { id: "auger", name: "Earth Augers" },
    { id: "pile", name: "Pile Drivers" },
    { id: "mowe", name: "Mowing buckets" },
    { id: "hedge", name: "Hedge Cutters" },
    { id: "compact", name: "Compactor Plates" },
    { id: "log", name: "Log Grabs" },
    { id: "polyp", name: "Polyps" },
    { id: "rake", name: "Rakes" },  
];
const CAT_LABELS = {
    en: { mulchers: "Mulchers", auger: "Earth Augers", pile: "Pile Drivers", mowe: "Mowing Buckets", hedge: "Hedge Cutters", compact: "Compactor Plates", log: "Log Grabs", polyp: "Polyps", rake: "Rakes" },
    lt: { mulchers: "Mulčeriai", auger: "Žemės grąžtai", pile: "Polių kaltuvai", mowe: "Šienavimo kaušai", hedge: "Gyvatvorių kirpimo įrenginiai", compact: "Ekskavatorinės vibroplokštės", log: "Giljotinos", polyp: "Greiferiai", rake: "Ekskavatoriniai grėbliai" }
};
// Lithuanian titles per product id
const TITLES_LT = {
    DA: "Ekskavatorinis mulčeris",
    DC: "Mini-krautuvinis mulčeris",
    DF: "Ekskavatorinis miško mulčeris",
    T: "Žemės grąžtai",
    IP: "Polių kaltuvai",
    BF: "Šienavimo kaušai",
    BT: "Gyvatvorių kirpimo įrenginiai",
    I: "Ekskavatorinės vibroplokštės",
    K: "Giljotinos",
    PO: "Greiferiai",
    BC: "Ekskavatoriniai grėbliai",
};

const getTitle = (p, lang) => lang === 'lt' ? (TITLES_LT[p.id] || p.title) : (p.title || TITLES_LT[p.id] || "");
// --- Minimal product data ---
const PRODUCTS = [
    { id: "DA", cat: "mulchers", title: "Mulchers for excavators", img: "/photos/damulcher.jpg" },
    { id: "DC", cat: "mulchers", title: "Mulchers for skid loaders", img: "/photos/dcmulcher.jpg" },
    { id: "DF", cat: "mulchers", title: "Forestry Mulchers for excavators", img: "/photos/dfmulcher.jpg" }, 
    { id: "T", cat: "auger", title: "Auger Drive", img: "/photos/auger.jpg" },
    { id: "IP", cat: "pile", title: "Piledriver", img: "/photos/piledriver.jpg" },
    { id: "BF", cat: "mowe", title: "Mowing Bucket", img: "/photos/mowing.jpg" },
    { id: "BT", cat: "hedge", title: "Hedgecutter", img: "/photos/hedgecutter.jpg" },
    { id: "I", cat: "compact", title: "Compactor Plate", img: "/photos/compactor.jpg" },
    { id: "K", cat: "log", title: "Log Grab", img: "/photos/loggrab.jpg" },
    { id: "PO", cat: "polyp", title: "Polyp", img: "/photos/polyp.jpg" },
    { id: "BC", cat: "rake", title: "Rake", img: "/photos/rake.jpg" },
];

function useFiltered({ q, cat, lang }) {
    return useMemo(() => {
        const qq = q.trim().toLowerCase();
        return PRODUCTS.filter((p) => {
            // Search across EN + LT titles
            const combined = `${ p.title || ''
                } ${TITLES_LT[p.id] || ''}`.toLowerCase();
        const matchesCat = !cat || p.cat === cat;
        const matchesQuery = !qq || combined.includes(qq) || p.id.toLowerCase().includes(qq);
        return matchesCat && matchesQuery;
    });
}, [q, cat, lang]);
}
function CategoryPage({ lang, setEnquire }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const t = (en, lt) => (lang === "en" ? en : lt);
    const cat = CATEGORIES.find((c) => c.id === id);
    const catName = cat ? (CAT_LABELS[lang][cat.id] || cat.name) : id;
    const items = PRODUCTS.filter((p) => p.cat === id);

    return (
        <main className="min-h-[60vh]">
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(253,224,71,0.12)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <button onClick={() => navigate(-1)} className="text-sm text-neutral-400 hover:text-white">← {t("Back", "Atgal")}</button>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{catName}</h1>
                    <p className="mt-3 text-neutral-300 max-w-3xl">
                        {t(
                            "Browse attachments in this category. Send us your machine model and hydraulic specs, and we'll recommend the right setup.",
                            "Peržiūrėkite šios kategorijos priedus. Parašykite mašinos modelį ir hidraulikos parametrus — pasiūlysime tinkamą komplektą."
                        )}
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10">
                {items.length === 0 ? (
                    <div className="text-neutral-400">{t("No items yet in this category.", "Šioje kategorijoje dar nėra įrašų.")}</div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p) => (
                            <div key={p.id} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 hover:shadow-[0_0_0_1px_rgba(253,224,71,0.3)] hover:border-yellow-400/50 transition">
                                <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-neutral-800 overflow-hidden">
                                    <img
                                        alt={getTitle(p, lang)}
                                        src={p.img}
                                        loading="lazy"
                                        decoding="async"
                                        width="800"
                                        height="600"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-semibold">{getTitle(p, lang)}</h3>
                                    <button onClick={() => setEnquire(p)} className="rounded-2xl bg-yellow-500 text-black px-3 py-2 text-sm font-medium hover:bg-yellow-400">
                                        {t("Inquire", "Užklausti")}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-10 flex flex-wrap gap-3">
                    <button onClick={() =>
                        scrollTo("contact")} className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900">{t("General inquiry", "Bendra užklausa")}</button>
                    <button onClick={() =>
                        scrollTo("catalog")} className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Back to all products", "Grįžti į visus produktus")}</button>
                </div>
            </section>
        </main>
    );
}
// ---- Product details page ----
const PRODUCT_TEXTS = {
    DA: { en: "Mulcher for excavators. Send carrier model + flow/pressure.", lt: "Mulčeris ekskavatoriams. Parašykite mašinos modelį ir srautą/slėgį." },
    DC: { en: "Mulcher for skid loaders.", lt: "Mulčeris mini krautuvams." },
    DF: { en: "Forestry mulcher for excavators.", lt: "Miško mulčeris ekskavatoriams." },
    T: { en: "Auger drive for earth drilling.", lt: "Žemės grąžto pavara." },
    IP: { en: "Pile driver attachment.", lt: "Polių kaltuvas." },
    BF: { en: "Mowing bucket.", lt: "Šienavimo kaušas." },
    BT: { en: "Hedge cutter.", lt: "Gyvatvorių kirpimo įrenginys." },
    I: { en: "Compactor plate.", lt: "Ekskavatorinė vibroplokštė." },
    K: { en: "Tree shear / log grab.", lt: "Medžių giljotina / griebtuvas." },
    PO: { en: "Polyp grab.", lt: "Polipas (greiferis)." },
    BC: { en: "Excavator rake.", lt: "Ekskavatorinis grėblys." },
};

function ProductPage({ lang, setEnquire }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const scrollTo = useScrollTo();
    const t = (en, lt) => (lang === "en" ? en : lt);
    const goBack = () => {
        if (window.history.length > 1) {
            // skip hash-only entries if any
            navigate(-1);
        } else {
            navigate("/", { replace: true });
        }
    };
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) {
        return (
            <main className="mx-auto max-w-7xl px-4 py-16">
                <button onClick={goBack} className="text-sm text-neutral-400 hover:text-white">← {t("Back", "Atgal")}</button>
                <h1 className="mt-4 text-2xl font-bold">{t("Product not found", "Produktas nerastas")}</h1>
            </main>
        );
    }

    const title = getTitle(p, lang);
    const copy = PRODUCT_TEXTS[p.id]?.[lang] || "";

    return (
        <main className="min-h-[60vh]">
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(253,224,71,0.12)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <button onClick={goBack} className="text-sm text-neutral-400 hover:text-white">← {t("Back", "Atgal")}</button>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
                    <p className="mt-3 text-neutral-300 max-w-3xl">{copy}</p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-2 md:items-start">
                <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4">
                    <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-neutral-800 overflow-hidden">
                        <img
                            alt={title}
                            src={p.img}
                            loading="lazy"
                            decoding="async"
                            width="800"
                            height="600"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="text-neutral-300">
                        {t(
                            "For exact fit, tell us your carrier (brand/model), quick-coupler, and hydraulic flow/pressure.",
                            "Tiksliai parinkčiai parašykite mašinos markę/modelį, kaušų kablį ir hidraulikos srautą/slėgį."
                        )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button onClick={() => setEnquire(p)} className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">
                            {t("Inquire about this product", "Užklausti dėl šio produkto")}
                        </button>
                        <button onClick={() =>
                            scrollTo("contact")} className = "rounded-2xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900" >
                            {t("General inquiry", "Bendra užklausa")}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

function useScrollTo() {
    return (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
export default function App() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("");
    const [lang, setLang] = useState("en");
    const [enquire, setEnquire] = useState(null); // product object

    const list = useFiltered({ q, cat: cat || undefined, lang });
    const t = (en, lt) => (lang === "en" ? en : lt);
    const catLabel = (c) => (CAT_LABELS[lang][c.id] || c.name);
    const productTitle = (p) => getTitle(p, lang);
    const scrollTo = useScrollTo();

    return (
        <BrowserRouter>
            <ScrollToTop />
        <div className="min-h-screen bg-black text-white">
            {/* Top bar */}
            <div className="w-full bg-black border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-neutral-300">
                        <span>+370 65595179</span>
                        <span className="hidden md:inline">sales@forestasbaltic.lt</span>
                        <span className="hidden md:inline">Alytus, Lithuania</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="rounded-md bg-yellow-500/20 text-yellow-400 px-2 py-0.5 text-xs border border-yellow-600/40">{t("Official dealer - Baltics", "Oficialus atstovas Baltijos šalyse")}</span>
                        <button onClick={() => setLang(lang === "en" ? "lt" : "en")} className="underline text-neutral-300 hover:text-white">{lang === "en" ? "LT" : "EN"}</button>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="font-black text-2xl tracking-tight">Forestas<span className="text-yellow-400">Baltic</span></Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                            <button onClick={() =>
                                scrollTo("catalog")} className="text-neutral-300 hover:text-white">{t("Products", "Produktai")}</button>
                         <button onClick={() =>
                            scrollTo("contact")} className="text-neutral-300 hover:text-white">{t("Contact", "Kontaktai")}</button>
                    </nav>
                    <a href="#contact" className="rounded-2xl border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-900">{t("Send inquiry", "Siųsti užklausą")}</a>
                </div>
            </header>

                <Routes>
                    <Route path="/"
                        element={ 
                            <>
            {/* Hero */}
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(253,224,71,0.15)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t("Ghedini Hydraulic Attachments", "Ghedini hidrauliniai priedai")}</h1>
                        <p className="mt-4 text-neutral-300 md:text-lg">{t("Showcase of attachments for excavators and loaders in the Baltics.", "Priedai ekskavatoriams ir krautuvams Baltijos šalyse.")}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{t("EU shipping available", "Pristatymas ES")}</span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{t("Ask for quote", "Klauskite kainos")}</span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">LT / EN </span>
                        </div>
                        <div className="mt-8 flex gap-3">
                            <a href="#catalog" className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Browse products", "Žiūrėti produktus")}</a>
                            <a href="#contact" className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900">{t("Send inquiry", "Siųsti užklausą")}</a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] w-full rounded-3xl border border-neutral-800 bg-neutral-900 shadow-sm grid place-items-center">
                            <div className="text-center px-6">
                                <div className="text-7xl">???</div>
                                <p className="mt-3 text-sm text-neutral-400">{t("Replace with product photos (flail / auger / pump)", "Pakeiskite produkto nuotraukomis (mul?eris / gr?�tas / siurblys)")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Finder */}
            <section id="catalog" className="border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">{t("Products", "Produktai")}</h2>
                            <p className="text-neutral-400">{t("Search or filter, then send an inquiry.", "Ieškokite arba filtruokite ir siųskite užklausą.")}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-center">
                            <input value={q} onChange={e => setQ(e.target.value)} placeholder={t("Search by name or SKU", "Paieška pagal pavadinimą ar SKU")} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <select value={cat} onChange={e => setCat(e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white px-3 py-2 text-sm">
                                <option className="bg-neutral-900" value="">{t("All categories", "Visos kategorijos")}</option>
                                {CATEGORIES.map(c => (
                                    <option className="bg-neutral-900" key={c.id} value={c.id}>{catLabel(c)}
                                    </option>
                                ))}
                            </select>
                            <a href="#contact" className="rounded-xl border border-neutral-700 px-3 py-2 text-center text-sm bg-neutral-900 hover:bg-neutral-800">{t("General inquiry", "Bendra užklausa")}</a>
                        </div>
                    </div>

                    {/* Product grid: image + title + inquire */}
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                            {list.map(p => (
                            <Link
                             key={p.id}
                            to ={`/p/${p.id}`}
                            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 hover:shadow-yellow-500/10 hover:shadow transition">
                                <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-neutral-800 overflow-hidden">
                                                        <img
                                                            alt={productTitle(p)}
                                                            src={p.img}
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="800"
                                                            height="600"
                                                            className="h-full w-full object-cover"
                                                        />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-semibold">{productTitle(p)}</h3>
                                    <span className="rounded-2xl border border-neutral-700 px-3 py-2 text-sm">{t("Open", "Atidaryti")}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                                </section>
                            </>
                            } />
                    <Route path="/p/:id" element={<ProductPage lang={lang} setEnquire={setEnquire} />} />
                </Routes>

            {/* Contact */}
            <section id="contact">
                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">{t("Contact sales", "Susisiekite su pardavėju")}</h2>
                        <p className="text-neutral-400 mt-2">{t("Send your machine model and which attachment you're interested in.", "Parašykite mašinos modelį ir kuris priedas domina.")}</p>
                        <ul className="mt-4 text-sm text-neutral-300">
                            <li> sales@forestasbaltic.lt</li>
                            <li> +370 65595179</li>
                            <li> Alytus, Lithuania</li>
                        </ul>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reply shortly.'); }} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 grid gap-3">
                        <input required placeholder={t("Your name", "Jūsų vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input placeholder={t("Company (optional)", "Įmonė (nebūtina)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <textarea rows={5} defaultValue={enquire ? `${t("Interested in:", "Domina:")} ${productTitle(enquire) } (SKU: ${enquire.id})
` : ""} placeholder={t("Message (product, machine model, questions)", "Žinutė (produktas, mašinos modelis, klausimai)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <button className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Send inquiry", "Siųsti užklausą")}</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div> {new Date().getFullYear()} ForestasBaltic - {t("Ghedini dealer for the Baltics", "Ghedini atstovas Baltijos šalyse")}</div>
                    <div className="flex gap-4"><a className="hover:text-white" href="#">Privacy</a><a className="hover:text-white" href="#">Terms</a></div>
                </div>
            </footer>

            {/* Inquiry modal (quick message) */}
            {enquire && (
                <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4" onClick={() => setEnquire(null)}>
                    <div className="w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 p-5" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold">{t("Send inquiry", "Siųsti užklausą")}</h3>
                        <p className="text-sm text-neutral-300 mt-1">{t("Product:", "Produktas:")} {enquire.title} (SKU: {enquire.id})</p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reply shortly.'); setEnquire(null); }} className="mt-4 grid gap-3">
                            <input required placeholder={t("Your name", "J?s? vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <input required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <textarea rows={5} defaultValue={`${t("Interested in:", "Domina:")} ${productTitle(enquire) } (SKU: ${enquire.id})
`} placeholder={t("Message", "Žinutė")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <div className="flex items-center justify-end gap-2">
                                <button type="button" onClick={() => setEnquire(null)} className="rounded-2xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900">{t("Cancel", "Atšaukti")}</button>
                                <button className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Send", "Siųsti")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
        </BrowserRouter>
    );
}
