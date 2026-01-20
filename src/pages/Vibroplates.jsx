import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function CompactionPlatesPage({
    lang
}) {
    return (
        <>
            <title>Compaction Plates for Excavators | Forestas Baltic</title>
            <SeoMeta
                name="Compaction Plates for Excavators"
                description="High-efficiency compaction plates for excavators by Ghedini Attachments."
                image="/photos/compactor.avif"
                url="https://forestasbaltic.lt/vibroplates"
            />
            <SeoSchema
                name="Compaction Plates for Excavators"
                description="High-efficiency compaction plates for excavators by Ghedini Attachments."
                image="/photos/compactor.avif"
                url="https://forestasbaltic.lt/vibroplates"
            />

            <meta
                name="description"
                content="Professional hydraulic compaction plates for excavators. Ideal for trench work, construction, road building and soil compaction. Italian-made Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="compaction plate, hydraulic plate compactor, excavator plate, trench compactor"
            />

           

            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Compaction Plates for Excavators
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Reliable <strong>Ghedini Attachments</strong> hydraulic
                            compaction plates designed for soil compaction in trenches,
                            road construction, foundations and infrastructure works.
                        </p>

                        <div className="mt-5">
                            <Link
                                to="/ghedini"
                                className="text-yellow-500 hover:text-yellow-400 underline"
                            >
                                ← Link to homepage
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/compactor.avif"
                                alt="Excavator compaction plate"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Applications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>soil compaction in trenches</li>
                        <li>road and pathway construction</li>
                        <li>foundation and base preparation</li>
                        <li>engineering and utility works</li>
                        <li>embankments and slope stabilization</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>High-frequency vibration</li>
                        <li>Deep compaction capability</li>
                        <li>Fits 1 t – 25 t excavators</li>
                        <li>Reinforced heavy-duty structure</li>
                        <li>Minimal maintenance</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>

                    <p>
                        Contact us and we will recommend the best compaction plate
                        based on your excavator and working conditions.
                    </p>

                    <a
                        href="mailto:sales@forestasbaltic.lt"
                        className="inline-block bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-black hover:bg-yellow-400 transition"
                    >
                        Send inquiry
                    </a>
                </section>

            </main>
        </>
    );
}
