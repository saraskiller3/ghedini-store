import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { parts } from "../data/parts";
import { Helmet } from "react-helmet-async";
import SiteFooter from "../components/SiteFooter";

export default function PartPage({ lang, handleLangChange }) {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const t = (en, lt) => (lang === "lt" ? lt : en);

    // Sync language with URL prefix
    useEffect(() => {
        if (location.pathname.startsWith("/dalys")) {
            handleLangChange("lt");
        } else if (location.pathname.startsWith("/parts")) {
            handleLangChange("en");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    // Find part by slug OR id
    const part = useMemo(() => {
        return parts.find(
            (p) => String(p.slug) === String(id) || String(p.id) === String(id)
        );
    }, [id]);

    // Not found
    if (!part) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div>
                    <h1 className="text-2xl font-bold">{t("Part not found", "Detalė nerasta")}</h1>
                    <Link
                        to={lang === "lt" ? "/dalys" : "/parts"}
                        className="text-yellow-400 mt-4 inline-block"
                    >
                        ← {t("Back to parts", "Grįžti į dalis")}
                    </Link>
                </div>
            </div>
        );
    }

    // Local language switch that also changes URL
    const handleLocalLangChange = (nextLang) => {
        const last = location.pathname.split("/").pop(); // slug/id in URL
        navigate(nextLang === "lt" ? `/dalys/${last}` : `/parts/${last}`);
        handleLangChange(nextLang);
    };

    // Title/description from bilingual object (new structure)
    const titleLocal = lang === "lt" ? (part.title?.lt || part.title?.en || "") : (part.title?.en || part.title?.lt || "");
    const descLocal = lang === "lt" ? (part.description?.lt || part.description?.en || "") : (part.description?.en || part.description?.lt || "");

    const brand = "Forestas Baltic";

    // Build SEO strings
    const seoTitle = `${titleLocal} | ${brand}`;

    // If description missing, create a reasonable fallback from fits
    const firstFit = part.fits?.[0];
    const fallbackDesc =
        lang === "lt"
            ? `Parduodama ${titleLocal}. Susisiekite dėl kainos ir pristatymo.`
            : `Buy ${titleLocal}. Contact us for price and delivery.`;

    const seoDescription = descLocal || fallbackDesc;

    // Canonical / alternates
    const base = "https://forestasbaltic.lt";
    const enUrl = `${base}/parts/${part.slug || part.id}`;
    const ltUrl = `${base}/dalys/${part.slug || part.id}`;
    const canonical = lang === "lt" ? ltUrl : enUrl;

    // Back link should match current language
    const backToList = lang === "lt" ? "/dalys" : "/parts";

    return (
        <div className="min-h-screen bg-black text-white">
            {/* SEO */}
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="en" href={enUrl} />
                <link rel="alternate" hrefLang="lt" href={ltUrl} />
                <link rel="alternate" hrefLang="x-default" href={enUrl} />

                {/* OpenGraph */}
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:type" content="product" />
                {part.images?.[0] && <meta property="og:image" content={`${base}${part.images[0]}`} />}
            </Helmet>

            {/* Top bar */}
            <div className="border-b border-neutral-800">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between text-sm text-neutral-300">
                    <Link to={backToList} className="hover:text-yellow-400 transition">
                        ← {t("Back to parts", "Grįžti į dalis")}
                    </Link>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => handleLocalLangChange("lt")}
                            className={`font-semibold transition ${lang === "lt" ? "text-yellow-400" : "text-neutral-400 hover:text-white"
                                }`}
                        >
                            LT
                        </button>
                        <span className="text-neutral-600">|</span>
                        <button
                            type="button"
                            onClick={() => handleLocalLangChange("en")}
                            className={`font-semibold transition ${lang === "en" ? "text-yellow-400" : "text-neutral-400 hover:text-white"
                                }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>

            {/* Page */}
            <div className="mx-auto max-w-5xl px-4 py-16">
                {/* Image (optional) */}
                {part.images?.[0] && (
                    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden">
                        <img
                            src={part.images[0]}
                            alt={titleLocal}
                            className="w-full h-[360px] object-contain bg-black"
                            loading="lazy"
                        />
                    </div>
                )}

                <h1 className="mt-6 text-3xl font-bold">{titleLocal}</h1>

                {seoDescription && (
                    <p className="mt-3 text-neutral-400">{seoDescription}</p>
                )}

                {/* Compatible machines / part numbers */}
                <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
                    <div className="text-lg font-semibold">
                        {t("Compatibility", "Suderinamumas")}
                    </div>

                    <div className="mt-4 grid gap-3">
                        {(part.fits || []).map((f, idx) => (
                            <div
                                key={`${f.make}-${f.model}-${f.partNumber}-${idx}`}
                                className="rounded-2xl border border-neutral-800 bg-black/40 p-4"
                            >
                                <div className="text-sm text-neutral-300 space-y-1">
                                    <div>
                                        {t("Make", "Markė")}:{" "}
                                        <span className="text-white">{f.make || "-"}</span>
                                    </div>
                                    <div>
                                        {t("Model", "Modelis")}:{" "}
                                        <span className="text-white">{f.model || "-"}</span>
                                    </div>
                                    <div>
                                        {t("Part number", "Detalės numeris")}:{" "}
                                        <span className="text-white">{f.partNumber || "-"}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {(!part.fits || part.fits.length === 0) && (
                            <p className="text-neutral-400 text-sm">
                                {t(
                                    "No compatibility data yet. Contact us and we will confirm fitment.",
                                    "Kol kas nėra suderinamumo duomenų. Susisiekite ir patikrinsime suderinamumą."
                                )}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <SiteFooter lang={lang} t={t} />
        </div>
    );
}