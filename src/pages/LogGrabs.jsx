import SeoMeta from "../components/SeoMeta";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";
import SeoSchema from "../components/SeoSchema";

export default function LogGrabs({
    lang
}) {
    return (
        <>
            <title>Log Grabs and polyps | Forestas Baltic</title>
            <SeoMeta
                name="Log Grab"
                description="Professional log grabs for excavators, loaders, forestry machinery and other machinery. Quality equipment made by Ghedini Attachments"
                image="/photos/loggrab.avif"
                url="https://forestasbaltic.lt/log-grabs"
            />
            <SeoSchema
                name="Log Grab"
                description="Professional log grabs for excavators, loaders, forestry machinery and other machinery. Quality equipment made by Ghedini Attachments"
                image="/photos/loggrab.avif"
                url="https://forestasbaltic.lt/log-grabs"
            />

            <meta
                name="description"
                content="High-quality log grabs for excavators and other machinery. Ideal for branches, logs, bushes, forestry work and material handling. Official Ghedini Attachments dealer in the Baltics."
            />
            <meta
                name="keywords"
                content="tree grab, grapple for excavator, forestry grab, log grab, ghedini grab"
            />

           

            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Log Grabs and Polyps
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Durable <strong>Ghedini Attachments</strong> log grabs designed
                            for handling branches, logs, bushes, vegetation and forestry material.
                            Suitable for utility and forestry operations.
                        </p>

                        <div className="mt-5">
                            <Link to="/ghedini" className="text-yellow-500 hover:text-yellow-400 underline">
                                ← Link to homepage
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="border border-neutral-800 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/photos/loggrab.avif"
                                alt="Log grab for excavator"
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
                        <li>branch handling and clearing</li>
                        <li>bush and vegetation removal</li>
                        <li>log handling</li>
                        <li>forestry operations</li>
                        <li>construction and utility work</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Types</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Fixed tree grabs</li>
                        <li>Hydraulic rotating grabs</li>
                        <li>Branch grabs</li>
                        <li>Light-duty and heavy-duty versions</li>
                        <li>Polyps</li>
                        <li>Fits excavators up to 15t and other machinery</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>
                    <p>
                        Contact us and we will recommend the best log grab for your machine
                        based on your hydraulic flow and working environment.
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
