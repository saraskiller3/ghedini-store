import SeoMeta from "../components/SeoMeta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";
import SeoSchema from "../components/SeoSchema";

export default function SienavimoKausas({
    lang
}) {
    return (
        <>
            <title>Šienavimo kaušai ekskavatoriams | Forestas Baltic</title>
            <SeoMeta
                name="Šienavimo kaušai ekskavatoriams"
                description="Profesionalūs šienavimo kaušai ekskavatoriams. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/mowing.avif"
                url="https://forestasbaltic.lt/sienavimo-kausas"
            />
            <SeoSchema
                name="Šienavimo kaušai ekskavatoriams"
                description="Profesionalūs šienavimo kaušai ekskavatoriams. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/mowing.avif"
                url="https://forestasbaltic.lt/sienavimo-kausas"
            />

            <meta
                name="description"
                content="Profesionalūs šienavimo kaušai ekskavatoriams. Skirti žolės, nendrių, krūmų ir pakelių želdynų pjovimui. Italijos gamybos Ghedini Attachments – aukšto našumo įranga."
            />
            <meta
                name="keywords"
                content="šienavimo kaušas, šienavimo įrenginys, ekskavatoriaus kaušas šienavimui, ghedini mowing bucket"
            />


            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Šienavimo kaušai ekskavatoriams
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            <strong>Ghedini Attachments</strong> šienavimo kaušai yra skirti greitam ir
                            efektyviam žolės, pakelės želdynų, nendrių, krūmų ir kanalų šlaitų pjovimui.
                            Puikus pasirinkimas kelių priežiūrai, ūkiams ir komunaliniam sektoriui.
                        </p>

                        <div className="mt-5">
                            <Link
                                to="/ghedini"
                                className="text-yellow-500 hover:text-yellow-400 underline"
                            >
                                ← Peržiūrėti pagrindiniame puslapyje
                            </Link>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/mowing.avif"
                                alt="Šienavimo kaušas"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </header>

            {/* CONTENT */}
            <main className="max-w-7xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                {/* USAGE */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Kur naudojami šienavimo kaušai?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>pakelių šienavimas</li>
                        <li>griovių ir šlaitų pjovimas</li>
                        <li>nendrių ir aukštos žolės šalinimas</li>
                        <li>vandens kanalų priežiūra</li>
                        <li>ūkiuose ir sodybose</li>
                    </ul>
                </section>

                {/* SPECS */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Techninės savybės
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Pjovimo plotis: 100–600 cm</li>
                        <li>Hidraulinis rotorius su peiliais</li>
                        <li>Tinka ekskavatoriams iki 25 tonų</li>
                        <li>Didelis darbo našumas</li>
                        <li>Tvirta ir atspari konstrukcija</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                {/* INQUIRY */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Gauti pasiūlymą</h2>

                    <p>
                        Susisiekite ir parinksime tinkamą šienavimo kaušą pagal jūsų
                        ekskavatoriaus dydį, hidrauliką ir darbo pobūdį.
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
