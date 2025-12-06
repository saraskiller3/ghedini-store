import SeoMeta from "../components/SeoMeta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";
import SeoSchema from "../components/SeoSchema";

export default function MowingBucketsPage({
   lang
}) {
    return (
        <>
            <title>Mowing Buckets for Excavators | Forestas Baltic</title>
            <SeoMeta
                name="Mowing buckets for excavators"
                description="Professional mowing buckets for excavators. Ghedini Attachments - made in Italy"
                image="/photos/mowing.avif"
                url="https://forestasbaltic.lt/mowing-bucket"
            />
            <SeoSchema
                name="Mowing buckets for excavators"
                description="Professional mowing buckets for excavators. Ghedini Attachments - made in Italy"
                image="/photos/mowing.avif"
                url="https://forestasbaltic.lt/mowing-bucket"
            />

            <meta
                name="description"
                content="Professional mowing buckets for excavators. Ideal for cutting grass, reeds, bushes and roadside vegetation. Italian-made Ghedini Attachments with high efficiency."
            />
            <meta
                name="keywords"
                content="mowing bucket, excavator mower, ditch mower, hydraulic mowing attachment"
            />


            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Mowing Buckets for Excavators
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            <strong>Ghedini Attachments</strong> mowing buckets are designed for
                            cutting grass, roadside vegetation, reeds, bushes and ditch maintenance.
                            Perfect for municipalities, agriculture and landscaping.
                        </p>

                        <div className="mt-5">
                            <Link
                                to="/"
                                className="text-yellow-500 hover:text-yellow-400 underline"
                            >
                                ← Link to homepage
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/mowing.avif"
                                alt="Mowing bucket"
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
                        <li>roadside mowing</li>
                        <li>ditch and slope cutting</li>
                        <li>reed and tall grass removal</li>
                        <li>canal and waterway maintenance</li>
                        <li>farms and large properties</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Cutting width: 100–600 cm</li>
                        <li>Hydraulic rotor with blades</li>
                        <li>Fits excavators up to 25t</li>
                        <li>High efficiency and clean cut</li>
                        <li>Durable reinforced body</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>

                    <p>
                        Contact us and we will recommend the ideal mowing bucket based
                        on your excavator and work requirements.
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
