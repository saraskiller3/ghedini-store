import React, { useMemo, useState, useEffect } from "react";
import {
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
// =====================================
// Ghedini Showcase � Simplified version
// � No prices, no specs
// � Just image + name + inquiry flow
// =====================================

// --- Categories (optional quick filters) ---
const CATEGORIES = [
    { id: "mulchers", name: "Mulchers" },
    { id: "auger", name: "Earth Augers" },
    { id: "pile", name: "Pile Drivers" },
    { id: "mowe", name: "Mowing buckets" },
    { id: "hedge", name: "Hedge Cutters" },
    { id: "compact", name: "Compactor Plates" },
    { id: "log", name: "Log Grabs" },
    { id: "grapple", name: "Grapples" },
    { id: "pump", name: "Submersible Pumps" }, 
    { id: "polyp", name: "Polyps" },
    { id: "rake", name: "Rakes" }, 
    { id: "ripper", name: "Rippers" },
];
const CAT_LABELS = {
    en: { mulchers: "Mulchers", auger: "Earth Augers", pile: "Pile Drivers", mowe: "Mowing Buckets", hedge: "Hedge Cutters", compact: "Compactor Plates", log: "Log Grabs", grapple: "Grapples", pump: "Submersible Pumps", polyp: "Polyps", rake: "Rakes", ripper: "Rippers" },
    lt: { mulchers: "Mulčeriai", auger: "Žemės grąžtai", pile: "Polių kaltuvai", mowe: "Šienavimo kaušai", hedge: "Gyvatvorių kirpimo įrenginiai", compact: "Ekskavatorinės vibroplokštės", log: "Giljotinos", grapple: "Hidrauliniai griebtuvai", pump: "Panardinami siurbliai", polyp: "Greiferiai", rake: "Ekskavatoriniai grėbliai", ripper: "Purentuvai (Riperiai)" }
};
// Lithuanian titles per product id
const TITLES_LT = {
    DA: "Ekskavatorinis mulčeris",
    DC: "Mini-krautuvinis mulčeris",
    DF: "Ekskavatorinis miško mulčeris",
    T: "Žemės grąžtai",
    TT: "Žemės grąžtų antgaliai",
    IP: "Polių kaltuvai",
    BF: "Šienavimo kaušai",
    BT: "Gyvatvorių kirpimo įrenginiai",
    I: "Ekskavatorinės vibroplokštės",
    K: "Giljotinos",
    QP: "Hidrauliniai griebtuvai",
    H: "Panardinami siurbliai",
    PO: "Greiferiai",
    BC: "Ekskavatoriniai grėbliai",
    RIP: "Purentuvai (Riperiai)",
};

const getTitle = (p, lang) => lang === 'lt' ? (TITLES_LT[p.id] || p.title) : (p.title || TITLES_LT[p.id] || "");
// --- Minimal product data ---
const PRODUCTS = [
    { id: "DA", cat: "mulchers", title: "Mulchers for excavators", img: "/photos/damulcher.avif" },
    { id: "DC", cat: "mulchers", title: "Mulchers for skid loaders", img: "/photos/dcmulcher.avif" },
    { id: "DF", cat: "mulchers", title: "Forestry Mulchers for excavators", img: "/photos/dfmulcher.avif" },
    { id: "T", cat: "auger", title: "Auger Drive", img: "/photos/auger.avif" },
    { id: "TT", cat: "auger", title: "Auger Tips", img: "/photos/augertip.avif" },
    { id: "IP", cat: "pile", title: "Piledriver", img: "/photos/piledriver.avif" },
    { id: "BF", cat: "mowe", title: "Mowing Bucket", img: "/photos/mowing.avif" },
    { id: "BT", cat: "hedge", title: "Hedgecutter", img: "/photos/hedgecutter.avif" },
    { id: "I", cat: "compact", title: "Compactor Plate", img: "/photos/compactor.avif" },
    { id: "K", cat: "log", title: "Log Grab", img: "/photos/loggrab.avif" },
    { id: "QP", cat: "grapple", title: "Grapple", img: "/photos/grapple.avif" },
    { id: "H", cat: "pump", title: "Submersible Pumps", img: "/photos/pump.avif" },
    { id: "PO", cat: "polyp", title: "Polyp", img: "/photos/polyp.avif" },
    { id: "BC", cat: "rake", title: "Rake", img: "/photos/rake.avif" },
    { id: "RIP", cat: "ripper", title: "Rippers", img: "/photos/ripper.avif" },
];
// Rich content per product (texts, images, videos)
const PRODUCT_CONTENT = {
    DA: {
        text: {
            en: `Excavator mulchers Ghedini
Completely built in Italy, for excavators and skid loaders for professional use, for agriculture and landscaping.  
Spare parts available in stock 

DA 56 - 58
Designed for mini excavators of up to 3 tonnes operating weight.
The various models are available both with the knife configuration, for mowing and pruning, and with the hammer configuration, suitable for cutting shrubs and more resistant vegetation.
DOWNLOAD THE TECHNICAL SHEET

DA SERIES 06 - 08 - 10
Designed for mini excavators of up to 6 tonnes operating weight.
The various models are available both with the knife configuration, for mowing and pruning, and with the hammer configuration, suitable for cutting shrubs and more resistant vegetation.
DOWNLOAD THE TECHNICAL SHEET

DK Series
The Ghedini Attachments’ hydraulic brushcutters of the DK Series have been designed to be applied to excavators with an operating weight between 5 and 23 tons. 
The various models are available both with the knife configuration, for mowing and pruning, and with the hammer configuration, suitable for cutting shrubs and more resistant vegetation.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Mulčeris ekskavatoriams. Paskirtis: želdinių priežiūra, kelkraščiai, plotų valymas."
        },
        images: [
            "/photos/em1.avif",
            "/photos/em2.avif",
            "/photos/em3.avif"
        ],
        videos: [
            // YouTube or youtu.be links
            "https://youtu.be/OHSSKvNN3p8"
        ]
    },
    DC: {
        text: {
            en:`Mulcher for skid loaders
DC SERIES
The Ghedini Attachments hydraulic mulchers of the DC series have been designed for applications on skid loaders with an oil flow to the auxiliary circuit(PTO) of at least 26 l / m.
They are available in four versions: 1.080, 1.300, 1.600, 1.900 mm of useful working width.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Mulčeris mini krautuvams."
        },
        images: [],
        videos: ["https://youtu.be/ASmjIURLvLA"]
    },
    DF: {
        text: {
            en: `Forestry mulcher for excavator 
            SERIES DF 10 - 13
The Ghedini Attachments hydraulic forestry brushcutters of the DF Series have been designed to be applied to excavators with an operating weight between 5 and 30 tons.
They are available both with the standard teeth configuration, for mowing and pruning, and with the hard metal plate configuration, suitable for cutting shrubs and more resistant vegetation.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Miško mulčeris ekskavatoriams."
        },
        images: ["/photos/fm.avif"],
        videos: []
    },
    T: {
        text: {
            en: `Auger drive for mini excavators TA 01
Direct drive, lightweight and without the need for drainage.
Arm attachment with pin included, suitable for mini excavators from 0.7 up to 2.5 tons.
DOWNLOAD THE TECHNICAL SHEET

Auger drive for excavators TB 06
Equipped with reducer, without the need for drainage.
Steel body, possibility of lateral and horizontal attachment, auger block available for use with log splitters.
Arm attachment with pin included, suitable for excavators from 1.5 up to 6 tons.
DOWNLOAD THE TECHNICAL SHEET

TK SERIES
For our TK Series augers they have been designed to obtain the best results from midi excavators with operating weight between 5 and 15 tons.
The new generation gearbox produced by us guarantees superior sturdiness and reliability thanks to the body built entirely in steel.
DOWNLOAD THE TECHNICAL SHEET

TV - TT - TS SERIES
For our TV- TS - TT Series augers, helical tools of various diameters and lengths are available for all types of terrain (agricultural, mixed, rocky).
We have the possibility to build tips for each type of terrain according to customer specifications.
DOWNLOAD THE TECHNICAL SHEET

Rotary Harrow SHR
The brand new SHR series rotary harrows are available.
Perfect for leveling and loosening soil.
We have the ability to build spikes for any type of terrain to customer specifications.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Žemės grąžto pavara."
        },
        images: ["/photos/auger1.avif",
        "/photos/auger2.avif"],
        videos: ["https://youtu.be/a6gaGdPgvhQ",
            "https://youtu.be/FDrEN8QvSxY",
        "https://youtu.be/TyTBOUm6ORQ"]
    },
    TT: {
        text: {
            en: `Auger Bits Ghedini Attachments.
We can supply auger bits suitable for any type of soil, according to our customer’s needs. Available in different diameters and lengths. Possibility of extensions to reach the desired depth.

WIDIA AUGER DRIVE FOR ROCKY SOIL
WIDIA AUGER DRILL with replaceable tips, for rocky soil.
Available with hexagonal shafts (50-70-100 mm) and 120 mm square, in various diameters and lengths, also in the extendable version.
What is meant by Widia?
Widia is a name also known as “cemented carbide”, Carboloy or hard metal and is a material used in mechanical processing consisting of hard particles of tungsten carbide embedded in a metal matrix.
It is produced through the sintering process, i.e. the fine powders of the components are mixed, pressed and then heated while maintaining a high pressure so that the powder granules come together and form a single piece.
The carbides used are mostly tungsten carbide, titanium and tantalum.
Carbide tools are harder than high-speed and high-speed steel tools and withstand higher cutting temperatures (1000 ° C versus 600 ° C) and therefore allow for faster machining speed.

AUGER DRIVE FOR AGRICULTURAL SOIL
Drills with replaceable knives in wear-resistant steel, for agricultural land, ideal for most soils.
Available with hexagonal shaft, 50 and 70 mm, with various diameters and lengths. Possibility of extension shaft only or with flight.
Highly efficient drill suitable for multiple uses.

DRILL BIT WITH PENGO BIT FOR MIXED GROUND
Bits with PENGO® tip and digging teeth for mixed and even stony soils.
Available with hexagonal shaft (50, 70, 100 mm) and square 120 mm, with various diameters and lengths. Also in extensible version.
Up to Ø 400 mm a single tip is used, for larger diameters a central PENGO® tip Ø 100 mm with the addition of PENGO teeth that dig on the sides.
BITS FOR WOODS
The conical wood splitter is used to split the logs, while the stump grinder, available in different diameters, is used to mince the wood, obtaining a complete cleaning of the trunk even underground.
Available with 50 and 70 mm hexagonal coupling. A special bit for palm trees is available too.`,
            lt: "Žemės grąžtų antgaliai."
        },
        images: ["/photos/tip1.avif",
            "/photos/tip2.avif",
            "/photos/tip3.avif",
            "/photos/tip4.avif",
            "/photos/tip5.avif",
            "/photos/tip6.avif",],
        videos: []
    },
    IP: {
        text: {
            en: `Vibro Pile Drivers Ghedini Attachments.
The pile drivers IP series hydraulic vibrators have been designed for vibro - driving poles and for soil compaction, depending on the equipment applied.
The pile drivers IP series are connected to the hydraulic power take- off line of the excavators (PTO).
It is also possible to use only the vibrating body for specific applications at the customer’s request.
DOWNLOAD THE TECHNICAL SHEET
The motor is bi- directional and in aluminum.
Drainage recommended only for back pressures > 7 bar.
    They are equipped with anti - shock and anti - cavitation valves, calibrated at 160 bar, to protect the hydraulic pump from possible damage due to a sudden change in pressure.
Built exclusively with SKF bearings, ring nuts and lock washers.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Polių kaltuvas."
        },
            images: ["/photos/ip-1.webp"],
        videos: ["https://youtu.be/1FHOZz9zL9E"]
    }, 
    BF: {
        text: {
            en: `Mowing buckets are attachments designed for the maintenance of waters, ditches, canals, riverbanks. 
Different sizes of mowing buckets can be easily attached to carrier vehicles(large hydraulic excavators, midi and mini excavators or power arms). 
Through a unique design and the application of the best materials, in combination with quality workmanship gives an unequalled tool. A mowing bucket that performs everywhere and at all times.
Our cutting buckets have been designed for cleaning and reclamation of embankments and canals.
They can work immersed in water, without creating problems for the mechanical movement and cutting system.
All the elements that make up the cutting system are completely screwed.
Weed cutting buckets Ghedini Attachments are equipped with a movement mechanism with support sealed bearing, SKF bearings, anti-shock valve.
Original Hesston teeth with grooved section.
Max cutting diameter 5/6 cm.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Šienavimo kaušas."
        },
        images: ["/photos/bf-1.webp"],
        videos: ["https://youtu.be/y53fDzbryi8",
        "https://youtu.be/K4Wa-4qbGHY"]
    },
    BT: {
        text: {
            en: `GHEDINI ATTACHMENTS is always looking for continuous product development to improve customer satisfaction.
Our Hedgetrimmer has a new system to absorb shocks, which reduces the risk of damage to the structure.
The Ghedini Hedgetrimmer is an attachment studied to cut any tree, bush or branch up to a diameter of 4/5 centimeters. It has the advantage of being used both horizontally and vertically, thanks to the Hirth joint.
The BT Hedgetrimmer can be mounted on any type of excavator or mini excavator weighing up to 8 tons; and backhoe loaders.
It is available in 4 working widths:
1200 mm
1500 mm
1600 mm
1800 mm
This product is the right solution for all types of works of  maintenance, reclamation and cutting of hedges and bushes.
DOWNLOAD THE TECHNICAL SHEET`, lt: "Gyvatvorių kirpimo įrenginys."
        },
        images: ["/photos/bt-1.webp"],
        videos: ["https://youtu.be/SLeCcpNl5dg"]
    },
    I: {
        text: {
            en: `Our compactors IC, ID and IE series are planned to compact the ground or the material which has been filled up in the trench.The combined action between the pressure exerted on the ground by the excavator arm and the high frequency vibration produced by the vibrator allows it to get the best compaction of the material used to fill the trench.
The hydraulic supply of the IC, ID and IE series takes place through the PTO coupling of the excavator the campactor is mounted on.
The motor is bi- directional and in aluminium.
Drainage is recommended for counter pressures > 7 bar.They are equipped with anti - shock and anti- cavitation valves, set as 160 bar, to protect the hydraulic pump from possible damage due to a sudden change in pressure. For maximum performance, our vibratory plates are made with SKF bearings, nuts and fastener.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Ekskavatorinė vibroplokštė."
        },
        images: ["/photos/i-1.webp"],
        videos: ["https://youtu.be/KFICDsnUfPo"]
    },
    K: {
        text: {
            en: `Designed for log handling, bulk handling, rock handling, dredging or digging operations, etc.The grabs can be attached to hydraulic machines/ excavators.
Ghedini Attachments offers unmatched versatility for all grappling applications. Our unique configurations allows ultimate flexibility and uses around work sites, demolition, farms or any project that requires pinpoint pick- up accuracy.
Years of experience in developing and manufacturing hydraulic grabs, specially designed for superior performance, ease of use and efficiency.
KA Series
The Ghedini “KA” Series log grabs are suitable for the handling, loading and unloading of logs ready to be transported.
They can be mounted on excavators or forestry cranes.They are built of Domex 710 steel and equipped with block valves.
They are used in the forestry and industrial fields, for excavators up to 15 tons.
DOWNLOAD THE TECHNICAL SHEET
KL Series
The Ghedini “KL” Series log grabs are suitable for the handling, loading and unloading of logs ready to be transported.
They can be mounted on excavators or forestry cranes.They are built in Domex 710 steel and equipped with block valves.
Log grab suitable for 3 functions:
Use of the grab without teeth and bucket, for the log loading;
Use of the grab with widening teeth for the loading of branches or melted goods;
Use of two buckets to load wood chips, sand, earth and all melted goods. All simply assembling 4 pins in less than 2 minutes.
Rock grab with reinforced structure for any horizontal or vertical use, with or without special rotators.
DOWNLOAD THE TECHNICAL SHEET
KP Series
Rock grabs “KP Series” with reinforced structures, so as to be able to work both vertically and horizontally with or without special rotators.
Made of Domex 710 steel and equipped with a block valve.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Medžių giljotina / griebtuvas."
        },
        images: ["/photos/k-1.webp"],
        videos: ["https://youtu.be/eizvkZpCcN0",
        "https://youtu.be/4C8HfQKl5BA"]
    },
    QP: {
        text: {
            en: `The hydraulic grabs of the Ghedini QP series will help your work, being suitable for excavators from 2.5 to 25 tons.
There are four different models available according to their functions, the post material and the excavator weight.
Grip with fixed buffers for the extraction and the driving of concrete/iron posts;
Grip with rotating buffers for concrete posts;
Grip for wood posts for mini and midi excavators;
Grip for wood posts for big excavators.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Hidrauliniai griebtuvai."
        },
        images: ["/photos/qp-1.webp"],
        videos: ["https://youtu.be/1FHOZz9zL9E"]
    },
    H: {
        text: {
            en: `With the valuable assistance of skilled team of professionals, we are offering an extensive range of high quality Submersible Pumps.
This pump find its application in sewage pumping, slurry pumping and many general industrial pumping.
We offer them in different specifications for our clients with different choices.
Compact sizes and durable designs enable our submersible pumps to tolerate water and sludge. Our submersible pumps of the HB HC and HV series, hydraulically driven, are particularly suitable for the drainage of flooded excavations.
They can be connected to mini excavators, skid steers, truck cranes and even independent hydraulic power packs. Immersion pumps have no electrical components and are therefore suitable for work in complete safety under water.
Invest in a Good Submersible Pump now!
DOWNLOAD THE TECHNICAL SHEET
They are equipped with a suction filter that blocks rocks and stones.
They can easily work up to a maximum depth of 20m.
Our submersible pumps are manufactured in compliance with very high quality standards and exclusively with original SKF clamps and bearings, to guarantee maximum efficiency and operational functionality.
Pumps and dewatering equipment are used to remove water from a volume of liquid, solid material or soil. Pumps simply remove liquid from a volume of liquid, whereas dewatering equipment separates water from another material such as soil or sludge.
They can be used for a number of different operations, including:
Keeping water out of foundations, pits, tunnels, and other excavations.
Lowering the water table below excavation level.
Pumping water out of cofferdams.
Supplying water for jetting, sluicing and other general purposes.
Foundation grouting.
Drying solids.
The choice of equipment depends on various factors, such as:
•The project complexity.
•The amount of liquid to be moved.
•The rate at which the liquid needs to be moved.
•The height of the suction lift – distance from the water to the pump.
•The loss incurred due to friction.
•The size of the pump.
•The type of liquid.
Submersible pumps can be used for lowering groundwater or removing water from a deep sump. The pump unit is suspended from the rising main or, if a flexible hose is used, from a wire cable.
The pump consists of a centrifugal unit and motor mounted in a single cylindrical unit with a space between pump and casing which allows the water to move upwards to the rising main.
They are intended for heavy duty work that involves lifting gritty water.`,
            lt: "Panardinami siurbliai."
        },
        images: ["/photos/h-1.webp"],
        videos: ["https://youtu.be/s4W3ZeVA6x8"]
    },
    PO: {
        text: { en: "Polyp grab.", lt: "Polipas (greiferis)." },
        images: ["/photos/po-1.webp"],
        videos: []
    },
    BC: {
        text: {
            en: `Our rakes have been designed for excavators up to 7 T.They are ideal for a quick cleaning or removal of the material present on the surface (brushwood, wood, stones or other).
They are therefore particularly suitable for environmental maintenance.
Available in 4 working widths.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Ekskavatorinis grėblys."
        },
        images: ["/photos/bc-1.webp"],
        videos: ["https://youtu.be/fYHrHjbA0H8"]
    },
    RIP: {
        text: {
            en: `Ripper with interchangeable teeth in hardened wear-resistant steel, for work under the surface of the ground, such as grubbing up and collecting stumps, tilling land and extracting stones.
For excavators 2-10 T. With 2 or 5 teeth.
DOWNLOAD THE TECHNICAL SHEET`,
            lt: "Purentuvai (Riperiai)."
        },
        images: ["/photos/rip-1.webp"],
        videos: ["https://youtu.be/DPM8z3g4jfM"]
    },

};

// Helpers for rich content
const getProductText = (id, lang) => PRODUCT_CONTENT[id]?.text?.[lang] || "";

const ytId = (url) => {
    try {
        const u = new URL(url);
        if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
        if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    } catch { }
    return null;
};

function useFiltered({ q, cat, lang }) {
    return useMemo(() => {
        const qq = q.trim().toLowerCase();
        return PRODUCTS.filter((p) => {
            // Search across EN + LT titles
            const combined = `${ p.title || ''
                } ${TITLES_LT[p.id] || ''}`.toLowerCase();
        const matchesCat = !cat || p.cat === cat;
        const matchesQuery = !qq || combined.includes(qq) || p.id.toLowerCase().includes(qq);
        return matchesCat && matchesQuery;
    });
}, [q, cat, lang]);
}
function CategoryPage({ lang, setEnquire }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const t = (en, lt) => (lang === "en" ? en : lt);
    const cat = CATEGORIES.find((c) => c.id === id);
    const catName = cat ? (CAT_LABELS[lang][cat.id] || cat.name) : id;
    const items = PRODUCTS.filter((p) => p.cat === id);

    return (
        <main className="min-h-[60vh]">
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(253,224,71,0.12)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <button onClick={() => navigate(-1)} className="text-sm text-neutral-400 hover:text-white">← {t("Back", "Atgal")}</button>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{catName}</h1>
                    <p className="mt-3 text-neutral-300 max-w-3xl">
                        {t(
                            "Browse attachments in this category. Send us your machine model and hydraulic specs, and we'll recommend the right setup.",
                            "Peržiūrėkite šios kategorijos priedus. Parašykite mašinos modelį ir hidraulikos parametrus — pasiūlysime tinkamą komplektą."
                        )}
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10">
                {items.length === 0 ? (
                    <div className="text-neutral-400">{t("No items yet in this category.", "Šioje kategorijoje dar nėra įrašų.")}</div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p) => (
                            <div key={p.id} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 hover:shadow-[0_0_0_1px_rgba(253,224,71,0.3)] hover:border-yellow-400/50 transition">
                                <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-neutral-800 overflow-hidden">
                                    <img
                                        alt={getTitle(p, lang)}
                                        src={p.img}
                                        loading="lazy"
                                        decoding="async"
                                        width="800"
                                        height="600"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-semibold">{getTitle(p, lang)}</h3>
                                    <button onClick={() => setEnquire(p)} className="rounded-2xl bg-yellow-500 text-black px-3 py-2 text-sm font-medium hover:bg-yellow-400">
                                        {t("Inquire", "Užklausti")}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-10 flex flex-wrap gap-3">
                    <button onClick={() =>
                        scrollTo("contact")} className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900">{t("General inquiry", "Bendra užklausa")}</button>
                    <button onClick={() =>
                        scrollTo("catalog")} className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Back to all products", "Grįžti į visus produktus")}</button>
                </div>
            </section>
        </main>
    );
}
// ---- Product details page ----
const PRODUCT_TEXTS = {
    DA: { en: "Mulcher for excavators. Send carrier model + flow/pressure.", lt: "Mulčeris ekskavatoriams. Parašykite mašinos modelį ir srautą/slėgį." },
    DC: { en: "Mulcher for skid loaders.", lt: "Mulčeris mini krautuvams." },
    DF: { en: "Forestry mulcher for excavators.", lt: "Miško mulčeris ekskavatoriams." },
    T: { en: "Auger drive for earth drilling.", lt: "Žemės grąžto pavara." },
    IP: { en: "Pile driver attachment.", lt: "Polių kaltuvas." },
    BF: { en: "Mowing bucket.", lt: "Šienavimo kaušas." },
    BT: { en: "Hedge cutter.", lt: "Gyvatvorių kirpimo įrenginys." },
    I: { en: "Compactor plate.", lt: "Ekskavatorinė vibroplokštė." },
    K: { en: "Tree shear / log grab.", lt: "Medžių giljotina / griebtuvas." },
    PO: { en: "Polyp grab.", lt: "Polipas (greiferis)." },
    BC: { en: "Excavator rake.", lt: "Ekskavatorinis grėblys." },
};

function ProductPage({ lang, setEnquire }) {
    const { id } = useParams();
    const navigate = useNavigate();
    

    const t = (en, lt) => (lang === "en" ? en : lt);

    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) {
        return (
            <main className="mx-auto max-w-7xl px-4 py-16">
                <button onClick={() => navigate(-1)} className="text-sm text-neutral-400 hover:text-white">← {t("Back", "Atgal")}</button>
                <h1 className="mt-4 text-2xl font-bold">{t("Product not found", "Produktas nerastas")}</h1>
            </main>
        );
    }

    const title = getTitle(p, lang);
    const copy = getProductText(p.id, lang);
    const content = PRODUCT_CONTENT[id] || { images: [], videos: [], text: {} };
    // Prefer rich gallery if provided, otherwise fall back to the main product image
    const gallery = content.images?.length ? content.images : [p.img].filter(Boolean);

    const goBack = () => {
        if (window.history.length > 1) navigate(-1);
        else navigate("/", { replace: true });
    };

    return (
        <main className="min-h-[60vh]">
            {/* Header section */}
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(253,224,71,0.12)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <button onClick={goBack} className="text-sm text-neutral-400 hover:text-white">← {t("Back", "Atgal")}</button>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
                    {copy && <p className="mt-3 text-neutral-300 max-w-3xl whitespace-pre-line">{copy}</p>}
                </div>
            </section>

            {/* Content section: gallery + text/actions + videos */}
            <section className="mx-auto max-w-7xl px-4 py-10 grid gap-10 md:grid-cols-2 md:items-start">
                {/* LEFT: stacked full photos */}
                <div className="space-y-6">
                    {gallery.map((src, i) => (
                        <figure key={i} className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
                            <img
                                alt={`${title} ${i + 1}`}
                                src={src}
                                loading={i === 0 ? "eager" : "lazy"}
                                decoding="async"
                                className="w-full h-auto object-cover"
                            />
                        </figure>
                    ))}
                </div>

                {/* Text + actions + videos column */}
                <div className="grid gap-4">
                    <div className="text-neutral-300">
                        {t(
                            "For exact fit, tell us your carrier (brand/model), quick-coupler, and hydraulic flow/pressure.",
                            "Tiksliai parinkčiai parašykite mašinos markę/modelį, kaušų kablį ir hidraulikos srautą/slėgį."
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setEnquire(p)}
                            className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400"
                        >
                            {t("Inquire about this product", "Užklausti dėl šio produkto")}
                        </button>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="rounded-2xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900"
                        >
                            {t("General inquiry", "Bendra užklausa")}
                        </button>
                    </div>

                    {/* Videos */}
                    {content.videos?.length > 0 && (
                        <div className="mt-4 grid gap-4">
                            {content.videos.map((v, idx) => {
                                const id = ytId(v);
                                if (!id) return null;
                                return (
                                    <div key={idx} className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                                        <iframe
                                            className="h-full w-full"
                                            src={`https://www.youtube.com/embed/${id}`}
                                            title={`Video ${idx + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

function useScrollTo() {
    return (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
export default function App() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("");
    const [lang, setLang] = useState("en");
    const [enquire, setEnquire] = useState(null); // product object

    const list = useFiltered({ q, cat: cat || undefined, lang });
    const t = (en, lt) => (lang === "en" ? en : lt);
    const catLabel = (c) => (CAT_LABELS[lang][c.id] || c.name);
    const productTitle = (p) => getTitle(p, lang);
    const scrollTo = useScrollTo();
    const navigate = useNavigate();

    const goToProducts = () => {
        if (window.location.pathname === "/") {
            // Already on home page → smooth scroll
            document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
        } else {
            // If on product page, navigate home and scroll after load
            navigate("/");
            setTimeout(() => {
                document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
            }, 400);
        }
    };
    return (
        <>
            <ScrollToTop />
        <div className="min-h-screen bg-black text-white">
            {/* Top bar */}
            <div className="w-full bg-black border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-neutral-300">
                        <span>+370 65595179</span>
                        <span className="hidden md:inline">sales@forestasbaltic.lt</span>
                        <span className="hidden md:inline">Alytus, Lithuania</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="rounded-md bg-yellow-500/20 text-yellow-400 px-2 py-0.5 text-xs border border-yellow-600/40">{t("Official dealer - Baltics", "Oficialus atstovas Baltijos šalyse")}</span>
                        <button onClick={() => setLang(lang === "en" ? "lt" : "en")} className="underline text-neutral-300 hover:text-white">{lang === "en" ? "LT" : "EN"}</button>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="font-black text-2xl tracking-tight">Forestas<span className="text-yellow-400">Baltic</span></Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                            <button onClick={goToProducts} className="text-neutral-300 hover:text-white">{t("Products", "Produktai")}</button>
                         <button onClick={() =>
                            scrollTo("contact")} className="text-neutral-300 hover:text-white">{t("Contact", "Kontaktai")}</button>
                    </nav>
                        <button onClick={() =>
                            scrollTo("contact")} className="rounded-2xl border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-900">{t("Send inquiry", "Siųsti užklausą")}</button>
                </div>
            </header>

                <Routes>
                    <Route path="/"
                        element={ 
                            <>
            {/* Hero */}
            <section className="border-b border-neutral-800 bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(253,224,71,0.15)_0%,transparent_70%)]">
                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t("Ghedini Hydraulic Attachments", "Ghedini hidrauliniai priedai")}</h1>
                        <p className="mt-4 text-neutral-300 md:text-lg">{t("Showcase of attachments for excavators and loaders in the Baltics.", "Priedai ekskavatoriams ir krautuvams Baltijos šalyse.")}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{t("EU shipping available", "Pristatymas ES")}</span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{t("Ask for quote", "Klauskite kainos")}</span>
                            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">LT / EN </span>
                        </div>
                        <div className="mt-8 flex gap-3">
                                                <button onClick={() =>
                                                    scrollTo("catalog")} className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Browse products", "Žiūrėti produktus")}</button>
                                                <button onClick={() =>
                                                    scrollTo("contact")} className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900">{t("Send inquiry", "Siųsti užklausą")}</button>
                        </div>
                    </div>
                                        <div className="relative">
                                            <div className="aspect-video w-full rounded-3xl border border-neutral-800 overflow-hidden shadow-lg">
                                                <iframe
                                                    className="h-full w-full"
                                                    src="https://www.youtube.com/embed/dghHBKuBssk?autoplay=0&mute=1&loop=1&controls=1"
                                                    title="Ghedini Attachments Showcase"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                </div>
            </section>

            {/* Finder */}
            <section id="catalog" className="border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">{t("Products", "Produktai")}</h2>
                            <p className="text-neutral-400">{t("Search or filter, then send an inquiry.", "Ieškokite arba filtruokite ir siųskite užklausą.")}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-center">
                            <input value={q} onChange={e => setQ(e.target.value)} placeholder={t("Search by name or SKU", "Paieška pagal pavadinimą ar SKU")} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <select value={cat} onChange={e => setCat(e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white px-3 py-2 text-sm">
                                <option className="bg-neutral-900" value="">{t("All categories", "Visos kategorijos")}</option>
                                {CATEGORIES.map(c => (
                                    <option className="bg-neutral-900" key={c.id} value={c.id}>{catLabel(c)}
                                    </option>
                                ))}
                            </select>
                                                <button onClick={() =>
                                                    scrollTo("contact")} className="rounded-xl border border-neutral-700 px-3 py-2 text-center text-sm bg-neutral-900 hover:bg-neutral-800">{t("General inquiry", "Bendra užklausa")}</button>
                        </div>
                    </div>

                    {/* Product grid: image + title + inquire */}
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                            {list.map(p => (
                            <Link
                             key={p.id}
                            to ={`/p/${p.id}`}
                            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 hover:shadow-yellow-500/10 hover:shadow transition">
                                <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-neutral-800 overflow-hidden">
                                                        <img
                                                            alt={productTitle(p)}
                                                            src={p.img}
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="800"
                                                            height="600"
                                                            className="h-full w-full object-cover"
                                                        />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-semibold">{productTitle(p)}</h3>
                                    <span className="rounded-2xl border border-neutral-700 px-3 py-2 text-sm">{t("Open", "Atidaryti")}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                                </section>
                            </>
                            } />
                    <Route path="/p/:id" element={<ProductPage lang={lang} setEnquire={setEnquire} />} />
                </Routes>

            {/* Contact */}
            <section id="contact">
                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">{t("Contact sales", "Susisiekite su pardavėju")}</h2>
                        <p className="text-neutral-400 mt-2">{t("Send your machine model and which attachment you're interested in.", "Parašykite mašinos modelį ir kuris priedas domina.")}</p>
                        <ul className="mt-4 text-sm text-neutral-300">
                            <li> sales@forestasbaltic.lt</li>
                            <li> +370 65595179</li>
                            <li> Alytus, Lithuania</li>
                        </ul>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reply shortly.'); }} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 grid gap-3">
                        <input required placeholder={t("Your name", "Jūsų vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input placeholder={t("Company (optional)", "Įmonė (neprivaloma)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <textarea rows={5} defaultValue={enquire ? `${t("Interested in:", "Domina:")} ${productTitle(enquire) } (SKU: ${enquire.id})
` : ""} placeholder={t("Message (product, machine model, questions)", "Žinutė (produktas, mašinos modelis, klausimai)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <button className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Send inquiry", "Siųsti užklausą")}</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div> {new Date().getFullYear()} ForestasBaltic - {t("Ghedini dealer for the Baltics", "Ghedini atstovas Baltijos šalyse")}</div>
                    <div className="flex gap-4"><a className="hover:text-white" href="#">Privacy</a><a className="hover:text-white" href="#">Terms</a></div>
                </div>
            </footer>

            {/* Inquiry modal (quick message) */}
            {enquire && (
                <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4" onClick={() => setEnquire(null)}>
                    <div className="w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 p-5" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold">{t("Send inquiry", "Siųsti užklausą")}</h3>
                        <p className="text-sm text-neutral-300 mt-1">{t("Product:", "Produktas:")} {enquire.title} (SKU: {enquire.id})</p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reply shortly.'); setEnquire(null); }} className="mt-4 grid gap-3">
                            <input required placeholder={t("Your name", "Jūsų vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <input required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <textarea rows={5} defaultValue={`${t("Interested in:", "Domina:")} ${productTitle(enquire) } (SKU: ${enquire.id})
`} placeholder={t("Message", "Žinutė")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <div className="flex items-center justify-end gap-2">
                                <button type="button" onClick={() => setEnquire(null)} className="rounded-2xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900">{t("Cancel", "Atšaukti")}</button>
                                <button className="rounded-2xl bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-400">{t("Send", "Siųsti")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
        </>
    );
}
