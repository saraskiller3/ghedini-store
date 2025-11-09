import React, { useMemo, useState } from "react";

// =====================================
// Ghedini Showcase — Simplified version
// • No prices, no specs
// • Just image + name + inquiry flow
// =====================================

// --- Categories (optional quick filters) ---
const CATEGORIES = [
    { id: "flail", name: "Flail Mowers" },
    { id: "auger", name: "Earth Augers" },
    { id: "dredge", name: "Dredging Pumps" },
    { id: "trencher", name: "Trenchers" },
    { id: "hedge", name: "Hedge Trimmers" },
    { id: "mixer", name: "Concrete Mixers" },
];

// --- Minimal product data ---
const PRODUCTS = [
    { id: "DA120", cat: "flail", title: "DA120 Flail Mower", img: "https://images.unsplash.com/photo-1605649487210-43f0f5c8f3f0?q=80&w=1200&auto=format&fit=crop" },
    { id: "DB160", cat: "flail", title: "DB160 Flail Mower", img: "https://images.unsplash.com/photo-1543914095-0cf6624f936f?q=80&w=1200&auto=format&fit=crop" },
    { id: "T25", cat: "auger", title: "T25 Auger Drive", img: "https://images.unsplash.com/photo-1593594030771-62f2a5cfa06f?q=80&w=1200&auto=format&fit=crop" },
    { id: "SG30", cat: "dredge", title: "SG30 Dredging Pump", img: "https://images.unsplash.com/photo-1581093191431-1a75630c45af?q=80&w=1200&auto=format&fit=crop" },
    { id: "TC90", cat: "trencher", title: "TC90 Trencher", img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop" },
    { id: "TT270", cat: "hedge", title: "TT270 Hedge Trimmer", img: "https://images.unsplash.com/photo-1543185377-99cdb2513ac0?q=80&w=1200&auto=format&fit=crop" },
    { id: "MX200", cat: "mixer", title: "MX200 Concrete Mixer", img: "https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=1200&auto=format&fit=crop" },
];

function useFiltered({ q, cat }) {
    return useMemo(() => {
        const qq = q.trim().toLowerCase();
        return PRODUCTS.filter(p => (!cat || p.cat === cat) && (!qq || p.title.toLowerCase().includes(qq) || p.id.toLowerCase().includes(qq)));
    }, [q, cat]);
}

export default function App() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("");
    const [lang, setLang] = useState("en");
    const [enquire, setEnquire] = useState(null); // product object

    const list = useFiltered({ q, cat: cat || undefined });
    const t = (en, lt) => (lang === "en" ? en : lt);

    return (
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
                        <span className="rounded-md bg-yellow-500/20 text-yellow-400 px-2 py-0.5 text-xs border border-yellow-600/40">{t("Official dealer - Baltics", "Oficialus atstovas — Baltija")}</span>
                        <button onClick={() => setLang(lang === "en" ? "lt" : "en")} className="underline text-neutral-300 hover:text-white">{lang === "en" ? "LT" : "EN"}</button>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                    <a href="#home" className="font-black text-2xl tracking-tight">Forestas<span className="text-yellow-400">Baltic</span></a>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#catalog" className="text-neutral-300 hover:text-white">{t("Products", "Produktai")}</a>
                        <a href="#contact" className="text-neutral-300 hover:text-white">{t("Contact", "Kontaktai")}</a>
                    </nav>
                    <a href="#contact" className="rounded-2xl border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-900">{t("Send inquiry", "Si?sti užklaus?")}</a>
                </div>
            </header>

            {/* Hero */}
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(16,185,129,0.12)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t("Ghedini Hydraulic Attachments", "Ghedini hidrauliniai priedai")}</h1>
                        <p className="mt-4 text-neutral-300 md:text-lg">{t("Showcase of attachments for excavators and loaders in the Baltics.", "Pried? ekskavatoriams ir krautuvams vitrina Baltijai.")}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{t("EU shipping available", "Pristatymas ES")}</span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{t("Ask for quote", "Klauskite kainos")}</span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">LT / EN </span>
                        </div>
                        <div className="mt-8 flex gap-3">
                            <a href="#catalog" className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Browse products", "Ži?r?ti produktus")}</a>
                            <a href="#contact" className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900">{t("Send inquiry", "Si?sti užklaus?")}</a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] w-full rounded-3xl border border-neutral-800 bg-neutral-900 shadow-sm grid place-items-center">
                            <div className="text-center px-6">
                                <div className="text-7xl">???</div>
                                <p className="mt-3 text-sm text-neutral-400">{t("Replace with product photos (flail / auger / pump)", "Pakeiskite produkto nuotraukomis (mul?eris / gr?žtas / siurblys)")}</p>
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
                            <p className="text-neutral-400">{t("Search or filter, then send an inquiry.", "Ieškokite arba filtruokite ir si?skite užklaus?.")}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-center">
                            <input value={q} onChange={e => setQ(e.target.value)} placeholder={t("Search by name or SKU…", "Paieška pagal pavadinim? ar SKU…")} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <select value={cat} onChange={e => setCat(e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white px-3 py-2 text-sm">
                                <option className="bg-neutral-900" value="">{t("All categories", "Visos kategorijos")}</option>
                                {CATEGORIES.map(c => <option className="bg-neutral-900" key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                            <a href="#contact" className="rounded-xl border border-neutral-700 px-3 py-2 text-center text-sm bg-neutral-900 hover:bg-neutral-800">{t("General inquiry", "Bendra užklausa")}</a>
                        </div>
                    </div>

                    {/* Product grid: image + title + inquire */}
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {list.map(p => (
                            <div key={p.id} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 hover:shadow-yellow-500/10 hover:shadow transition">
                                <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-neutral-800 overflow-hidden">
                                    <img alt={p.title} src={p.img} className="h-full w-full object-cover" />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-semibold">{p.title}</h3>
                                    <button onClick={() => setEnquire(p)} className="rounded-2xl bg-yellow-500 text-black px-3 py-2 text-sm font-medium hover:bg-yellow-400">{t("Inquire", "Užklausti")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact">
                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">{t("Contact sales", "Susisiekite su pardavimais")}</h2>
                        <p className="text-neutral-400 mt-2">{t("Send your machine model and which attachment you're interested in.", "Parašykite mašinos model? ir kuris priedas domina.")}</p>
                        <ul className="mt-4 text-sm text-neutral-300">
                            <li> sales@forestasbaltic.lt</li>
                            <li> +370 65595179</li>
                            <li> Alytus, Lithuania</li>
                        </ul>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reply shortly.'); }} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 grid gap-3">
                        <input required placeholder={t("Your name", "J?s? vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input placeholder={t("Company (optional)", "?mon? (neb?tina)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <textarea rows={5} defaultValue={enquire ? `${t("Interested in:", "Domina:")} ${enquire.title} (SKU: ${enquire.id})
` : ""} placeholder={t("Message (product, machine model, questions)", "Žinut? (produktas, mašinos modelis, klausimai)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <button className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Send inquiry", "Si?sti užklaus?")}</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div> {new Date().getFullYear()} ForestasBaltic - {t("Ghedini dealer for the Baltics", "Ghedini atstovas Baltijai")}</div>
                    <div className="flex gap-4"><a className="hover:text-white" href="#">Privacy</a><a className="hover:text-white" href="#">Terms</a></div>
                </div>
            </footer>

            {/* Inquiry modal (quick message) */}
            {enquire && (
                <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4" onClick={() => setEnquire(null)}>
                    <div className="w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 p-5" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold">{t("Send inquiry", "Si?sti užklaus?")}</h3>
                        <p className="text-sm text-neutral-300 mt-1">{t("Product:", "Produktas:")} {enquire.title} (SKU: {enquire.id})</p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reply shortly.'); setEnquire(null); }} className="mt-4 grid gap-3">
                            <input required placeholder={t("Your name", "J?s? vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <input required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <textarea rows={5} defaultValue={`${t("Interested in:", "Domina:")} ${enquire.title} (SKU: ${enquire.id})
`} placeholder={t("Message", "Žinut?")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <div className="flex items-center justify-end gap-2">
                                <button type="button" onClick={() => setEnquire(null)} className="rounded-2xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900">{t("Cancel", "Atšaukti")}</button>
                                <button className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Send", "Si?sti")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
