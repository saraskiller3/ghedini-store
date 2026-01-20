import SeoMeta from "../components/SeoMeta";
import SeoSchema from "../components/SeoSchema";
import { Link } from "react-router-dom";
import RelatedPages from "../components/RelatedPages";

export default function SubmersiblePumps({
   lang
}) {
    return (
        <>
            <title>Submersible Hydraulic Pumps | Forestas Baltic</title>
            <SeoMeta
                name="Hydraulic Submersible Water Pumps for Excavators"
                description="High-efficiency hydraulic submersible water pumps by Ghedini Attachments."
                image="/photos/pump.avif"
                url="https://forestasbaltic.lt/submersible-pumps"
            />
            <SeoSchema
                name="Hydraulic Submersible Water Pumps for Excavators"
                description="High-efficiency hydraulic submersible water pumps by Ghedini Attachments."
                image="/photos/pump.avif"
                url="https://forestasbaltic.lt/submersible-pumps"
            />

            <meta
                name="description"
                content="High-performance hydraulic submersible pumps for excavators, loaders and independent hydraulic lines. Designed for water, slurry, mud and flood removal. Italian-made Ghedini Attachments."
            />
            <meta
                name="keywords"
                content="submersible pump, hydraulic pump, excavator pump, sludge pump, water pump"
            />

           

            <header className="w-full bg-[#0f0f0f] border-b border-neutral-800 py-14">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Submersible Hydraulic Pumps
                        </h1>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Italian-made <strong>Ghedini Attachments</strong> hydraulic
                            submersible pumps designed for pumping water, sludge, mud, and
                            contaminated liquids. Built for demanding work conditions.
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
                                src="/photos/pump.avif"
                                alt="Submersible water pump for excavator"
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
                        <li>pumping water from trenches and pits</li>
                        <li>removing mud, sludge, and contaminated liquids</li>
                        <li>construction site water removal</li>
                        <li>pond and canal maintenance</li>
                        <li>flood and emergency situations</li>
                    </ul>
                </section>

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Specifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>High flow rate – up to 2000 l/min</li>
                        <li>Handles clean and dirty water</li>
                        <li>Capable of pumping mud and sludge</li>
                        <li>Fits excavators, loaders and independent hydraulic lines</li>
                        <li>Reliable hydraulic motor</li>
                    </ul>
                </section>
                <RelatedPages lang={lang} />

                <section className="bg-[#161616] border border-[#262626] rounded-xl p-6 space-y-3">
                    <h2 className="text-xl text-white font-semibold">Request a quote</h2>

                    <p>
                        Contact us and we will recommend the best submersible pump for your
                        machine based on hydraulic flow and working conditions.
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
