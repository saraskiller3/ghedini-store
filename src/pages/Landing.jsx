import { Link } from "react-router-dom"
import { useState } from "react";
export default function Landing({ lang, handleLangChange }) {
    const t = (en, lt) => (lang === "lt" ? lt : en);
    const [langOpen, setLangOpen] = useState(false);
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Simple top bar */}
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
                                        onClick={() => { handleLangChange(l.code); setLangOpen(false); }}
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

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            Forestas<span className="text-yellow-400">Baltic</span>
                        </h1>

                        <p className="mt-4 text-neutral-300 text-lg">
                            {t
                                ? t(
                                    "Hydraulic attachments and spare parts for machinery (Excavators, Buldozers, Loaders and others)",
                                    "Hidrauliniai priedai ir atsarginės dalys sunkiąjai technikai (Ekskavatoriams, Buldozeriams, Krautuvams ir kt.)"
                                )
                                : "Hydraulic attachments and spare parts for machinery (Excavators, Buldozers, Loaders and others)"}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
                                {t ? t("Official dealer", "Oficialus atstovas") : "Official dealer"}
                            </span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
                                {t ? t("Service & support", "Servisas ir priežiūra") : "Service & support"}
                            </span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
                                {t ? t("EU shipping", "Pristatymas ES") : "EU shipping"}
                            </span>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-4">
                        <Link
                            to="/ghedini"
                            className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-6 hover:border-yellow-500 transition"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        Ghedini <span className="text-yellow-400">Attachments</span>
                                    </h2>
                                    <p className="mt-1 text-neutral-300">
                                        {t
                                            ? t(
                                                "Mulchers, Augers, Log grabs, Mowing buckets and others",
                                                "Mulčeriai, Žemės grąžtai, Medžių griebtuvai, Šienavimo kaušai ir kt."
                                            )
                                            : "Mulchers, Augers, Log grabs, Mowing buckets and others"}
                                    </p>
                                </div>
                                <span className="text-yellow-400 group-hover:translate-x-1 transition">→</span>
                            </div>
                        </Link>

                        <Link
                            to="/parts"
                            className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-6 hover:border-yellow-500 transition"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {t ? t("Spare", "Atsarginės") : "Spare"}{" "}
                                        <span className="text-yellow-400">
                                            {t ? t("Parts", "dalys") : "Parts"}
                                        </span>
                                    </h2>
                                    <p className="mt-1 text-neutral-300">
                                        {t
                                            ? t(
                                                "Pumps, motors, valves, seal kits and more.",
                                                "Siurbliai, varikliai, vožtuvai, remkomplektai ir kt."
                                            )
                                            : "Pumps, motors, valves, seal kits and more."}
                                    </p>
                                </div>
                                <span className="text-yellow-400 group-hover:translate-x-1 transition">→</span>
                            </div>
                        </Link>

                        <div className="rounded-3xl border border-neutral-800 bg-black p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-md bg-yellow-500/20 text-yellow-400 px-2 py-1 text-xs border border-yellow-600/40">
                                    {t ? t("Official dealer - Baltics", "Oficialus atstovas Baltijos šalyse") : "Official dealer - Baltics"}
                                </span>
                                <span className="rounded-md bg-green-600/20 text-green-300 px-2 py-1 text-xs border border-green-700/40">
                                    {t ? t("Made in Italy", "Pagaminta Italijoje") : "Made in Italy"}
                                </span>
                            </div>

                            <p className="mt-4 text-neutral-400 text-sm">
                                {t
                                    ? t(
                                        "Need help choosing? Send an inquiry to sales@forestasbaltic.lt",
                                        "Reikia pagalbos? Siųskite užklausą į sales@forestasbaltic.lt"
                                    )
                                    : "Need help choosing? Send an inquiry to sales@forestasbaltic.lt"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer quick */}
            <footer className="border-t border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>© {new Date().getFullYear()} Forestas Baltic</div>
                    <div className="flex gap-4">
                        <Link
                            to={lang === "lt" ? "/privacy-policy-lt" : "/privacy-policy"}
                            className="hover:text-yellow-400"
                        >
                            {lang === "lt" ? "Privatumo politika" : "Privacy Policy"}
                        </Link>

                        <Link
                            to={lang === "lt" ? "/terms-and-conditions-lt" : "/terms-and-conditions"}
                            className="hover:text-yellow-400"
                        >
                            {lang === "lt" ? "Taisyklės ir sąlygos" : "Terms & Conditions"}
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}