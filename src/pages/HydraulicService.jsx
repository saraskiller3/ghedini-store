import { Helmet } from "react-helmet-async";
import BackToLanding from "./BackToLanding";
import SiteFooter from "../components/SiteFooter";
import { useEffect } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";

export default function HydraulicService({ lang, handleLangChange }) {
    const t = (en, lt) => (lang === "lt" ? lt : en);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname.startsWith("/hidraulikos-servisas")) {
            localStorage.setItem("lang", "lt");
        } else if (location.pathname.startsWith("/hydraulic-service")) {
            localStorage.setItem("lang", "en");
        }
    }, [location.pathname]);

    // ✅ Switch page + language
    const handleLocalLangChange = (nextLang) => {
        if (nextLang === "lt") {
            navigate("/hidraulikos-servisas");
        } else {
            navigate("/hydraulic-service");
        }
        handleLangChange(nextLang);
    };


    return (
        <div className="min-h-screen bg-black text-white">
            <Helmet>
                <title>{t("Hydraulic service | UAB Forestas", "Hidraulikos servisas | UAB Forestas")}</title>
                <meta
                    name="description"
                    content={t(
                        "Hydraulic diagnostics, repairs and parts for excavators and loaders in the Baltics.",
                        "Hidraulikos diagnostika, remontas ir dalys ekskavatoriams bei krautuvams Baltijos šalyse."
                    )}
                />
            </Helmet>
            <div className="mx-auto max-w-7xl px-4 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <a
                        href="https://maps.app.goo.gl/fgvekbrxxsW5sysP7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-yellow-400 transition">
                    <span>📍</span>
                        <span>{t("Alytus, Lithuania", "Alytus, Lietuva")}</span>
                    </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                <button
                    type="button"
                    onClick={() => handleLocalLangChange("lt")}
                    className={`font-semibold transition ${lang === "lt" ? "text-yellow-400" : "text-neutral-400 hover:text-white"
                        }`}
                >
                    LT
                </button>
                <span className="text-neutral-600">|</span>
                <button
                    type="button"
                    onClick={() => handleLocalLangChange("en")}
                    className={`font-semibold transition ${lang === "en" ? "text-yellow-400" : "text-neutral-400 hover:text-white"
                        }`}
                >
                    EN
                </button>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 pt-6">
                <BackToLanding lang={lang} />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                <h1 className="text-4xl font-bold">{t("Hydraulic service", "Hidraulikos servisas")}</h1>
                        <div className="mt-3 text-neutral-300 max-w-2xl space-y-2">
                <p>
                    {t(
                        "Mobile hydraulic service.",
                        "Mobilus hidraulikos servisas"
                                )}
                            </p>
                            <p>
                                {t(
                                    "We provide hydraulic diagnostics, repairs and parts for excavators, loaders, bulldozers and others. Our experienced technicians can service hydraulic pumps, motors, valves, cylinders, and hoses on-site or at our workshop.",
                                    "Teikiame hidraulikos gedimų diagnostiką, remontą ir dalis ekskavatoriams, krautuvams, buldozeriams ir kt. Mūsų patyrę mechanikai gali aptarnauti hidraulinius siurblius, variklius, vožtuvus, cilindrus ir žarnas Jūsų nurodytoje vietoje arba mūsų dirbtuvėse."
                                )}
                            </p>
                            <p>
                                {t(
        "We stock a wide range of hydraulic parts to ensure quick turnaround times. Contact us today for reliable hydraulic service in Lithuania.",
        "Turime platų hidraulinių dalių asortimentą, užtikrinant greitą aptarnavimą. Susisiekite su mumis šiandien dėl patikimo hidraulikos serviso Lietuvoje."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Please contact us for more information or to schedule a service appointment.", 
                                    "Dėl išsamesnės informacijos arba norėdami užsiregistruoti serviso paslaugai, susisiekite su mumis tel. nr. +37061682680."
                                )}
                            </p>
                        </div>
            </div>
                    <div className="relative flex items-center justify-center h-[520px] lg:h-[640px]">
                        <img
                            src="/photos/angaras.webp"
                            alt="Hydraulic service and repairs"
                            className="max-h-full max-w-full object-contain rounded-2xl"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
            <SiteFooter lang={lang} t={t} />
        </div>
    );
}