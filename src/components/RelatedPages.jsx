import React from "react";

export default function RelatedPages({ lang = "lt" }) {
    const pagesLT = [
        { url: "/mulceriai", label: "Mulčeriai" },
        { url: "/zemes-graztai", label: "Žemės grąžtai" },
        { url: "/medziu-griebtuvai", label: "Medžių griebtuvai" },
        { url: "/sienavimo-kausas", label: "Šienavimo kaušai" },
        { url: "/gyvatvoriu-kirpimo-irenginys", label: "Gyvatvorių kirpimo įrenginiai" },
        { url: "/vibroplokstes", label: "Vibroplokštės" },
        { url: "/poliu-kaltuvas", label: "Polių kaltuvai" },
        { url: "/panardinami-siurbliai", label: "Panardinami siurbliai" },
        { url: "/riperis", label: "Riperiai" }
    ];

    const pagesEN = [
        { url: "/mulchers", label: "Mulchers" },
        { url: "/earth-augers", label: "Augers" },
        { url: "/log-grabs", label: "Log Grabs" },
        { url: "/mowing-bucket", label: "Mowing Buckets" },
        { url: "/hedge-cutter", label: "Hedge Trimmers" },
        { url: "/vibroplates", label: "Compaction Plates" },
        { url: "/pile-driver", label: "Post Drivers" },
        { url: "/submersible-pumps", label: "Submersible Pumps" },
        { url: "/ripper", label: "Rippers" }
    ];

    const list = lang === "lt" ? pagesLT : pagesEN;
    const title = lang === "lt" ? "Susiję puslapiai" : "Related pages";

    return (
        <section className="bg-[#141414] border border-neutral-800 rounded-xl p-6 mt-10">
            <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>

            <div className="flex flex-wrap gap-3 text-yellow-400 text-sm">
                {list.map((p) => (
                    <a key={p.url} href={p.url} className="hover:text-yellow-300">
                        {p.label}
                    </a>
                ))}
            </div>
        </section>
    );
}
