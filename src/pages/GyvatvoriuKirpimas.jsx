import SeoMeta from "../components/SeoMeta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";
import SeoSchema from "../components/SeoSchema";

export default function GyvatvoriuKirpimoPage({
   lang
}) {
    return (
        <>
            <title>Gyvatvorių kirpimo įrenginiai ekskavatoriams | Forestas Baltic</title>
            <SeoMeta
                name="Gyvatvorių kirpimo įrenginiai ekskavatoriams"
                description="Profesionalūs gyvatvorių kirpimo įrenginiai ekskavatoriams. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/hedgecutter.avif"
                url="https://forestasbaltic.lt/gyvatvoriu-kirpimo-irenginys"
            />
            <SeoSchema
                name="Gyvatvorių kirpimo įrenginiai ekskavatoriams"
                description="Profesionalūs gyvatvorių kirpimo įrenginiai ekskavatoriams. Ghedini Attachments – Italijoje pagaminta įranga."
                image="/photos/hedgecutter.avif"
                url="https://forestasbaltic.lt/gyvatvoriu-kirpimo-irenginys"
            />

            <meta
                name="description"
                content="Profesionalūs gyvatvorių ir šakų kirpimo įrenginiai ekskavatoriams. Skirti kelių priežiūrai, parkų tvarkymui, šakų genėjimui ir želdynų priežiūrai. Italų gamyba – Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="gyvatvorių kirpimo įrenginys, ekskavatorius želdynams, šakų kirptuvas, ghedini trimmer"
            />

           

            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Gyvatvorių kirpimo įrenginiai ekskavatoriams
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Italijoje gaminami <strong>Ghedini Attachments</strong> gyvatvorių kirpimo įrenginiai
                            skirti greitam ir efektyviam šakų, krūmų ir gyvatvorių genėjimui.
                            Idealiai tinka kelių priežiūrai, parkų tvarkymui ir želdynų formavimui.
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

                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/hedgecutter.avif"
                                alt="Gyvatvorių kirpimo įrenginys ekskavatoriui"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </header>

            {/* CONTENT */}
            <main className="max-w-7xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Kur naudojami gyvatvorių kirpimo įrenginiai?
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>kelių ir pakelės želdynų priežiūrai</li>
                        <li>parkuose ir sodybose</li>
                        <li>ūkiuose ir komerciniuose objektuose</li>
                        <li>šakų ir krūmų genėjimui</li>
                        <li>aukštų gyvatvorių formavimui</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">
                        Techninės savybės
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Pjovimo ilgis: 120 cm – 180 cm</li>
                        <li>Hidraulinis valdymas</li>
                        <li>Tvirtas peilių mechanizmas</li>
                        <li>Tinka 0.7 t – 10 t ekskavatoriams</li>
                        <li>Aukštas darbo našumas</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Gauti pasiūlymą</h2>

                    <p>
                        Susisiekite ir parinksime tinkamą gyvatvorių kirptuvą pagal jūsų ekskavatorių ir darbo pobūdį.
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
