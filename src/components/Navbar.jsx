import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ lang, t, handleLangChange, scrollTo, goToProducts }) {
    const [langOpen, setLangOpen] = useState(false);


    return (
        <>
            {/* Top bar */}
            <div className="w-full bg-black border-b border-neutral-800">

                {/* DESKTOP */}
                <div className="hidden md:flex mx-auto max-w-7xl px-4 py-2 items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-neutral-300">

                        <a href="tel:+37065595179" className="flex items-center gap-1 hover:text-yellow-400">
                            📞 +370 65595179
                        </a>

                        <a href="mailto:sales@forestasbaltic.lt" className="flex items-center gap-1 hover:text-yellow-400">
                            ✉️ sales@forestasbaltic.lt
                        </a>

                        <a href="https://maps.app.goo.gl/9XE5vLQnVy6VXEAH8"
                            target="_blank"
                            className="flex items-center gap-1 hover:text-yellow-400">
                            📍 Alytus, Lietuva
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="rounded-md bg-yellow-500/20 text-yellow-400 px-2 py-0.5 text-xs border border-yellow-600/40">
                            {t("Official dealer - Baltics", "Oficialus atstovas Baltijos šalyse")}
                        </span>

                        <span className="flex items-center gap-1 rounded-md bg-green-600/20 text-green-300 px-2 py-0.5 text-xs border border-green-700/40">
                            <img src="/flags/it.svg" className="w-4 h-3 rounded-sm" />
                            {t("Made in Italy", "Pagaminta Italijoje")}
                        </span>

                        {/* LANG FLAGS */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-2 px-2 py-1 border border-neutral-700 rounded-md hover:border-yellow-400 transition"
                            >
                                <img
                                    src={`/flags/${lang}.svg`}
                                    alt={lang}
                                    className="w-6 h-4 rounded-sm"
                                />
                                <span className="uppercase text-sm text-white">{lang}</span>

                                <svg className={`w-4 h-4 transition ${langOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {langOpen && (
                                <div className="absolute right-0 mt-2 w-28 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50">
                                    {[
                                        { code: "en", label: "EN" },
                                        { code: "lt", label: "LT" },
                                    ].map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                handleLangChange(l.code);
                                                setLangOpen(false);
                                            }}
                                            className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-800 ${lang === l.code ? "bg-neutral-800 text-yellow-400" : "text-white"
                                                }`}
                                        >
                                            <img
                                                src={`/flags/${l.code}.svg`}
                                                className="w-6 h-4 rounded-sm"
                                            />
                                            {l.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* MOBILE */}
                <div className="md:hidden mx-auto px-4 py-3 space-y-2 text-sm text-neutral-300">

                    {/* Phone + Email */}
                    <div className="flex justify-between">
                        <a href="tel:+37065595179" className="hover:text-yellow-400">📞 +370 65595179</a>
                        <a href="mailto:sales@forestasbaltic.lt" className="hover:text-yellow-400">✉️ sales@forestasbaltic.lt</a>
                    </div>

                    {/* Location + Official dealer */}
                    <div className="flex justify-between">
                        <a href="https://maps.app.goo.gl/9XE5vLQnVy6VXEAH8" className="hover:text-yellow-400">📍 Alytus</a>
                        <span className="rounded-md bg-yellow-500/20 text-yellow-400 px-2 py-0.5 text-xs border border-yellow-600/40">
                            {t("Official dealer - Baltics", "Oficialus atstovas Baltijos šalyse")}
                        </span>
                    </div>

                    {/* Made in Italy + Language */}
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1 rounded-md bg-green-600/20 text-green-300 px-2 py-0.5 text-xs border border-green-700/40">
                            <img src="/flags/it.svg" className="w-4 h-3 rounded-sm" />
                            {t("Made in Italy", "Pagaminta Italijoje")}
                        </span>

                        {/* LANG DROPDOWN */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-2 px-2 py-1 border border-neutral-700 rounded-md hover:border-yellow-400 transition"
                            >
                                <img src={`/flags/${lang}.svg`} className="w-6 h-4 rounded-sm" />
                                <span className="uppercase text-sm">{lang}</span>
                            </button>

                            {langOpen && (
                                <div className="absolute right-0 mt-2 w-28 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50">
                                    {[
                                        { code: "en", label: "EN" },
                                        { code: "lt", label: "LT" },
                                    ].map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                handleLangChange(l.code);
                                                setLangOpen(false);
                                            }}
                                            className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-800 ${lang === l.code ? "bg-neutral-800 text-yellow-400" : "text-white"
                                                }`}
                                        >
                                            <img src={`/flags/${l.code}.svg`} className="w-6 h-4 rounded-sm" />
                                            {l.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>


            {/* Main nav bar */}
            <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 font-black text-2xl tracking-tight">
                        <img
                            src="/photos/forestas.avif"
                            alt="Forestas Baltic"
                            className="h-12 w-auto opacity-90 hover:opacity-100 transition"
                        />
                        <span>Forestas<span className="text-yellow-400">Baltic</span></span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <button onClick={goToProducts} className="text-neutral-300 hover:text-white">
                            {t("Products", "Produktai")}
                        </button>
                        <button onClick={() => scrollTo("contact")} className="text-neutral-300 hover:text-white">
                            {t("Contact", "Kontaktai")}
                        </button>
                    </nav>

                    <button onClick={() => scrollTo("contact")}
                        className="rounded-2xl border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-900">
                        {t("Send inquiry", "Siųsti užklausą")}
                    </button>
                </div>
            </header>
        </>
    );
}
