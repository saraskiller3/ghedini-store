import React from "react";

export default function RelatedPages({ lang = "lt" }) {
    const pagesLT = [
        { url: "/ghedini/mulceriai", label: "Mulčeriai" },
        { url: "/ghedini/zemes-graztai", label: "Žemės grąžtai" },
        { url: "/ghedini/medziu-griebtuvai", label: "Medžių griebtuvai" },
        { url: "/ghedini/sienavimo-kausas", label: "Šienavimo kaušai" },
        { url: "/ghedini/gyvatvoriu-kirpimo-irenginys", label: "Gyvatvorių kirpimo įrenginiai" },
        { url: "/ghedini/vibroplokstes", label: "Vibroplokštės" },
        { url: "/ghedini/poliu-kaltuvas", label: "Polių kaltuvai" },
        { url: "/ghedini/panardinami-siurbliai", label: "Panardinami siurbliai" },
        { url: "/ghedini/riperis", label: "Riperiai" }
    ];

    const pagesEN = [
        { url: "/ghedini/mulchers", label: "Mulchers" },
        { url: "/ghedini/earth-augers", label: "Augers" },
        { url: "/ghedini/log-grabs", label: "Log Grabs" },
        { url: "/ghedini/mowing-bucket", label: "Mowing Buckets" },
        { url: "/ghedini/hedge-cutter", label: "Hedge Trimmers" },
        { url: "/ghedini/vibroplates", label: "Compaction Plates" },
        { url: "/ghedini/pile-driver", label: "Post Drivers" },
        { url: "/ghedini/submersible-pumps", label: "Submersible Pumps" },
        { url: "/ghedini/ripper", label: "Rippers" }
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
