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
            en: `Excavator Mulchers – "Ghedini Attachments"

100% Made in Italy

High-quality hydraulic mulchers designed for excavators and skid loaders, manufactured entirely in Italy by "Ghedini Attachments".
These professional tools are built for demanding work in agriculture, landscaping, forestry, and environmental maintenance.

✅ Spare parts always in stock
✅ Fast delivery across Europe
✅ Reliable Italian engineering and durability

DA 56 – DA 58 Series

For mini excavators up to 3 tonnes operating weight

Compact yet powerful mulchers designed for small excavators.
Available in two cutting configurations:

Knives – ideal for mowing and pruning

Hammers – for cutting shrubs and dense vegetation

🔹 Strong but lightweight frame
🔹 High hydraulic efficiency
🔹 Easy installation and maintenance

<a href="/docs/da1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
DA Series – 06 / 08 / 10

For excavators up to 6 tonnes operating weight

Versatile and robust mulchers built for continuous professional use.
Available in two rotor configurations:

Knives – for grass and light vegetation

Hammers – for dense brush and thicker branches

🔹 Optimized rotor design for maximum performance
🔹 Reinforced construction for durability
🔹 100% Made in Italy

<a href="/docs/da2en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>

DK Series

For excavators from 5 to 23 tonnes operating weight

Heavy-duty hydraulic brushcutters engineered for medium and large excavators.
Available in two versions:

Knives – for precise mowing and vegetation control

Hammers – for forestry and demanding clearing work

🔹 Reinforced frame and rotor for maximum strength
🔹 High cutting power and productivity
🔹 Perfect for forestry, roadside, and agricultural maintenance

<a href="/docs/da3en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Ekskavatorių mulčeriai – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

Aukštos kokybės hidrauliniai mulčeriai, skirti ekskavatoriams ir mini krautuvams, gaminami Italijoje, įmonėje ,,Ghedini Attachments".
Šie profesionalūs įrenginiai sukurti darbui žemės ūkio, aplinkos priežiūros, apželdinimo bei miškininkystės sektoriuose.

✅ Atsarginės dalys visada sandėlyje
✅ Greitas pristatymas visoje Europoje
✅ Patikima itališka kokybė ir ilgaamžiškumas

DA 56 – DA 58 serija

Mini ekskavatoriams iki 3 t darbinės masės

Kompaktiški, bet galingi mulčeriai, pasižymintys tvirta konstrukcija ir lengva priežiūra.
Galimos dvi darbo konfigūracijos:

Peiliai – žolės pjovimui ir šakų genėjimui

Plaktukai – krūmynų ir tankesnės augmenijos kirtimui

🔹 Tvirta ir lengva konstrukcija
🔹 Efektyvus hidraulinės energijos panaudojimas
🔹 Patogus montavimas ir priežiūra

[📄 Atsisiųsti techninę specifikaciją]

DA serija – 06 / 08 / 10

Ekskavatoriams iki 6 t darbinės masės

Universalūs ir patikimi mulčeriai, pritaikyti intensyviam profesionaliam naudojimui.
Modeliai gaminami dviejų tipų:

Su peiliais – žolei ir smulkiai augmenijai

Su plaktukais – krūmams, tankiems augalams ir piktžolėms

🔹 Optimizuotas rotoriaus dizainas
🔹 Atspari konstrukcija nuolatiniam darbui
🔹 100 % pagaminta Italijoje

[📄 Atsisiųsti techninę specifikaciją]

DK serija

Ekskavatoriams nuo 5 iki 23 t darbinės masės

Didelio našumo hidrauliniai šienapjovės tipo mulčeriai, sukurti naudoti su vidutinės ir didelės klasės ekskavatoriais.
Modeliai gaminami su dviem rotoriaus konfigūracijomis:

Peiliai – preciziškam žolės ir lengvos augmenijos pjovimui

Plaktukai – miškininkystės darbams ir itin tankiai augmenijai

🔹 Sustiprintas rėmas ir rotorius
🔹 Itin didelė pjovimo galia ir našumas
🔹 Idealiai tinka kelių priežiūrai, žemės ūkiui ir miško ūkio darbams

[📄 Atsisiųsti techninę specifikaciją]`
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
            en:`Mulchers for Skid Loaders – DC Series

100% Made in Italy

The "Ghedini Attachments" DC Series hydraulic mulchers are engineered for use with skid steer loaders equipped with an auxiliary hydraulic circuit (PTO) providing a minimum oil flow of 26 L/min.

Built for professional agricultural, landscaping, and maintenance work, these mulchers deliver high performance, durability, and precise cutting results.

Available in four working widths:

1,080 mm

1,300 mm

1,600 mm

1,900 mm

🔹 Rugged and reliable Italian design
🔹 Smooth hydraulic performance
🔹 Ideal for grass, shrubs, and light forestry applications
<a href="/docs/dc1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Mulčeriai mini krautuvams – DC serija

Pagaminta 100 % Italijoje

Ghedini Attachments DC serijos hidrauliniai mulčeriai sukurti naudoti su mini krautuvais, turinčiais pagalbinę hidraulinę liniją (PTO) su ne mažesniu kaip 26 l/min alyvos srautu.

Tai patikimi ir efektyvūs įrenginiai, pritaikyti profesionaliam žemės ūkio, aplinkos priežiūros ir apželdinimo darbui.

Galimi keturi darbo pločiai:

1 080 mm

1 300 mm

1 600 mm

1 900 mm

🔹 Patikima ir tvirta itališka konstrukcija
🔹 Sklandus hidraulinės sistemos darbas
🔹 Tinka žolės, krūmynų ir lengvos augmenijos pjovimui

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]` 
        },
        images: [],
        videos: ["https://youtu.be/ASmjIURLvLA"]
        
    },
    DF: {
        text: {
            en: `Forestry Mulchers for Excavators – DF Series (10–13)

100% Made in Italy

The "Ghedini Attachments" DF Series hydraulic forestry mulchers are designed for excavators with an operating weight between 5 and 30 tonnes.
These heavy-duty brushcutters are built for professional forestry, land clearing, and vegetation management, combining high cutting power with exceptional reliability.

Available in two rotor configurations:

Standard teeth – ideal for mowing and light pruning

Hard-metal plates – for cutting shrubs, roots, and dense or woody vegetation

🔹 Heavy-duty reinforced frame and rotor
🔹 Designed for continuous professional operation
🔹 Maximum cutting power and hydraulic efficiency
<a href="/docs/da3en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Miško mulčeriai ekskavatoriams – DF serija (10–13)

Pagaminta 100 % Italijoje

,,Ghedini Attachments" DF serijos hidrauliniai miško mulčeriai skirti ekskavatoriams, kurių darbinė masė nuo 5 iki 30 tonų.
Tai profesionalūs, didelio našumo įrenginiai, sukurti miško valymo, krūmynų šalinimo ir augmenijos priežiūros darbams.

Galimos dvi rotoriaus konfigūracijos:

Standartiniai dantys – žolės pjovimui ir lengvam genėjimui

Kietmetalio plokštelės – krūmams, šaknims ir tankiai augmenijai pjauti

🔹 Sustiprintas rėmas ir rotorius
🔹 Sukurta nuolatiniam profesionaliam darbui
🔹 Didelė pjovimo galia ir hidraulinis efektyvumas

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/fm.avif"],
        videos: []
    },
    T: {
        text: {
            en: `Auger Drives & Rotary Harrows – Ghedini Attachments

100% Made in Italy

High-performance hydraulic auger drives and rotary harrows designed and manufactured in Italy by Ghedini Attachments.
Built for mini, midi, and standard excavators, these attachments deliver maximum torque, reliability, and versatility for drilling and soil preparation tasks.

TA 01 – Auger Drive for Mini Excavators

For excavators from 0.7 to 2.5 tonnes

Compact and lightweight direct drive auger, requiring no drainage line.
Supplied with arm attachment and pin, ideal for small excavators and compact machines.

🔹 Direct drive – simple and reliable
🔹 No drainage required
🔹 Lightweight and durable
<a href="/docs/auger1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
TB 06 – Auger Drive for Excavators

For excavators from 1.5 to 6 tonnes

Equipped with a reduction gearbox, this auger offers excellent torque and drilling performance.
No drainage required.
Features a steel body and optional side or horizontal mounting.
An auger block is available for use with log splitters.

🔹 Steel construction for maximum strength
🔹 Compact reducer design
🔹 Supplied with arm attachment and pin
<a href="/docs/auger2en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
TK Series – Auger Drives for Midi Excavators

For excavators from 5 to 15 tonnes

The TK Series augers are designed to provide maximum efficiency for medium-sized excavators.
A new-generation gearbox, produced entirely by Ghedini, ensures superior robustness and reliability.
Fully steel-built for long-lasting performance.

🔹 High-torque gearbox
🔹 Heavy-duty all-steel construction
🔹 Designed for demanding professional work
<a href="/docs/auger3en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
TV – TT – TS Series – Augers for All Terrain Types

Augers of the TV, TT, and TS Series are available in various diameters and lengths, suitable for all soil conditions — from agricultural and mixed terrain to rocky ground.
Custom tips and configurations can be manufactured according to customer specifications.

🔹 Wide range of auger diameters and lengths
🔹 Adaptable to any terrain
🔹 Custom designs available on request
<a href="/docs/auger4en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
SHR Series – Rotary Harrows

The innovative SHR Series rotary harrows are designed for soil levelling and loosening, ensuring excellent ground preparation for agricultural or landscaping applications.
Custom-built spikes can be supplied for any soil type according to customer requirements.

🔹 Perfect for soil preparation and finishing
🔹 Durable Italian construction
🔹 Custom spike options available
<a href="/docs/auger5en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Grąžtai ir rotacinės akėčios – Ghedini Attachments

Pagaminta 100 % Italijoje

Aukštos kokybės hidrauliniai grąžtai ir rotacinės akėčios, sukurti ir pagaminti Italijoje bendrovės Ghedini Attachments.
Skirti mini, vidutinės klasės ir standartiniams ekskavatoriams, pasižymi dideliu sukimo momentu, patikimumu ir universalumu įvairiems gręžimo bei dirvos paruošimo darbams.

TA 01 – Grąžtas mini ekskavatoriams

Ekskavatoriams nuo 0,7 iki 2,5 t darbinės masės

Kompaktiškas ir lengvas tiesioginės pavaros grąžtas, kuriam nereikalinga nutekėjimo linija.
Tiekiamas su svirties tvirtinimu ir kaiščiu, tinkamas mažiems ekskavatoriams ir kompaktiškiems įrenginiams.

🔹 Tiesioginė pavara – paprasta ir patikima konstrukcija
🔹 Nereikalauja hidraulinės nutekėjimo linijos
🔹 Lengvas, bet tvirtas korpusas

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

TB 06 – Grąžtas ekskavatoriams

Ekskavatoriams nuo 1,5 iki 6 t darbinės masės

Įrengtas reduktoriumi, užtikrinančiu aukštą sukimo momentą ir efektyvų gręžimą.
Nereikalauja nutekėjimo linijos.
Turi plieninį korpusą ir galimybę šoniniam arba horizontaliam tvirtinimui.
Galimas grąžto blokas naudojimui su malkų skaldytuvais.

🔹 Plieninė konstrukcija maksimaliam patvarumui
🔹 Kompaktiškas reduktorius
🔹 Tiekiamas su svirties tvirtinimu ir kaiščiu

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

TK serija – Grąžtai vidutinės klasės ekskavatoriams

Ekskavatoriams nuo 5 iki 15 t darbinės masės

TK serijos grąžtai sukurti maksimaliam efektyvumui vidutinės klasės ekskavatoriuose.
Naujos kartos pavarų dėžė, gaminama „Ghedini“ įmonėje, užtikrina išskirtinį patvarumą ir patikimumą.
Korpusas pagamintas visiškai iš plieno.

🔹 Didelio sukimo momento pavarų dėžė
🔹 Sustiprinta plieninė konstrukcija
🔹 Skirta intensyviam profesionaliam naudojimui

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

TV – TT – TS serijos – Grąžtai visų tipų gruntui

TV, TT ir TS serijų grąžtai gaminami įvairių diametrų ir ilgių, pritaikyti darbui su bet kokiu gruntu – nuo žemės ūkio iki akmenuotos dirvos.
Pagal kliento pageidavimus galime pagaminti specialius antgalius konkrečiam dirvožemio tipui.

🔹 Platus diametrų ir ilgių pasirinkimas
🔹 Pritaikomi bet kokiam gruntui
🔹 Galimybė gaminti pagal užsakovo specifikaciją

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

SHR serija – Rotacinės akėčios

Naujos kartos SHR serijos rotacinės akėčios skirtos dirvos lyginimui ir purenimui, užtikrinant aukštą darbo kokybę žemės ūkio ar apželdinimo darbuose.
Pagal užsakymą gaminamos spyglių sistemos, pritaikytos bet kokiam gruntui.

🔹 Puikiai tinka dirvos paruošimui ir užbaigiamiesiems darbams
🔹 Tvirta itališka konstrukcija
🔹 Galimybė gaminti pagal užsakovo poreikius

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/auger1.avif",
        "/photos/auger2.avif"],
        videos: ["https://youtu.be/a6gaGdPgvhQ",
            "https://youtu.be/FDrEN8QvSxY",
        "https://youtu.be/TyTBOUm6ORQ"]
    },
    TT: {
        text: {
            en: `Auger Bits – Ghedini Attachments

100% Made in Italy

"Ghedini Attachments" supplies auger bits suitable for all soil types, custom-built according to the customer’s requirements.
Available in multiple diameters and lengths, with the option of extensions to achieve the desired drilling depth.

WIDIA Auger Bit – For Rocky Soil

The WIDIA auger bit features replaceable carbide tips, ideal for use in rocky or compact ground.
Available with hexagonal shafts (50, 70, 100 mm) and square shafts (120 mm), in various diameters and lengths — also available in extendable versions.

What is Widia?
Widia, also known as cemented carbide, Carboloy, or hard metal, is a composite material consisting of tungsten carbide particles bonded within a metal matrix.
It is manufactured through a sintering process, in which fine powders are mixed, pressed, and heated under pressure until they fuse into a single, solid structure.
Carbide tools are significantly harder and more heat-resistant than traditional high-speed steel tools, enabling higher cutting speeds and superior durability under demanding conditions.

🔹 Replaceable carbide (WIDIA) tips
🔹 Exceptional wear and heat resistance
🔹 Designed for rocky and compact soil

Auger Bit for Agricultural Soil

High-efficiency drill bits with replaceable knives made of wear-resistant steel, designed for agricultural and general-purpose soils.
Available with hexagonal shafts (50 or 70 mm), in a variety of diameters and lengths.
Extensions available with or without flight.

🔹 Replaceable steel knives
🔹 Suitable for most soil conditions
🔹 Ideal for agricultural and landscaping work

Drill Bit with PENGO® Tip – For Mixed Ground

Auger bits equipped with PENGO® tips and digging teeth, ideal for mixed or stony soils.
Available with hexagonal (50, 70, 100 mm) or square (120 mm) shafts, in various diameters and lengths, also in extendable versions.

For diameters up to Ø400 mm, a single central PENGO® tip is used; for larger sizes, a central PENGO® Ø100 mm tip is combined with additional side teeth for efficient digging.

🔹 PENGO® system with replaceable teeth
🔹 Optimized for mixed and stony ground
🔹 Extendable version available

Wood Drilling and Splitting Bits

The conical wood splitter is designed for log splitting, while the stump grinder (available in different diameters) shreds wood to achieve complete stump removal, even below ground level.
Available with 50 and 70 mm hexagonal couplings.
A special bit for palm trees is also available upon request.

🔹 Wood splitter and stump grinder models
🔹 Designed for complete wood processing
🔹 Available in multiple diameters and configurations`,
            lt: `Grąžtai – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

Įmonė ,,Ghedini Attachments" tiekia grąžtus, pritaikytus visų tipų gruntui, pagal individualius kliento poreikius.
Siūlomi įvairių diametrų ir ilgių modeliai, su galimybe naudoti pratęsimus, kad būtų pasiektas reikiamas gręžimo gylis.

WIDIA grąžtas – kietam ir akmenuotam gruntui

WIDIA grąžtai turi keičiamius kietmetalio antgalius, skirtus darbui su akmenuotu, tankiu ar kietu gruntu.
Galimi su šešiakampėmis jungtimis (50, 70, 100 mm) ir keturkampėmis (120 mm) jungtimis, įvairių diametrų ir ilgių, taip pat pratęsiamoje versijoje.

Kas yra Widia?
Widia (dar vadinama cementiniu karbidu, Carboloy ar kietmetaliu) – tai kompozicinė medžiaga, sudaryta iš volframo karbido dalelių, įterptų į metalinę matricą.
Ji gaminama sukepinimo būdu, kai smulkios miltelinės dalelės yra suspaudžiamos ir kaitinamos aukštu slėgiu, kol susiformuoja vientisa, itin tvirta struktūra.
Kietmetalio įrankiai yra kietesni ir atsparesni karščiui nei greitaeigio plieno įrankiai, todėl leidžia dirbti didesniais pjovimo greičiais ir užtikrina ilgalaikį patvarumą.

🔹 Keičiami kietmetalio (WIDIA) antgaliai
🔹 Didelis atsparumas dėvėjimuisi ir temperatūrai
🔹 Skirti kietam ir akmenuotam gruntui

Grąžtas žemės ūkio dirvožemiui

Aukšto efektyvumo grąžtai su keičiamaus plieno peiliais, skirti darbui žemės ūkio ir bendros paskirties gruntuose.
Galimi su šešiakampėmis jungtimis (50 arba 70 mm), įvairių diametrų ir ilgių, su galimybe naudoti pratęsimus su arba be spirale.

🔹 Keičiami dėvėjimuisi atsparūs peiliai
🔹 Tinka daugumai gruntų
🔹 Puikiai tinka žemės ūkio ir aplinkos priežiūros darbams


Grąžtas su PENGO® antgaliu – mišriam gruntui

PENGO® antgaliais ir kasimo dantimis aprūpinti grąžtai, tinkami darbui mišriuose ar akmenuotuose gruntuose.
Galimi su šešiakampėmis (50, 70, 100 mm) ir keturkampėmis (120 mm) jungtimis, įvairių diametrų ir ilgių, taip pat pratęsiamose versijose.

Iki Ø400 mm diametro naudojamas vienas centrinis PENGO® antgalis, o didesniems skersmenims – PENGO® Ø100 mm centrinis antgalis su papildomais šoniniais dantimis efektyviam kasimui.

🔹 Keičiami PENGO® dantys ir antgaliai
🔹 Skirti mišriam ir akmenuotam gruntui
🔹 Galima versija su prailginimu

Medžio apdirbimo ir skaldymo grąžtai

Kūginis medžio skaldytuvas skirtas malkų skaldymui, o kelmų freza, prieinama įvairių diametrų, naudojama medienai smulkinti ir kelmams pašalinti net po žeme.
Galimos šešiakampės jungtys (50 ir 70 mm).
Taip pat gaminamas specialus grąžtas palmėms.

🔹 Skaldymo ir smulkinimo antgaliai
🔹 Visiškam kelmų ir medienos pašalinimui
🔹 Galimi įvairūs diametrai ir konfigūracijos`
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
            en: `Vibro Pile Drivers – "Ghedini Attachments""

100% Made in Italy

The Ghedini Attachments IP Series hydraulic pile drivers are designed for vibratory driving of poles and soil compaction, depending on the equipment installed.
They connect directly to the hydraulic power take-off (PTO) line of the excavator and deliver high vibration efficiency combined with robust Italian engineering.

For specific applications, it is also possible to use only the vibrating body, customized to meet customer requirements.

Technical Features

Bi-directional aluminum hydraulic motor

Drain line recommended only for back pressures above 7 bar

Equipped with anti-shock and anti-cavitation valves, calibrated at 160 bar, to protect the hydraulic pump from sudden pressure changes

Built exclusively with SKF bearings, ring nuts, and lock washers, ensuring long-term reliability and performance
<a href="/docs/pile1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Vibro polkalės – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

,,Ghedini Attachments" IP serijos hidraulinės vibro polkalės sukurtos polių įrengimui vibracijos metodu bei grunto tankinimui, priklausomai nuo naudojamos įrangos tipo.
Įrenginiai jungiasi tiesiai prie ekskavatoriaus hidraulinės PTO linijos, užtikrindami didelį vibracijos efektyvumą ir patikimą itališką konstrukciją.

Pagal kliento poreikį galima naudoti tik vibruojantį korpusą, pritaikytą konkrečiai darbo užduočiai.

Techninės savybės

Dvikryptis hidraulinis variklis iš aliuminio

Nutekėjimo linija rekomenduojama, kai grįžtamojo slėgio reikšmė viršija 7 bar

Įrengta apsauga nuo smūgių (anti-shock) ir kavitacijos (anti-cavitation), kalibruota ties 160 bar, siekiant apsaugoti siurblį nuo slėgio svyravimų

Naudojami tik SKF guoliai, veržlės ir fiksavimo žiedai, užtikrinantys ilgaamžiškumą ir sklandų darbą

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
            images: ["/photos/ip-1.webp"],
        videos: ["https://youtu.be/1FHOZz9zL9E"]
    }, 
    BF: {
        text: {
            en: `Mowing Buckets – "Ghedini Attachments"

100% Made in Italy

The "Ghedini Attachments" mowing buckets are designed for the maintenance and cleaning of waterways, ditches, canals, and riverbanks.
Available in multiple sizes, they can be easily mounted on large, midi, and mini excavators, as well as hydraulic power arms.

Thanks to their unique design, the use of high-grade materials, and precision Italian craftsmanship, these buckets provide exceptional performance and durability — a cutting tool that delivers in any condition.

Our mowing buckets are specifically engineered for embankment and canal cleaning and reclamation.
They can operate fully submerged in water, without affecting the mechanical movement or cutting efficiency.
All cutting system components are fully bolted, ensuring easy maintenance and reliability.

"Ghedini attachments" weed-cutting buckets are equipped with:

A movement mechanism with sealed support bearing

SKF bearings

Anti-shock valve for hydraulic protection

Original Hesston® teeth with a grooved profile

Maximum cutting diameter: 5–6 cm
<a href="/docs/mowing1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Pjovimo kaušai – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

,,Ghedini Attachments" pjovimo kaušai skirti vandens telkinių, griovių, kanalų ir upių pakrančių priežiūrai bei valymui.
Įvairių dydžių modeliai gali būti lengvai montuojami ant didelių, vidutinių ir mini ekskavatorių, taip pat ant hidraulinių strėlių.

Dėl unikalaus dizaino, aukštos kokybės medžiagų ir preciziško itališko meistriškumo, šie įrenginiai pasižymi išskirtiniu našumu ir patvarumu – tai pjovimo kaušas, kuris dirba patikimai bet kokiomis sąlygomis.

Pjovimo kaušai sukurti šlaitų ir kanalų valymo bei rekultivacijos darbams.
Jie gali dirbti visiškai panardinti į vandenį, nepažeidžiant mechaninio judesio ar pjovimo sistemos.
Visi pjovimo sistemos elementai yra visiškai prisukti, todėl įrenginiai lengvai prižiūrimi ir patikimi.

,,Ghedini attachments" piktžolių pjovimo kaušai turi:

Judėjimo mechanizmą su sandariai uždaru atraminiu guoliu

SKF guolius

Anti-shock vožtuvą hidraulinei apsaugai

Originalius Hesston® dantis su grioveliniu profiliu

Maksimalus pjovimo skersmuo: 5–6 cm

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/bf-1.webp"],
        videos: ["https://youtu.be/y53fDzbryi8",
        "https://youtu.be/K4Wa-4qbGHY"]
    },
    BT: {
        text: {
            en: `BT Hedgetrimmer – "Ghedini Attachments"

100% Made in Italy

"Ghedini Attachments" is committed to continuous product innovation to ensure maximum customer satisfaction.

The BT Hedgetrimmer features a new shock absorption system, reducing structural stress and minimizing the risk of damage during operation.

This professional attachment is engineered for cutting trees, hedges, and branches up to 4–5 cm in diameter, and can be used both horizontally and vertically, thanks to its Hirth joint system.

Compatible with excavators and mini excavators up to 8 tonnes, as well as backhoe loaders.

Available in four working widths:

1200 mm

1500 mm

1600 mm

1800 mm

The BT Hedgetrimmer is the ideal solution for hedge maintenance, vegetation control, and land reclamation — combining durability, versatility, and precision cutting performance.

<a href="/docs/hedge1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
New Hedge Trimmer BT75 Ghedini Attachments!


Hedge Trimmer for excavator for professional use and landscape maintenance.

No drain needed. Possibility of 360° rotation through an integrated rod. Max cutting diameter 5 cm. Equipped with anti-shock and anti-cavitation valves.

Equipped with a fixed blade and a mobile blade, they allow you to get a clean and precise cut of the branches.

With a 80 cc pump (500 rpm), our hedge trimmer BT75 can shape hedges and trim trees with high precision.

Every blade tooth can be replaced simply through its nuts, for the highest efficiency and the longest life.

The hedge trimmer BT75 has a working width of 1500 mm and a weight of 95 kg.
Max oil flow 40 l/min.
Max pressure 140 bar.
For excavators with a weight ranging from 2,7 and 5 tons.

Ghedini Attachments offers a wide choice of mowers and other accessories, suitable for different jobs : mowing, trimming, pruning, ditch and canal cleaning.
For every need connected to the earthmoving and agriculture.

<a href="/docs/hedge2en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>
`,
            lt: `BT gyvatvorių pjovimo įrenginys – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

,,Ghedini Attachments" nuolat siekia tobulinti savo gaminius, kad užtikrintų didžiausią klientų pasitenkinimą.

BT serijos gyvatvorių pjovimo įrenginys turi naują smūgius sugeriančią sistemą, kuri sumažina apkrovą konstrukcijai ir apsaugo įrenginį nuo galimų pažeidimų.

Šis profesionalus priedas sukurtas medžių, krūmų ir šakų pjovimui iki 4–5 cm skersmens.
Dėl Hirth jungties sistemos įrenginį galima naudoti tiek horizontaliai, tiek vertikaliai.

Tinka montuoti ant ekskavatorių ir mini ekskavatorių iki 8 tonų, taip pat ratinių krautuvų su kasimo strėle (backhoe loaders).

Galimi keturi darbo pločiai:

1200 mm

1500 mm

1600 mm

1800 mm

BT gyvatvorių pjovimo įrenginys – tai idealus sprendimas gyvatvorių priežiūrai, augmenijos šalinimui ir teritorijų rekultivacijai, užtikrinantis patvarumą, universalumą ir tikslų pjovimą.

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/bt-1.webp"],
        videos: ["https://youtu.be/SLeCcpNl5dg"]
    },
    I: {
        text: {
            en: `Hydraulic Compactors – IC / ID / IE Series

100% Made in Italy

The "Ghedini Attachments" IC, ID, and IE Series hydraulic compactors are designed for soil compaction and trench backfilling.
The combined action of the pressure applied by the excavator arm and the high-frequency vibration generated by the vibrator ensures optimal compaction of the material used for filling and stabilizing the ground.

The compactors are powered hydraulically through the PTO connection of the excavator on which they are installed.

Each model features a bi-directional aluminum hydraulic motor and includes a drain line recommendation for counterpressures above 7 bar.
Equipped with anti-shock and anti-cavitation valves calibrated at 160 bar, they protect the hydraulic system from sudden pressure changes.

For maximum durability and performance, all Ghedini vibratory plates are built using SKF bearings, high-strength nuts, and fasteners, ensuring reliability even under heavy-duty professional use.
<a href="/docs/vibro1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Hidrauliniai tankintuvai – IC / ID / IE serijos

Pagaminta 100 % Italijoje

,,Ghedini Attachments" IC, ID ir IE serijų hidrauliniai tankintuvai sukurti grunto tankinimui ir tranšėjų užpildo sutankinimui.
Dėl ekskavatoriaus strėlės spaudimo ir aukšto dažnio vibracijos sąveikos pasiekiamas maksimalus užpildo sutankinimo efektyvumas.

Tankintuvai maitinami hidrauliškai per PTO jungtį nuo ekskavatoriaus, ant kurio jie yra sumontuoti.

Įrengti su dvikrypčiu aliuminio hidrauliniu varikliu, su nutekėjimo linijos rekomendacija, kai grįžtamojo slėgio reikšmė viršija 7 bar.
Taip pat įmontuoti apsauginiai anti-shock ir anti-cavitation vožtuvai, kalibruoti ties 160 bar, siekiant apsaugoti hidraulinę sistemą nuo slėgio šuolių.

Didžiausiam patvarumui ir našumui užtikrinti visi Ghedini vibro plokštumų modeliai gaminami naudojant SKF guolius, sustiprintas veržles ir tvirtinimo detales, todėl jie patikimai veikia net intensyviai naudojant.

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/i-1.webp"],
        videos: ["https://youtu.be/KFICDsnUfPo"]
    },
    K: {
        text: {
            en: `Hydraulic Grabs – "Ghedini Attachments"

100% Made in Italy

"Ghedini Attachments" hydraulic grabs are designed for log handling, bulk material handling, rock movement, dredging, and digging operations.
These attachments can be easily mounted on hydraulic excavators or cranes, providing unmatched versatility and precision for a wide range of applications — from construction and demolition to forestry and industrial material handling.

With years of experience in hydraulic grab design and manufacturing, Ghedini Attachments delivers tools that combine strength, flexibility, and efficiency, ensuring optimal performance in any working condition.

KA Series – Log Grabs

The "Ghedini Attachments" KA Series log grabs are ideal for handling, loading, and unloading logs ready for transport.
They can be installed on excavators or forestry cranes, and are built from Domex 710 high-strength steel, equipped with block valves for safety and durability.

These grabs are widely used in the forestry and industrial sectors, suitable for excavators up to 15 tonnes.

🔹 Made from Domex 710 steel
🔹 Equipped with hydraulic block valves
🔹 Suitable for forestry and industrial operations

<a href="/docs/log1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>

KL Series – Multi-Purpose Log and Material Grabs

The "Ghedini Attachments" KL Series offers exceptional flexibility and multifunctional design for log, branch, and material handling.
Manufactured in Domex 710 steel and fitted with block valves, these grabs can be configured for three distinct working modes:

Without teeth or bucket – for log loading

With widening teeth – for branches or bulky materials

With double buckets – for loading wood chips, sand, soil, or loose materials

The setup can be changed in under two minutes by simply inserting four pins.

Also available as a reinforced rock grab, suitable for horizontal and vertical use, with or without hydraulic rotators.

🔹 Three-in-one design for versatile operation
🔹 Reinforced structure for heavy-duty use
🔹 Quick configuration change in minutes

<a href="/docs/log2en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>

KP Series – Rock Grabs

The "Ghedini Attachments" KP Series grabs are designed with reinforced frames for handling rocks and demolition materials.
They can operate vertically or horizontally, with or without rotators, depending on the application.
Built from Domex 710 steel and equipped with block valves, they guarantee maximum reliability and structural strength in demanding environments.

🔹 Reinforced structure for heavy-duty operations
🔹 Safe and durable Domex 710 steel construction
🔹 Compatible with special hydraulic rotators

<a href="/docs/log3en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Hidrauliniai griebtuvai – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

,,Ghedini Attachments" hidrauliniai griebtuvai sukurti rąstų, birių medžiagų, akmenų, gruntų ir kitų krovinių kėlimui bei tvarkymui.
Įrenginiai montuojami ant hidraulinių ekskavatorių arba kranų, užtikrinant universalumą, tikslumą ir patikimumą įvairiuose darbuose – nuo statybos ir griovimo iki miškininkystės bei pramonės sektoriaus.

Daugiametė Ghedini patirtis leidžia pasiūlyti įrangą, kuri derina tvirtumą, lankstumą ir efektyvumą, užtikrindama optimalų rezultatą net sudėtingiausiomis darbo sąlygomis.

KA serija – rąstų griebtuvai

,,Ghedini Attachments" KA serijos rąstų griebtuvai skirti rąstų krovimui, iškrovimui ir tvarkymui transportavimui.
Montuojami ant ekskavatorių arba miško kranų, pagaminti iš Domex 710 aukštos kokybės plieno, su hidrauliniais blokavimo vožtuvais.

Plačiai naudojami miškininkystėje ir pramonėje, tinka ekskavatoriams iki 15 tonų.

🔹 Pagaminti iš Domex 710 plieno
🔹 Įrengti hidrauliniai blokavimo vožtuvai
🔹 Skirti miško ir pramoniniams darbams

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

KL serija – universalūs rąstų ir birių medžiagų griebtuvai

,,Ghedini Attachments" KL serijos griebtuvai pasižymi unikaliu daugiafunkciu dizainu, leidžiančiu naudoti įrenginį įvairioms užduotims – nuo rąstų iki šakų ar birių medžiagų krovimo.
Pagaminti iš Domex 710 plieno, įrengti blokavimo vožtuvai.

Galimos trys darbo konfigūracijos:

Be dantų ir kaušo – rąstų krovimui

Su išplečiamais dantimis – šakoms ir stambiems kroviniams

Su dviem kaušais – pjuvenoms, smėliui, žemei ar birioms medžiagoms

Perkonfigūravimas atliekamas mažiau nei per 2 minutes, įdedant 4 kaiščius.

Taip pat galima sustiprinta versija akmenims (rock grab), tinkama darbui horizontaliai arba vertikaliai, su arba be hidraulinio rotatoriaus.

🔹 Trys naudojimo režimai
🔹 Sustiprinta konstrukcija intensyviam darbui
🔹 Greitas perkonfigūravimas per kelias minutes

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

KP serija – akmenų griebtuvai

,,Ghedini Attachments" KP serijos griebtuvai turi sustiprintą rėmą, leidžiantį efektyviai tvarkyti akmenis, betono nuolaužas ir kitus sunkius krovinius.
Gali veikti vertikaliai arba horizontaliai, su arba be rotatoriaus, priklausomai nuo užduoties.
Pagaminti iš Domex 710 plieno ir įrengti su blokavimo vožtuvais, užtikrinančiais patikimą darbą ir ilgaamžiškumą.

🔹 Sustiprinta konstrukcija sunkiasvoriams darbams
🔹 Domex 710 plieno patvarumas ir saugumas
🔹 Suderinami su hidrauliniais rotatoriais

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/k-1.webp"],
        videos: ["https://youtu.be/eizvkZpCcN0",
        "https://youtu.be/4C8HfQKl5BA"]
    },
    QP: {
        text: {
            en: `Hydraulic Grabs – QP Series

100% Made in Italy

The "Ghedini Attachments" QP Series hydraulic grabs are designed to make your work faster and more efficient.
Suitable for excavators from 2.5 to 25 tonnes, these specialized tools are built for post handling, extraction, and installation in construction, fencing, and agricultural applications.

The QP Series includes four distinct models, each optimized for specific materials and excavator sizes:

Grip with fixed buffers – for extracting and driving concrete or iron posts

Grip with rotating buffers – for handling concrete posts with enhanced precision

Grip for wood posts (mini and midi excavators) – ideal for light and medium-duty work

Grip for wood posts (large excavators) – designed for heavy-duty forestry and infrastructure applications

All models ensure strong gripping force, durable steel construction, and smooth hydraulic performance, making them reliable in any working condition.

<a href="/docs/grapple1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Hidrauliniai griebtuvai – QP serija

Pagaminta 100 % Italijoje

,,Ghedini Attachments" QP serijos hidrauliniai griebtuvai sukurti palengvinti ir paspartinti jūsų darbą.
Tinka ekskavatoriams nuo 2,5 iki 25 tonų, skirti polių kėlimui, ištraukimui ir įrengimui statybos, aptvėrimo bei žemės ūkio srityse.

QP seriją sudaro keturi modeliai, pritaikyti pagal medžiagos tipą ir ekskavatoriaus svorį:

Griebtuvas su fiksuotais buferiais – betoninių ir metalinių polių ištraukimui bei įrengimui

Griebtuvas su besisukančiais buferiais – betoninių polių tvarkymui, kai reikalingas didesnis tikslumas

Griebtuvas mediniams poliams (mini ir vidutiniams ekskavatoriams) – lengviems ir vidutinio sudėtingumo darbams

Griebtuvas mediniams poliams (didelės klasės ekskavatoriams) – miškininkystės ir infrastruktūros darbams

Visi modeliai pasižymi stipria griebimo galia, tvirta plienine konstrukcija ir sklandžiu hidrauliniu veikimu, užtikrinančiu patikimą darbą bet kokiomis sąlygomis.

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/qp-1.webp"],
        videos: ["https://youtu.be/1FHOZz9zL9E"]
    },
    H: {
        text: {
            en: `Hydraulic Submersible Pumps – HB / HC / HV Series

100% Made in Italy

With the expertise of a skilled engineering team, "Ghedini Attachments" offers a complete range of high-quality hydraulic submersible pumps, designed for sewage, slurry, and industrial fluid pumping applications.

Built for professional use, these pumps feature compact construction, durable design, and hydraulic drive, making them ideal for draining flooded excavations and other heavy-duty dewatering tasks.

They can be connected to mini excavators, skid steers, truck cranes, or independent hydraulic power packs.
As they contain no electrical components, they operate in complete safety under water, even at significant depths.

Invest in a "Ghedini Attachments" Submersible Pump – reliable, safe, and built to last.

Main Features

Hydraulically driven – no electric components, ensuring maximum safety under water

Suction filter prevents rocks and stones from entering

Operates at depths up to 20 meters

Manufactured according to strict quality standards, using original SKF clamps and bearings

Guarantees maximum efficiency, operational reliability, and long service life

Applications

"Ghedini Attachments" submersible pumps are designed for heavy-duty dewatering and sludge removal operations, including:

Draining foundations, pits, tunnels, and excavations

Lowering the water table below excavation levels

Pumping water out of cofferdams

Supplying water for jetting, sluicing, or other operations

Foundation grouting and drying solid materials

Technical Overview

The pump consists of a centrifugal unit and motor integrated in a single cylindrical body.
Water passes between the pump and casing, allowing smooth upward flow to the rising main.
Designed for gritty or contaminated water, these pumps ensure consistent operation under harsh site conditions.

The choice of model depends on:

Required flow rate and head pressure

Type of liquid and solids content

Depth of operation

Hydraulic power available from the carrier machine

Project scale and complexity

🔹 Maximum depth: 20 m
🔹 Ideal for: slurry, sludge, sewage, and groundwater removal
🔹 Structure: all-steel, corrosion-resistant construction

<a href="/docs/pump1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Hidrauliniai panardinamieji siurbliai – HB / HC / HV serijos

Pagaminta 100 % Italijoje

Pasitelkdama kvalifikuotų inžinierių patirtį, ,,Ghedini Attachments" siūlo platų aukštos kokybės hidraulinių panardinamųjų siurblių asortimentą, skirtą nuotekų, dumblo ir pramoninių skysčių siurbimui.

Šie siurbliai pasižymi kompaktišku dizainu, tvirtumu ir hidrauliniu pavara, todėl idealiai tinka užlietų kasimo vietų sausinimui ir sunkiasvoriams drenažo darbams.

Siurbliai gali būti prijungiami prie mini ekskavatorių, krautuvų, autokranų ar nepriklausomų hidraulinių jėgos agregatų.
Kadangi jie neturi elektros komponentų, gali būti naudojami visiškai panardinti po vandeniu, užtikrinant visišką saugumą.

Pasirinkite patikimą ,,Ghedini Attachments" panardinamąjį siurblį – saugų, našų ir ilgaamžį.

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]

Pagrindinės savybės

Hidraulinė pavara – nėra elektros komponentų, todėl užtikrinamas visiškas saugumas po vandeniu

Įsiurbimo filtras sulaiko akmenis ir stambias daleles

Gali veikti iki 20 metrų gylio

Pagaminti laikantis aukštų kokybės standartų, naudojant originalius SKF laikiklius ir guolius

Užtikrina maksimalų efektyvumą, patikimumą ir ilgą tarnavimo laiką

Pritaikymo sritys

Ghedini panardinamieji siurbliai skirti vandens, dumblo ir nuotekų šalinimui šiose srityse:

Pamatų, šulinių, tunelių ir kasimo vietų sausinimui

Grunto vandens lygio nuleidimui žemiau kasimo ribos

Vandens išpumpavimui iš apsauginių užtvarų (cofferdams)

Vandens tiekimui plovimui, purškimui ar kitoms techninėms reikmėms

Pamatų injekcijoms ir medžiagų džiovinimui

Techninė apžvalga

Siurblys sudarytas iš centrifuginės dalies ir variklio, sumontuotų viename cilindriniame korpuse.
Vanduo cirkuliuoja tarp korpuso ir siurblio, judėdamas aukštyn link išleidimo angos.
Skirtas darbui su nešvariu, smėlingu ar dumblinu vandeniu, užtikrina pastovų našumą net sudėtingomis sąlygomis.

Modelio pasirinkimas priklauso nuo:

Reikalingo srauto ir slėgio

Skysčio tipo ir kietųjų dalelių kiekio

Veikimo gylio

Hidraulinės galios iš ekskavatoriaus ar agregato

Projekto apimties ir sudėtingumo

🔹 Maksimalus darbinis gylis: 20 m
🔹 Tinka: dumblo, nuotekų, grunto ir gruntinio vandens šalinimui
🔹 Konstrukcija: plieninis, korozijai atsparus korpusas

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/h-1.webp"],
        videos: ["https://youtu.be/s4W3ZeVA6x8",
        "https://youtu.be/X8kdupvGh00"]
    },
    PO: {
        text: { en: "Polyp grab.", lt: "Polipas (greiferis)." },
        images: ["/photos/po-1.webp"],
        videos: []
    },
    BC: {
        text: {
            en: `Rakes – "Ghedini Attachments"

100% Made in Italy

The "Ghedini Attachments" rakes are designed for excavators up to 7 tonnes, providing an efficient solution for surface material removal and site cleaning.
They are ideal for clearing brushwood, wood, stones, and debris, making them especially suitable for environmental maintenance and land restoration.

Available in four working widths, these rakes combine strength, simplicity, and reliability, ensuring high performance and long-lasting durability on any job site.

<a href="/docs/rake1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Grėbliai – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

,,Ghedini Attachments" grėbliai sukurti ekskavatoriams iki 7 tonų, siekiant užtikrinti efektyvų paviršiaus valymą ir medžiagų pašalinimą.
Puikiai tinka šakų, medienos, akmenų bei kitų atliekų surinkimui, todėl ypač pritaikyti aplinkos priežiūros ir teritorijų tvarkymo darbams.

Siūlomi keturių skirtingų darbo pločių modeliai, pasižymintys tvirtumu, paprastumu ir patikimumu, užtikrinančiu ilgaamžį bei našų darbą bet kokiomis sąlygomis.

[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]`
        },
        images: ["/photos/bc-1.webp"],
        videos: ["https://youtu.be/fYHrHjbA0H8"]
    },
    RIP: {
        text: {
            en: `Rippers – "Ghedini Attachments""

100% Made in Italy

The "Ghedini Attachments" ripper is equipped with interchangeable teeth made of hardened, wear-resistant steel, designed for subsurface work such as stump removal, land tilling, and stone extraction.

Built for excavators from 2 to 10 tonnes, this attachment is available with 1, 2 or 5 teeth, providing strong penetration and durability even in compact or rocky soil.

A reliable tool for land clearing, preparation, and agricultural or forestry applications.

<a href="/docs/ripper1en.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 DOWNLOAD TECHNICAL SHEET]
</a>`,
            lt: `Raštas (grėbtuvas) – ,,Ghedini Attachments"

Pagaminta 100 % Italijoje

,,Ghedini Attachments" raštas turi keičiamos kietinto, dėvėjimuisi atsparaus plieno dantis, skirtas darbui po žeme – kelmų rovimo, žemės purenimo ir akmenų iškėlimo darbams.

Tinka ekskavatoriams nuo 2 iki 10 tonų, galimi modeliai su 1, 2 arba 5 dantimis.
Įrenginys pasižymi didele įsiskverbimo galia, tvirtumu ir ilgaamžiškumu, net dirbant su kietu ar akmenuotu gruntu.

Patikimas sprendimas teritorijų valymo, žemės paruošimo, žemės ūkio ir miškininkystės darbams.

<a href="/docs/ripper1lt.pdf" target="_blank" rel="noopener noreferrer"
class="text-yellow-400 hover:text-yellow-300">
[📄 ATSISIŲSTI TECHNINĘ SPECIFIKACIJĄ]
</a>`
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
    const body = content.text?.[lang] || "";
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

                {/* Text + actions + videos column */}
                <div className="grid gap-4">
                    <div className="text-neutral-300 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: copy }}></div>
                    <div className="text-neutral-400">
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
                        <div className="flex items-center gap-3 text-sm">
                            <a
                                href="tel:+37065595179"
                                className="flex items-center gap-1 text-neutral-300 hover:text-yellow-400 transition-colors"
                            >
                                <span className="text-base leading-none">📞</span>
                                <span>+370 65595179</span>
                            </a>

                            <a
                                href="mailto:sales@forestasbaltic.lt"
                                className="flex items-center gap-1 text-neutral-300 hover:text-yellow-400 transition-colors"
                            >
                                <span className="text-base leading-none">✉️</span>
                                <span>sales@forestasbaltic.lt</span>
                            </a>

                            <a
                                href="https://maps.app.goo.gl/9XE5vLQnVy6VXEAH8"  // keep your existing URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-neutral-300 hover:text-yellow-400 transition-colors"
                            >
                                <span className="text-base leading-none">📍</span>
                                <span>Alytus, Lithuania</span>
                            </a>
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
                        <Link to="/" className="flex items-center gap-3 font-black text-2xl tracking-tight">
                            <img
                                src="/photos/forestas.avif"
                                alt="Forestas Baltic"
                                className="h-12 w-auto opacity-90 hover:opacity-100 transition"
                                draggable="false"
                            />
                            <span>
                            Forestas<span className="text-yellow-400">Baltic</span>
                        </span></Link>
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
                                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight flex items-center gap-4">
                                                <img
                                                    src="/photos/logo.avif"
                                                    alt="Ghedini Attachments"
                                                    className="h-20 w-auto object select-none"
                                                    draggable="false"
                                                />
                                                    {t("Hydraulic Attachments", "Hidrauliniai priedai")}</h1>
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
                            <ul className="mt-4 text-sm text-neutral-300 space-y-1">
                                <li className="flex items-center gap-2">
                                    <span className="text-base leading-none">📞</span>
                                    <a href="tel:+37065595179" className="hover:text-yellow-400 transition">
                                        +370 65595179
                                    </a>
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="text-base leading-none">✉️</span>
                                    <a href="mailto:sales@forestasbaltic.lt"
                                        className="hover:text-yellow-400 transition">
                                        sales@forestasbaltic.lt
                                    </a>
                                </li>

                                <li className="flex items-center gap-4">
                                    <span className="text-base leading-none">📍</span>
                                    <a
                                        href="https://maps.app.goo.gl/fgvekbrxxsW5sysP7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-yellow-400 transition"
                                    >
                                         Alytus, Lithuania
                                    </a>
                                </li>
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
                    <div> {new Date().getFullYear()} ForestasBaltic - {t("Ghedini Attachments dealer for the Baltics", "Ghedini Attachments atstovas Baltijos šalyse")}</div>
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
