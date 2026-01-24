import { useMemo, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { tiltrotators } from "../data/tiltrotators";

export default function TiltrotatorPage({ lang, handleLangChange }) {
    const t = (en, lt) => (lang === "lt" ? lt : en);
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Sync language based on URL prefix
    useEffect(() => {
        if (location.pathname.startsWith("/tiltrotatoriai/")) {
            handleLangChange("lt");
        } else if (location.pathname.startsWith("/tiltrotators/")) {
            handleLangChange("en");
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    const item = useMemo(
        () => tiltrotators.find((x) => x.slug === slug),
        [slug]
    );

    if (!item) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div>
                    <h1 className="text-2xl font-bold">{t("Not found", "Nerasta")}</h1>
                    <Link
                        to={lang === "lt" ? "/tiltrotatoriai" : "/tiltrotators"}
                        className="text-yellow-400 mt-4 inline-block"
                    >
                        ← {t("Back", "Atgal")}
                    </Link>
                </div>
            </div>
        );
    }

    const titleLocal = lang === "lt" ? item.titleLt : item.titleEn;
    const descLocal = lang === "lt" ? item.textLt : item.textEn;

    const base = "https://forestasbaltic.lt";
    const enUrl = `${base}/tiltrotators/${item.slug}`;
    const ltUrl = `${base}/tiltrotatoriai/${item.slug}`;
    const canonical = lang === "lt" ? ltUrl : enUrl;

    const handleLocalLangChange = (nextLang) => {
        navigate(`${nextLang === "lt" ? "/tiltrotatoriai" : "/tiltrotators"}/${item.slug}`);
        handleLangChange(nextLang);
    };

    const bullets = lang === "lt" ? (item.bulletsLt || []) : (item.bulletsEn || []);

    return (
        <div className="min-h-screen bg-black text-white">
            <Helmet>
                <title>{titleLocal} | Forestas Baltic</title>
                <meta name="description" content={descLocal} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="en" href={enUrl} />
                <link rel="alternate" hrefLang="lt" href={ltUrl} />
                <link rel="alternate" hrefLang="x-default" href={enUrl} />
            </Helmet>

            <div className="border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between text-sm text-neutral-300">
                    <Link
                        to={lang === "lt" ? "/tiltrotatoriai" : "/tiltrotators"}
                        className="hover:text-yellow-400 transition"
                    >
                        ← {t("Back to tiltrotators", "Grįžti į tiltrotatorius")}
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

            <div className="mx-auto max-w-7xl px-4 py-10">
                <div className="grid gap-8 md:grid-cols-2 md:items-start">
                    <img
                        src={item.img}
                        alt={titleLocal}
                        className="w-full rounded-3xl border border-neutral-800 object-cover"
                    />

                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold">{titleLocal}</h1>
                        <p className="mt-3 text-neutral-300">{descLocal}</p>

                        {bullets.length > 0 && (
                            <ul className="mt-6 space-y-2 text-neutral-300 list-disc pl-5">
                                {bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        )}

                        <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
                            <p className="text-neutral-300">
                                {t(
                                    "Want a quote? Send your excavator model and quick-coupler type.",
                                    "Norite pasiūlymo? Parašykite ekskavatoriaus modelį ir jungties tipą."
                                )}
                            </p>
                            <a
                                href="mailto:sales@forestasbaltic.lt"
                                className="inline-block mt-4 text-yellow-400 hover:text-yellow-300"
                            >
                                sales@forestasbaltic.lt →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 