import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function PanardinamiSiurbliai({
   lang
}) {
    return (
        <>
            <title>Panardinami hidrauliniai siurbliai | Forestas Baltic</title>
            <SeoMeta
                name="Panardinami hidrauliniai vandens siurbliai"
                description="Profesionalūs panardinami hidrauliniai vandens siurbliai. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/pump.avif"
                url="https://forestasbaltic.lt/panardinami-siurbliai"
            />
            <SeoSchema
                name="Panardinami hidrauliniai vandens siurbliai"
                description="Profesionalūs panardinami hidrauliniai vandens siurbliai. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/pump.avif"
                url="https://forestasbaltic.lt/panardinami-siurbliai"
            />

            <meta
                name="description"
                content="Aukštos kokybės hidrauliniai panardinami siurbliai ekskavatoriams, krautuvams ir nepriklausomoms hidraulinėms linijoms. Skirti vandens, purvo, dumblo ir potvynių šalinimui. Italų gamyba – Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="panardinami siurbliai, hidrauliniai siurbliai, ekskavatoriaus siurblys, dumblo siurblys, vandens siurblys, hidraulinis siurblys"
            />


            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT */}
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Panardinami hidrauliniai siurbliai 
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Italijoje gaminami <strong>Ghedini Attachments</strong>
                            hidrauliniai panardinami siurbliai skirti vandens, purvo, dumblo
                            ir potvynių šalinimui. Tvirtos konstrukcijos ir aukšto našumo įrenginiai.
                        </p>

                        <div className="mt-5">
                            <Link to="/" className="text-yellow-500 hover:text-yellow-400 underline">
                                ← Peržiūrėti pagrindiniame puslapyje
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/pump.avif"
                                alt="Panardinamas vandens siurblys ekskavatoriui"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                {/* Usage */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Kur naudojami panardinami siurbliai?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>vandens siurbimui iš griovių ir šulinių</li>
                        <li>dumblo, purvo ir nuotekų šalinimui</li>
                        <li>statybų objektuose susikaupusio vandens šalinimui</li>
                        <li>kanalų ir tvenkinių priežiūrai</li>
                        <li>potvynių ir užliejimų tvarkymui</li>
                    </ul>
                </section>

                {/* Specs */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Siurblių savybės
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Aukštas našumas – iki 2000 l/min</li>
                        <li>Tinka švariam ir užterštam vandeniui</li>
                        <li>Galima siurbti purvą ir dumblą</li>
                        <li>Tinka ekskavatoriams, krautuvams ir nepriklausomoms hidraulinėms linijoms</li>
                        <li>Hidraulinis variklis – patikimas ir ilgaamžis</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                {/* Inquiry */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Gauti pasiūlymą</h2>

                    <p>
                        Susisiekite ir parinksime tinkamiausią panardinamą siurblį pagal
                        jūsų technikos parametrus ir darbo sąlygas.
                    </p>

                    <a
                        href="mailto:sales@forestasbaltic.lt"
                        className="inline-block bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-black hover:bg-yellow-400 transition"
                    >
                        Siųsti užklausą
                    </a>
                </section>

            </main>
        </>
    );
}
