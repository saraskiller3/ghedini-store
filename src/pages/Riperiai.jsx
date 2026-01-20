import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";

export default function RiperiaiPage({
   lang
}) {
    return (
        <>
            <title>Riperiai ekskavatoriams | Forestas Baltic</title>
            <SeoMeta
                name="Riperiai ekskavatoriams"
                description="Stiprūs ir patvarūs riperiai ekskavatoriams Baltijos šalyse. Oficialus Ghedini atstovas."
                image="/photos/ripper.avif"
                url="https://forestasbaltic.lt/riperis"
            />
            <SeoSchema
                name="Riperiai ekskavatoriams"
                description="Stiprūs ir patvarūs riperiai ekskavatoriams Baltijos šalyse. Oficialus Ghedini atstovas."
                image="/photos/ripper.avif"
                url="https://forestasbaltic.lt/riperis"
            />

            <meta
                name="description"
                content="Tvirti ir patikimi riperiai ekskavatoriams. Skirti kietai žemei, šaknims, uolienoms, užšalusiai dangai ir tankiai žemiai ardyti. Italijos gamybos Ghedini Attachments modeliai."
            />
            <meta
                name="keywords"
                content="riperis, riperiai, ekskavatoriaus riperis, žemės ardymas, riper attachments"
            />

            

            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Riperiai ekskavatoriams
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Aukštos kokybės <strong>Ghedini Attachments</strong> riperiai skirti
                            kietos žemės, šaknų, uolienų, asfaltu padengtų plotų ir
                            užšalusio grunto ardymui. Sukurti intensyviam ir sunkiam darbui.
                        </p>

                        <div className="mt-5">
                            <Link to="/ghedini" className="text-yellow-500 hover:text-yellow-400 underline">
                                ← Peržiūrėti pagrindiniame puslapyje
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/ripper.avif"
                                alt="Riperis ekskavatoriui"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </header>

            {/* CONTENT */}
            <main className="max-w-7xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                {/* Usage */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Kur naudojami riperiai?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>užšalusio grunto ardymui</li>
                        <li>kietos žemės purenimui</li>
                        <li>uolienų sluoksnių ardymui</li>
                        <li>šaknų ir kelmų pašalinimui</li>
                        <li>asfalto ir kietų dangų laužymui</li>
                        <li>karjerų ir statybų darbams</li>
                    </ul>
                </section>

                {/* Specs */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Riperio savybės
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Tvirta monolitinė konstrukcija</li>
                        <li>Keičiami grūdinto plieno dantys</li>
                        <li>Tinka 2 t – 10 t ekskavatoriams</li>
                        <li>Atsparūs intensyviam krūviui</li>
                        <li>Ilgaamžė geležtė ir korpusas</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                {/* Inquiry */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Gauti pasiūlymą</h2>

                    <p>
                        Susisiekite ir rekomenduosime tinkamiausią riperį pagal jūsų
                        ekskavatoriaus svorį, galią ir darbo sąlygas.
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
