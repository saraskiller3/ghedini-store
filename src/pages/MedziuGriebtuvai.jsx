import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function MedziuGriebtuvai({
   lang
}) {
    return (
        <>
            {/* SEO (React 19 native support) */}
            <title>Hidrauliniai medžių griebtuvai ir greiferiai| Forestas Baltic</title>
            <SeoMeta
                name="Hidraulinis medžių griebtuvas"
                description="Profesionalūs medžių griebtuvai ekskavatoriams, krautuvams, miško technikai ir kitai technikai. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/loggrab.avif"
                url="https://forestasbaltic.lt/medziu-griebtuvai"
            />
            <SeoSchema
                name="Hidraulinis medžių griebtuvas"
                description="Profesionalūs medžių griebtuvai ekskavatoriams, krautuvams, miško technikai ir kitai technikai. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/loggrab.avif"
                url="https://forestasbaltic.lt/medziu-griebtuvai"
            />

            <meta
                name="description"
                content="Aukštos kokybės hidrauliniai medžių griebtuvai ir greiferiai. Tinka medienos krovimui, krūmų šalinimui, šakų tvarkymui ir miško ūkio darbams. Oficialus Ghedini Attachments atstovas Baltijos šalyse."
            />
            <meta
                name="keywords"
                content="medžių griebtuvas, griebtuvai ekskavatoriams, medienos griebtuvai, šakų griebtuvas, ghedini griebtuvai, greiferis, greiferiai, perku medziu griebtuva, medziu griebtuvas parduoda"
            />


            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                           Hidrauliniai medžių griebtuvai ir greiferiai
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Tvirti ir patikimi <strong>Ghedini Attachments</strong> medžių griebtuvai ir greiferiai,
                            sukurti šakų, medžių, krūmų ir medienos tvarkymui.
                            Tinka įvairiems miško ūkio ir komunaliniams darbams.
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
                                src="/photos/loggrab.avif"
                                alt="Medžių griebtuvas ekskavatoriui"
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
                        Kur naudojami medžių griebtuvai?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>šakų krovimui ir tvarkymui</li>
                        <li>medžių pjovimo ir valymo darbams</li>
                        <li>krūmų ir menkaverčių medelių šalinimui</li>
                        <li>miško ūkio ir komunaliniams darbams</li>
                        <li>medienos tvarkymui statybose ir ūkiuose</li>
                    </ul>
                </section>

                {/* Types */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Griebtuvų tipai
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Fiksuoti medžių griebtuvai</li>
                        <li>Hidrauliniai rotuojantys griebtuvai</li>
                        <li>Šakų rinkimo griebtuvai</li>
                        <li>Lengvos ir sunkios konstrukcijos modeliai</li>
                        <li>Greiferiai</li>
                        <li>Tinka ekskavatoriams iki 15 tonų bei kitai technikai</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                {/* Inquiry */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Gauti pasiūlymą
                    </h2>
                    <p>
                        Parašykite mums ir pasiūlysime tinkamiausią griebtuvą pagal jūsų technikos
                        parametrus ir darbo sąlygas.
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
