import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function PileDriver({
    lang
}) {
    return (
        <>
            <title>Post Drivers for Excavators | Forestas Baltic</title>
            <SeoMeta
                name="Post Drivers for Excavators"
                description="High-efficiency post drivers for excavators by Ghedini Attachments."
                image="/photos/piledriver.avif"
                url="https://forestasbaltic.lt/pile-driver"
            />
            <SeoSchema
                name="Post Drivers for Excavators"
                description="High-efficiency post drivers for excavators by Ghedini Attachments."
                image="/photos/piledriver.avif"
                url="https://forestasbaltic.lt/pile-driver"
            />

            <meta
                name="description"
                content="Professional post drivers for excavators. Designed for driving fence posts, agricultural poles, construction supports and signposts. Heavy-duty Italian-made Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="post driver, excavator post driver, fence post driver, pile driver"
            />

           

            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Post Drivers for Excavators
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            <strong>Ghedini Attachments</strong> post drivers are engineered for fast and efficient
                            installation of wooden and metal posts, construction supports, agricultural poles,
                            vineyard stakes and signage. Built for high-intensity work.
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
                                src="/photos/piledriver.avif"
                                alt="Post driver"
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
                        <li>fence post installation</li>
                        <li>vineyard and orchard poles</li>
                        <li>road signs and supports</li>
                        <li>construction foundations</li>
                        <li>wooden and steel posts</li>
                        <li>solar park structures</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>High impact force</li>
                        <li>Compatible with wood & metal posts</li>
                        <li>Fits 1 t – 25 t excavators</li>
                        <li>Easy mounting and operation</li>
                        <li>Reinforced frame for heavy-duty use</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>

                    <p>
                        Contact us and we will recommend the ideal post driver for your
                        excavator and working conditions.
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
