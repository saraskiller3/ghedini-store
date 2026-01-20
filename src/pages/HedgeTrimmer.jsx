import SeoMeta from "../components/SeoMeta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";
import SeoSchema from "../components/SeoSchema";

export default function HedgeTrimmersPage({
   lang
}) {
    return (
        <>
            <title>Hedge Trimmers for Excavators | Forestas Baltic</title>
            <SeoMeta
                name="Hedge Trimmer for Excavators"
                description="High-efficiency hedge trimmers for excavators by Ghedini Attachments."
                image="/photos/hedgecutter.avif"
                url="https://forestasbaltic.lt/hedge-cutter"
            />
            <SeoSchema
                name="Hedge Trimmer for Excavators"
                description="High-efficiency hedge trimmers for excavators by Ghedini Attachments."
                image="/photos/hedgecutter.avif"
                url="https://forestasbaltic.lt/hedge-cutter"
            />

            <meta
                name="description"
                content="Professional hydraulic hedge trimmers for excavators. Designed for roadside maintenance, parks, branch cutting and shrub trimming. Italian-made Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="hedge trimmer, excavator hedge trimmer, branch cutter, roadside trimmer"
            />

           

            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Hedge Trimmers for Excavators
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Italian-made <strong>Ghedini Attachments</strong> hydraulic hedge trimmers
                            designed for fast and efficient trimming of hedges, bushes and branches.
                            Ideal for municipalities, landscaping and roadside maintenance.
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
                                src="/photos/hedgecutter.avif"
                                alt="Hedge trimmer attachment for excavator"
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
                        <li>roadside vegetation maintenance</li>
                        <li>parks and landscaping</li>
                        <li>agricultural and residential properties</li>
                        <li>branch cutting and shrub trimming</li>
                        <li>shaping tall hedges</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Cutting length: 120 cm – 180 cm</li>
                        <li>Hydraulic driven blade system</li>
                        <li>Reinforced cutting mechanism</li>
                        <li>Fits 0.7 t – 10 t excavators</li>
                        <li>High trimming efficiency</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>

                    <p>
                        Contact us and we will recommend the ideal hedge trimmer for your
                        excavator based on your workflow and conditions.
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
