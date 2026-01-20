import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function Vibroplokstes({
   lang
}) {
    return (
        <>
            <title>Ekskavatorinės vibroplokštės | Forestas Baltic</title>
            <SeoMeta
                name="Vibro plokštės ekskavatoriams"
                description="Aukšto našumo vibro plokštės ekskavatoriams Baltijos šalyse. Oficialus Ghedini atstovas."
                image="/photos/compactor.avif"
                url="https://forestasbaltic.lt/vibroplokstes"
            />
            <SeoSchema
                name="Vibro plokštės ekskavatoriams"
                description="Aukšto našumo vibro plokštės ekskavatoriams Baltijos šalyse. Oficialus Ghedini atstovas."
                image="/photos/compactor.avif"
                url="https://forestasbaltic.lt/vibroplokstes"
            />

            <meta
                name="description"
                content="Profesionalios ekskavatorinės vibroplokštės grunto tankinimui. Tinka tranšėjoms, kelių statybai, pagrindų tankinimui ir inžinerinei infrastruktūrai. Italijos gamybos Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="vibroplokštė, ekskavatorinė vibroplokštė, tankinimo plokštė, grunto tankinimas, ghedini vibroplokštė, hidraulinė vibroplokštė, vibroplokste, tankintuvas"
            />

            
            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Ekskavatorinės vibroplokštės
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Patikimos <strong>Ghedini Attachments</strong> vibroplokštės
                            skirtos profesionaliam grunto tankinimui tranšėjose,
                            kelių statyboje ir statybos aikštelėse.
                            Sukurtos darbui sudėtingomis sąlygomis.
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

                    {/* RIGHT IMAGE */}
                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/compactor.avif"
                                alt="Ekskavatorinė vibroplokštė"
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
                        Kur naudojamos ekskavatorinės vibroplokštės?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>tranšėjų grunto tankinimui</li>
                        <li>kelių ir takų statybai</li>
                        <li>pamatų ir pagrindų tankinimui</li>
                        <li>inžinerinių tinklų įrengimui</li>
                        <li>šlaitų sutvirtinimui</li>
                    </ul>
                </section>

                {/* Specs */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Vibroplokščių savybės
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Aukšto dažnio vibracija</li>
                        <li>Didelis tankinimo gylis</li>
                        <li>Tinka 1 t – 25 t ekskavatoriams</li>
                        <li>Patvari ir sustiprinta konstrukcija</li>
                        <li>Minimalios priežiūros sąnaudos</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                {/* Inquiry */}
                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Gauti pasiūlymą</h2>

                    <p>
                        Susisiekite, ir rekomenduosime tinkamiausią vibroplokštę pagal
                        jūsų ekskavatoriaus hidraulinius parametrus ir darbo sąlygas.
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
