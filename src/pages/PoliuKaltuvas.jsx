import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function PoliuKaltuvaiPage({
  lang  
}) {
    return (
        <>
            <title>Polių kaltuvai ekskavatoriams | Forestas Baltic</title>
            <SeoMeta
                name="Polių kaltuvai ekskavatoriams"
                description="Aukšto našumo polių kaltuvai ekskavatoriams Baltijos šalyse. Oficialus Ghedini atstovas."
                image="/photos/piledriver.avif"
                url="https://forestasbaltic.lt/poliu-kaltuvas"
            />
            <SeoSchema
                name="Polių kaltuvai ekskavatoriams"
                description="Aukšto našumo polių kaltuvai ekskavatoriams Baltijos šalyse. Oficialus Ghedini atstovas."
                image="/photos/piledriver.avif"
                url="https://forestasbaltic.lt/poliu-kaltuvas"
            />

            <meta
                name="description"
                content="Profesionalūs polių kaltuvai ekskavatoriams. Skirti tvorų stulpams, žemės ūkio polių, atramų, ženklų ir kitų konstrukcijų įkalimui. Ghedini Attachments – itališka kokybė."
            />
            <meta
                name="keywords"
                content="polių kaltuvas, stulpų kaltuvas, ekskavatoriaus kaltuvas, ghedini poliu kaltuvai"
            />

           

            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Polių kaltuvai ekskavatoriams
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            <strong>Ghedini Attachments</strong> polių kaltuvai sukurti tvorų stulpų,
                            atramų, vynuogynų polių, ženklų ir kitų konstrukcijų įkalimui.
                            Tvirta konstrukcija ir didelė smūgio jėga leidžia dirbti intensyviomis sąlygomis.
                        </p>

                        <div className="mt-5">
                            <Link
                                to="/"
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
                                src="/photos/piledriver.avif"
                                alt="Polių kaltuvas"
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
                        Kur naudojami polių kaltuvai?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>tvorų ir vartų stulpams</li>
                        <li>vynuogynų ir sodų poliams</li>
                        <li>kelio ženklams ir atramoms</li>
                        <li>statybinių atramų montavimui</li>
                        <li>medinių ir metalinių polių įkalimui</li>
                        <li>saulės parko konstrukcijoms</li>
                    </ul>
                </section>

                {/* SPECS */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Techninės savybės
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Didelė smūgio jėga</li>
                        <li>Tinka mediniams ir metaliniams poliams</li>
                        <li>Tinka 1 t – 25 t ekskavatoriams</li>
                        <li>Lengvai montuojamas</li>
                        <li>Stipri ir ilgaamžė konstrukcija</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />


                {/* INQUIRY */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Gauti pasiūlymą</h2>

                    <p>
                        Susisiekite ir parinksime tinkamiausią polių kaltuvą pagal jūsų poreikius
                        ir ekskavatoriaus parametrus.
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
