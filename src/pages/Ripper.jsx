import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";

export default function RippersPage({
   lang
}) {
    return (
        <>
            <title>Rippers for Excavators | Forestas Baltic</title>
            <SeoMeta
                name="Rippers for Excavators"
                description="Strong and durable rippers for excavators by Ghedini Attachments."
                image="/photos/ripper.avif"
                url="https://forestasbaltic.lt/ripper"
            />
            <SeoSchema
                name="Rippers for Excavators"
                description="Strong and durable rippers for excavators by Ghedini Attachments."
                image="/photos/ripper.avif"
                url="https://forestasbaltic.lt/ripper"
            />

            <meta
                name="description"
                content="Heavy-duty excavator rippers for breaking frozen ground, hard soil, rocks, roots and compacted surfaces. Italian-made Ghedini Attachments for demanding work."
            />
            <meta
                name="keywords"
                content="ripper, excavator ripper, ground ripper, rock ripper, ghedini ripper"
            />


            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Rippers for Excavators
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            High-strength <strong>Ghedini Attachments</strong> rippers
                            designed for breaking frozen ground, compact soil, rocks, tree roots,
                            asphalt and tough material. Built for heavy-duty excavation work.
                        </p>

                        <div className="mt-5">
                            <Link to="/" className="text-yellow-500 hover:text-yellow-400 underline">
                                ← Link to homepage
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/ripper.avif"
                                alt="Ripper attachment for excavator"
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
                        <li>breaking frozen soil</li>
                        <li>ripping hard and compact ground</li>
                        <li>cutting through rock layers</li>
                        <li>removing tree roots and stumps</li>
                        <li>breaking asphalt and hard surfaces</li>
                        <li>quarry and construction work</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Reinforced monolithic structure</li>
                        <li>Replaceable hardened steel teeth</li>
                        <li>Fits excavators 2 t – 10 t</li>
                        <li>Extremely durable under heavy load</li>
                        <li>Long-life steel blade</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>

                    <p>
                        Contact us and we will recommend the best ripper for your excavator
                        based on machine weight, power and soil conditions.
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
