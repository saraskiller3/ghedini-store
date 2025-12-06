import SeoMeta from "../components/SeoMeta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";
import SeoSchema from "../components/SeoSchema";

export default function MulceriaiPage({
   lang
}) {
    return (
        <>
            {/* REACT 19 SEO META TAGS */}
            <title>Mulčeriai | Forestas Baltic</title>
            <SeoMeta
                name="Mulčeriai"
                description="Aukšto našumo mulčeriai Baltijos šalyse. Oficialus Ghedini Attachments atstovas."
                image="/photos/em3.avif"
                url="https://forestasbaltic.lt/mulceriai"
            />
            <SeoSchema
                name="Mulčeriai"
                description="Aukšto našumo mulčeriai Baltijos šalyse. Oficialus Ghedini Attachments atstovas."
                image="/photos/em3.avif"
                url="https://forestasbaltic.lt/mulceriai"
            />

            <meta
                name="description"
                content="Italijoje gaminami Ghedini Attachments mulčeriai ekskavatoriams ir krautuvams – profesionalus sprendimas žolės, krūmų ir medžių smulkinimui. Forestas Baltic – oficialus atstovas Baltijos šalyse."
            />
            <meta
                name="keywords"
                content="mulčeris, mulčeriai, mulčeris ekskavatoriui, ghedini mulčeris, ekskavatoriaus priedai, miško mulčeris, mulceris, mulceris krautuvams, mulceriai, mulceris perku, mulceri perku, mulceri, mulcer, mulcher, mulcher lithuania, mulceris lietuva"
            />

           

            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                    <h1 className="text-4xl font-bold text-white">
                        Mulčeriai ekskavatoriams ir krautuvams
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Italijoje gaminami <strong>Ghedini Attachments</strong> mulčeriai
                        skirti žolės, krūmų ir medžių smulkinimui. Parenkame tinkamiausią
                        modelį pagal technikos svorį, hidraulikos srautą ir darbo
                        paskirtį.
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
                                src="/photos/em3.avif"
                                alt="Mulcher for excavator"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-6xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Kur naudojami mulčeriai?</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>griovių, pakelių ir šlaitų šienavimui</li>
                        <li>krūmų, atžalyno ir miško pakraščio valymui</li>
                        <li>užaugusių teritorijų atnaujinimui</li>
                        <li>ūkininkų, savivaldybių ir komunaliniams darbams</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Mulčerių tipai</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Mulčeriai su peiliais – žolei ir lengviems krūmams</li>
                        <li>Mulčeriai su plaktukais – intensyviam smulkinimui</li>
                        <li>Miško mulčeriai – sunkesnėms sąlygoms</li>
                        <li>Modeliai 1-30 tonų ekskavatoriams ir mini-krautuvams</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Gauti pasiūlymą</h2>
                    <p>
                        Susisiekite ir parinksime tinkamiausią mulčerį pagal jūsų
                        ekskavatoriaus techninius parametrus ir darbo sąlygas.
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
