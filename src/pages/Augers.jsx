import SeoMeta from "../components/SeoMeta";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";
import SeoSchema from "../components/SeoSchema";
export default function Augers({
    lang
}) {
    return (
        <>
            <title>Earth Augers | Forestas Baltic</title>
            <SeoMeta
                name="Earth Augers"
                description="Professional earth augers for excavators, loaders and other machinery. Ghedini Attachments - equipment made in Italy."
                image="/photos/auger.avif"
                url="https://forestasbaltic.lt/earth-augers"
            />
            <SeoSchema
                name="Earth Augers"
                description="Professional earth augers for excavators, loaders and other machinery. Ghedini Attachments - equipment made in Italy."
                image="/photos/auger.avif"
                url="https://forestasbaltic.lt/earth-augers"
            />

            <meta
                name="description"
                content="High-quality earth augers for excavators and other machinery by Ghedini Attachments Italy. Suitable for fences, foundations, agriculture and construction. Fits 0.7–80t excavators, skid steer loaders and other machinery."
            />
            <meta
                name="keywords"
                content="earth auger, excavator auger, ghedini auger, auger drills, auger lithuania"
            />

           

            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                    <h1 className="text-4xl font-bold text-white">Earth Augers</h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Premium earth augers by <strong>Ghedini Attachments</strong> Italy.
                        Designed for fence installation, pole foundations, planting,
                        agriculture and construction works.
                    </p>

                    <div className="mt-5">
                        <Link to="/ghedini" className="text-yellow-500 hover:text-yellow-400 underline">
                            ← Link to homepage
                        </Link>
                    </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-3x1 overflow-hidden border border-neutral-800 shadow-lg">
                            <img
                                src="/photos/auger.avif"
                                alt="Auger for excavator"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Applications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>fence posts and foundation poles</li>
                        <li>agriculture and planting</li>
                        <li>construction and utility works</li>
                        <li>infrastructure and engineering works</li>
                        <li>general land drilling</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Diameter: 100 mm – 1000 mm</li>
                        <li>Length: 1000 mm – 2000 mm</li>
                        <li>1-2 meter extentions, both with flight and without</li>
                        <li>Standard, WIDIA carbide tips, tillers, log splitter, stump grinder tips, etc.</li>
                        <li>Fits 0.7 t – 80 t excavators, skid steers and other machinery</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Request a quote</h2>
                    <p>
                        Contact us and we will recommend the best earth auger for your
                        machine based on hydraulic flow, pressure and working conditions.
                    </p>

                    <a
                        href="mailto:sales@forestasbaltic.lt"
                        className="inline-block bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black hover:bg-yellow-700 transition"
                    >
                        Send inquiry
                    </a>
                </section>
            </main>
        </>
    );
}
