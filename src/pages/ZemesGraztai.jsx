import SeoMeta from "../components/SeoMeta";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";
import SeoSchema from "../components/SeoSchema";

export default function ZemesGraztai({
   lang
}) {
    return (
        <>
            {/* REACT 19 SEO TAGS */}
            <title>Hidrauliniai žemės grąžtai | Forestas Baltic</title>
            <SeoMeta
                name="Hidrauliniai žemės grąžtai"
                description="Profesionalūs žemės grąžtai ekskavatoriams, krautuvams ir kitai technikai. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/auger.avif"
                url="https://forestasbaltic.lt/zemes-graztai"
            />
            <SeoSchema
                name="Hidrauliniai žemės grąžtai"
                description="Profesionalūs žemės grąžtai ekskavatoriams, krautuvams ir kitai technikai. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/auger.avif"
                url="https://forestasbaltic.lt/zemes-graztai"
            />

            <meta
                name="description"
                content="Profesionalūs žemės grąžtai Ghedini Attachments ekskavatoriams, krautuvams ir kitai technikai. Skirti gręžti žemei, poliams, tvoroms ir statybos darbams. Tinka 0.7–80 tonų ekskavatoriams bei mini-krautuvams ar kitai technikai."
            />
            <meta
                name="keywords"
                content="žemės grąžtai, graztas ekskavatoriui, ghedini graztai, zeme gręžimas, graztas, zemes graztas, zemes graztai, hidrauliniai graztai, grazto pavara, graztas krautuvui, graztas bobcatui, graztas parduoda, perku grazta, grezykle, gręžyklė, greztuvas, gręžtuvas, hidraulinis graztas"
            />

           

            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-white">Žemės grąžtai ekskavatoriams</h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Italijoje gaminami <strong>Ghedini Attachments</strong> žemės grąžtai
                        skirti tiksliam žemės gręžimui. Tinka tvorų, polių, sodo, žemės ūkio,
                        statybos ir infrastruktūros darbams.
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
                    <div className="relative">
                        <div className="rounded-3x1 overflow-hidden border border-neutral-800 shadow-lg">
                            <img
                                src="/photos/auger.avif"
                                alt="Žemės grąžtas ekskavatoriui"
                                className="w-full h-full object-cover"
                            />
                        </div>
                            </div>
                    </div>
            </header>

            {/* CONTENT */}
            <main className="max-w-6xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                {/* Usage */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Kur naudojami žemės grąžtai?</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>tvorų ir stulpų montavimui</li>
                        <li>pamatų polių gręžimui</li>
                        <li>sodinimui ir medžių sodinimui</li>
                        <li>statybų ir inžineriniams darbams</li>
                        <li>žemės ūkio ir komunaliniams darbams</li>
                    </ul>
                </section>

                {/* Types */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Grąžtų specifikacija</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Skersmuo: 100 mm – 1000 mm</li>
                        <li>Ilgis: 1000 mm – 2000 mm</li>
                        <li>1-2 metrų prailginimai tiek su spirale, tiek paprasti vamzdiniai prailginimai</li>
                        <li>Standartiniai antgaliai, „WIDIA“ (karbido) antgaliai, antgaliai skirti kultivacijai, rąstų skaldymui, kelmų šlifavimui ir t.t.</li>
                        <li>Tinka 0.7 – 80 tonų ekskavatoriams, mini krautuvams, kitai technikai</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                {/* Inquiry */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Gauti pasiūlymą</h2>
                    <p>
                        Parašykite ir padėsime išsirinkti tinkamiausią žemės grąžtą pagal jūsų
                        technikos parametrus ir darbo sąlygas.
                    </p>

                    <a
                        href="mailto:sales@forestasbaltic.lt"
                        className="inline-block bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black hover:bg-yellow-700 transition"
                    >
                        Siųsti užklausą
                    </a>
                </section>
            </main>
        </>
    );
}
