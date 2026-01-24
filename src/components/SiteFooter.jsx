import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SiteFooter({ lang, t }) {
    
    const [enquire, setEnquire] = useState(null); // product object
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const productTitle = (p) => getTitle(p, lang);
   

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true)
        const form = e.target;

        const templateParams = {
            from_name: form.name?.value || "No name",
            from_email: form.email?.value || "No email",
            company: form.company?.value || "",
            message: form.message?.value || "",
            page: window.location.href,
        };

        emailjs
            .send(
                "service_g4h0612",
                "template_m6ula1z",
                templateParams,
                "Xbf7tvoA4GrEUVc4b"
            )
            .then(() => {
                setSending(false)
                setSent(true)      // ✅ show message
                e.target.reset()
                setEnquire(null)

                // Hide success message after 5 seconds (optional but nice)
                setTimeout(() => setSent(false), 5000)
            })
            .catch((error) => {
                console.error("EMAILJS ERROR:", error);
                setSending(false)
            });
    };
   
    return (
        <footer className="mt-20 border-t border-neutral-800 bg-neutral-950">
            <section id="contact">


                <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">{t("Contact sales", "Susisiekite su pardavėju")}</h2>
                        <p className="text-neutral-400 mt-2">{t("Send an inquiry here and we will contact You.", "Išsiųskite užklausą ir mes su Jumis susisieksime.")}</p>
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
                                    Alytus, Lietuva
                                </a>
                            </li>
                            <li className="mt-8 mb-3 text-lg font-semibold text-neutral-200 tracking-wide">
                                {t("Follow us on social media:", "Sekite mus socialiniuose tinkluose:")}
                            </li>
                            {/* Social Icons */}
                            <li className="mt-20 flex items-center gap-6 pb-12">

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/37065595179"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-black border border-black hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-12 h-12" />
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://facebook.com/profile.php?id=61583355515846"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-black border border-black hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    <img src="/icons/facebook.svg" alt="Facebook" className="w-12 h-12" />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/uabforestasbaltic/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lgbg-black border border-black hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    <img src="/icons/instagram.svg" alt="Instagram" className="w-12 h-12" />
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://youtube.com/@GhediniAttachments"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-black border border-black hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    <img src="/icons/youtube.svg" alt="YouTube" className="w-12 h-12" />
                                </a>

                                {/* Viber */}
                                <a
                                    href="viber://chat?number=+37065595179"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-black border border-black hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    <img src="/icons/viber.svg" alt="Viber" className="w-12 h-12" />
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 grid gap-3">
                        {sent && (
                            <div className="mb-4 bg-green-500/10 border border-green-500/30 text-green-400 text-center py-3 px-4 rounded-xl text-sm font-medium">
                                ✅ {t(
                                    "Inquiry sent successfully. We will contact you shortly.",
                                    "Užklausa sėkmingai išsiųsta. Susisieksime netrukus."
                                )}
                            </div>
                        )}

                        <input name="name" required placeholder={t("Your name", "Jūsų vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input name="email" required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <input name="company" placeholder={t("Company (optional)", "Įmonė (neprivaloma)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <textarea name="message" rows={5} defaultValue={enquire ? `${t("Interested in:", "Domina:")} ${productTitle(enquire)} (SKU: ${enquire.id})
` : ""} placeholder={t("Message (product, machine model, questions)", "Žinutė (produktas, technikos modelis, klausimai)")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                        <button
                            type="submit"
                            disabled={sending}
                            className={`rounded-2xl px-4 py-2 font-medium transition ${sending
                                ? "bg-neutral-600 text-neutral-300 cursor-not-allowed"
                                : "bg-yellow-500 text-black hover:bg-yellow-400"
                                }`}
                        >
                            {sending ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        />
                                    </svg>
                                    {lang === "lt" ? "Siunčiama..." : "Sending..."}
                                </span>
                            ) : (
                                t("Send inquiry", "Siųsti užklausą")
                            )}
                        </button>

                    </form>
                </div>
            </section>

            <footer className="border-t border-neutral-800 py-8 mt-16 text-center text-neutral-500 text-sm">
                <div className="flex justify-center gap-6 mb-4">
                    {lang === "en" ? (
                        <>
                            <a className="hover:text-yellow-400" href="/privacy-policy">
                                Privacy Policy
                            </a>
                            <a className="hover:text-yellow-400" href="/terms-and-conditions">
                                Terms &amp; Conditions
                            </a>
                        </>
                    ) : (
                        <>
                            <a className="hover:text-yellow-400" href="/privacy-policy-lt">
                                Privatumo politika
                            </a>
                            <a className="hover:text-yellow-400" href="/terms-and-conditions-lt">
                                Taisyklės ir sąlygos
                            </a>
                        </>
                    )}
                </div>

                <p className="text-neutral-600">
                    © {new Date().getFullYear()} Forestas Baltic — All rights reserved.
                </p>
            </footer>

            {/* Inquiry modal (quick message) */}
            {enquire && (
                <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4" onClick={() => setEnquire(null)}>
                    <div className="w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 p-5" onClick={(e) => e.stopPropagation()}>

                        <h3 className="text-xl font-bold">{t("Send inquiry", "Siųsti užklausą")}</h3>
                        <p className="text-sm text-neutral-300 mt-1">{t("Product:", "Produktas:")} {enquire.title} (SKU: {enquire.id})</p>
                        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
                            {sent && (
                                <div className="mb-4 bg-green-500/10 border border-green-500/30 text-green-400 text-center py-3 px-4 rounded-xl text-sm font-medium">
                                    ✅ {t(
                                        "Inquiry sent successfully. We will contact you shortly.",
                                        "Užklausa sėkmingai išsiųsta. Susisieksime netrukus."
                                    )}
                                </div>
                            )}

                            <input name="name" required placeholder={t("Your name", "Jūsų vardas")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <input name="email" required type="email" placeholder="Email" className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <textarea name="message" rows={5} defaultValue={`${t("Interested in:", "Domina:")} ${productTitle(enquire)} (SKU: ${enquire.id})
`} placeholder={t("Message", "Žinutė")} className="rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm" />
                            <div className="flex items-center justify-end gap-2">
                                <button type="button" onClick={() => setEnquire(null)} className="rounded-2xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900">{t("Cancel", "Atšaukti")}</button>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className={`rounded-2xl px-4 py-2 font-medium transition ${sending
                                        ? "bg-neutral-600 text-neutral-300 cursor-not-allowed"
                                        : "bg-yellow-500 text-black hover:bg-yellow-400"
                                        }`}
                                >
                                    {sending ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                />
                                            </svg>
                                            {lang === "lt" ? "Siunčiama..." : "Sending..."}
                                        </span>
                                    ) : (
                                        t("Send inquiry", "Siųsti užklausą")
                                    )}
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    );
}
