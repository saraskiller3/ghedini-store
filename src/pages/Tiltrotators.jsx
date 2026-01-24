import { Helmet } from "react-helmet-async";
import BackToLanding from "./BackToLanding";
import SiteFooter from "../components/SiteFooter";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom"; 
import { tiltrotators } from "../data/tiltrotators";
export default function Tiltrotators({ lang, handleLangChange }) {
    const t = (en, lt) => (lang === "lt" ? lt : en);
   
    const [langOpen, setLangOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLocalLangChange = (nextLang) => {
        // switch URL
        navigate(nextLang === "lt" ? "/tiltrotatoriai" : "/tiltrotators");
        // switch global language state
        handleLangChange(nextLang);
    };
    return (
        <div className="min-h-screen bg-black text-white">
            <Helmet>
                <title>{t("Tiltrotators | Forestas Baltic", "Tiltrotatoriai | Forestas Baltic")}</title>
                <meta
                    name="description"
                    content={t(
                        "Tiltrotators for excavators: models for 1 to 26 ton excavators, options, delivery in EU.",
                        "Tiltrotatoriai ekskavatoriams: modeliai nuo 1 iki 26 tonų ekskavatoriams, komplektacijos, pristatymas ES."
                    )}
                />
            </Helmet>
            <div className="w-full border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between text-sm text-neutral-300">
                    <div className="flex items-center gap-3">
                        <a href="tel:+37065595179" className="hover:text-yellow-400">📞 +370 65595179</a>
                        <a href="mailto:sales@forestasbaltic.lt" className="hover:text-yellow-400 hidden sm:inline">✉️ sales@forestasbaltic.lt</a>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/9XE5vLQnVy6VXEAH8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400"
                    >
                        📍 Alytus, Lithuania
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(v => !v)}
                            className="flex items-center gap-2 px-2 py-1 border border-neutral-700 rounded-md hover:border-yellow-400 transition"
                        >
                            <img src={`/flags/${lang}.svg`} alt={lang} className="w-6 h-4 object-cover rounded-sm" />
                            <span className="uppercase text-sm text-white">{lang}</span>
                            <svg className={`w-4 h-4 transition ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {langOpen && (
                            <div className="absolute right-0 mt-2 w-28 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50">
                                {[
                                    { code: "lt", label: "LT" },
                                    { code: "en", label: "EN" },
                                ].map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => { handleLocalLangChange(l.code); setLangOpen(false); }}
                                        className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-800 ${lang === l.code ? "bg-neutral-800 text-yellow-400" : "text-white"
                                            }`}
                                    >
                                        <img src={`/flags/${l.code}.svg`} alt={l.label} className="w-6 h-4 object-cover rounded-sm" />
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 pt-6">
                <BackToLanding lang={lang} />
            </div>

            <section className="mx-auto max-w-7xl px-4 py-10">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    {t("Tiltrotators", "Tiltrotatoriai")}
                </h1>

                <p className="mt-4 text-neutral-300 md:text-lg">
                    {t(
                        "360 degree rotation and 45 degree tilt ensures a 50-200% increase in work performance with an excavator. Tiltrotators - best investment for Your excavator.",
                        "360 laipsnių apsisukimas bei 45 laipsnių vartymasis suteikia 50-200% padidintą darbo našumą su ekskavatoriumi. Tiltrotatoriai - geriausia investicija Jūsų ekskavatoriui."
                    )}
                </p>

                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="grid gap-4">
                        {tiltrotators.map((x) => {
                            const base = lang === "lt" ? "/tiltrotatoriai" : "/tiltrotators";
                            const title = lang === "lt" ? x.titleLt : x.titleEn;
                            const text = lang === "lt" ? x.textLt : x.textEn;

                            return (
                                <Link
                                    key={x.id}
                                    to={`${base}/${x.slug}`}
                                    className="group block rounded-3xl border border-neutral-800 bg-neutral-900/80 hover:border-yellow-500 transition"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
                                        {/* Image */}
                                        <div className="w-full sm:w-44 md:w-52 flex-shrink-0">
                                            <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-black p-2 overflow-hidden">
                                                <img
                                                    src={x.img}
                                                    alt={title}
                                                    className="h-full w-full object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg sm:text-xl font-bold break-words">
                                                {title}
                                            </h3>

                                            <p className="mt-1 text-neutral-300 break-words">
                                                {text}
                                            </p>

                                            <span className="mt-3 inline-block text-yellow-400 group-hover:translate-x-1 transition">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <SiteFooter lang={lang} t={t} />
        </div>
    );
}