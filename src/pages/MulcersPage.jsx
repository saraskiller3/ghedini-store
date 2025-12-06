import SeoMeta from "../components/SeoMeta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "react-router-dom";
import SeoSchema from "../components/SeoSchema";

export default function MulcersPage({
 lang
}) {
    return (
        <>
            {/* React 19 SEO */}
            <title>Mulchers | Forestas Baltic</title>
            <SeoMeta
                name="Mulcher"
                description="High-efficiency mulcher. Oficial Ghedini Attachments dealer in the Baltics."
                image="/photos/em3.avif"
                url="https://forestasbaltic.lt/mulchers"
            />
            <SeoSchema
                name="Mulcher"
                description="High-efficiency mulcher. Oficial Ghedini Attachments dealer in the Baltics."
                image="/photos/em3.avif"
                url="https://forestasbaltic.lt/mulchers"
            />

            <meta
                name="description"
                content="Professional mulchers for excavators by Ghedini Attachments Italy. Suitable for grass, bushes and small trees. Forestas Baltic – official dealer in the Baltics."
            />
            <meta
                name="keywords"
                content="mulcher, mulchers, excavator mulcher, ghedini mulcher, forestry mulcher"
            />

           

            {/* HEADER */}
            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                    <h1 className="text-4xl font-bold text-white">
                        Mulchers for Excavators
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        High-quality mulchers manufactured by{" "}
                        <strong>Ghedini Attachments</strong> in Italy. Designed for
                        grass, bushes and vegetation shredding. Suitable for mini,
                        medium and heavy excavators from 1.5t to 30t and skid steers.
                    </p>

                    {/* Back to home */}
                    <div className="mt-5">
                        <Link
                            to="/"
                            className="text-yellow-500 hover:text-yellow-400 underline"
                        >
                            ← Link to homepage
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

            {/* CONTENT */}
            <main className="max-w-6xl mx-auto px-4 py-10 space-y-10 text-gray-300">

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Where are mulchers used?</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>roadside and slope maintenance</li>
                        <li>bush and vegetation removal</li>
                        <li>land clearing and overgrowth control</li>
                        <li>municipality and agricultural works</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Mulcher types</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Blade mulchers – for grass and light vegetation</li>
                        <li>Hammer mulchers – for heavier conditions</li>
                        <li>Forestry mulchers – for thicker material</li>
                        <li>Models for 1-30 ton excavators and skid steer loaders</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white">Request a quote</h2>
                    <p>
                        Contact us and we will recommend the best mulcher for your
                        excavator based on hydraulic flow, pressure and working
                        conditions.
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
