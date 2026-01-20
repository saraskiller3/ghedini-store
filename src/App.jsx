import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Landing from "./pages/Landing";
import Ghedini from "./pages/Ghedini";
import Parts from "./pages/Parts";
import PartPage from "./pages/PartPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyLT from "./pages/PrivacyPolicyLT";
import TermsConditions from "./pages/TermsConditions";
import TermsConditionsLT from "./pages/TermsConditionsLT";


export default function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const [lang, setLang] = useState(() => localStorage.getItem("lang") || "lt");

    useEffect(() => {
        const path = location.pathname;

        // ---- Legal pages force language ----
        if (path === "/privacy-policy") return setLang("en");
        if (path === "/privacy-policy-lt") return setLang("lt");

        if (path === "/terms-and-conditions") return setLang("en");
        if (path === "/terms-and-conditions-lt") return setLang("lt");

        // ---- Ghedini SEO slugs force language ----
        if (path.startsWith("/ghedini/")) {
            const sub = path.replace("/ghedini/", "");
            const slug = sub.split("/")[0]; // "earth-augers" or "zemes-graztai" or "p"

            const EN_SLUGS = new Set([
                "mulchers",
                "earth-augers",
                "log-grabs",
                "submersible-pumps",
                "vibroplates",
                "ripper",
                "hedge-cutter",
                "mowing-bucket",
                "pile-driver",
            ]);

            const LT_SLUGS = new Set([
                "mulceriai",
                "zemes-graztai",
                "medziu-griebtuvai",
                "panardinami-siurbliai",
                "vibroplokstes",
                "riperis",
                "gyvatvoriu-kirpimo-irenginys",
                "sienavimo-kausas",
                "poliu-kaltuvas",
            ]);

            // product pages: /ghedini/p/DA -> do NOT force language
            if (slug === "p") return;

            if (EN_SLUGS.has(slug)) return setLang("en");
            if (LT_SLUGS.has(slug)) return setLang("lt");

            return; // do not override for unknown
        }

        // ---- Other pages: do not override user choice ----
    }, [location.pathname]);

    // Persist language
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const GHEDINI_SEO_PAIRS = [
        { en: "mulchers", lt: "mulceriai" },
        { en: "earth-augers", lt: "zemes-graztai" },
        { en: "log-grabs", lt: "medziu-griebtuvai" },
        { en: "submersible-pumps", lt: "panardinami-siurbliai" },
        { en: "vibroplates", lt: "vibroplokstes" },
        { en: "ripper", lt: "riperis" },
        { en: "hedge-cutter", lt: "gyvatvoriu-kirpimo-irenginys" },
        { en: "mowing-bucket", lt: "sienavimo-kausas" },
        { en: "pile-driver", lt: "poliu-kaltuvas" },
    ];

    const EN_TO_LT = Object.fromEntries(GHEDINI_SEO_PAIRS.map(p => [p.en, p.lt]));
    const LT_TO_EN = Object.fromEntries(GHEDINI_SEO_PAIRS.map(p => [p.lt, p.en]));

    const handleLangChange = (nextLang) => {
        const path = location.pathname;

        // Legal pages must switch route
        if (path === "/privacy-policy" || path === "/privacy-policy-lt") {
            navigate(nextLang === "lt" ? "/privacy-policy-lt" : "/privacy-policy");
            setLang(nextLang);
            return;
        }

        if (path === "/terms-and-conditions" || path === "/terms-and-conditions-lt") {
            navigate(nextLang === "lt" ? "/terms-and-conditions-lt" : "/terms-and-conditions");
            setLang(nextLang);
            return;
        }

        // Ghedini SEO pages: switch slug under /ghedini/
        if (path.startsWith("/ghedini/")) {
            // keep product pages like /ghedini/p/DA unchanged
            if (path.startsWith("/ghedini/p/")) {
                setLang(nextLang);
                return;
            }

            const pairs = {
                "mulchers": "mulceriai",
                "earth-augers": "zemes-graztai",
                "log-grabs": "medziu-griebtuvai",
                "submersible-pumps": "panardinami-siurbliai",
                "vibroplates": "vibroplokstes",
                "ripper": "riperis",
                "hedge-cutter": "gyvatvoriu-kirpimo-irenginys",
                "mowing-bucket": "sienavimo-kausas",
                "pile-driver": "poliu-kaltuvas",
            };

            const rest = path.replace("/ghedini/", ""); // e.g. "earth-augers"
            const slug = rest.split("/")[0];

            // If on EN slug and switching to LT -> go to LT slug
            if (nextLang === "lt" && pairs[slug]) {
                navigate(`/ghedini/${pairs[slug]}`);
                setLang("lt");
                return;
            }

            // If on LT slug and switching to EN -> reverse lookup
            const reverse = Object.fromEntries(Object.entries(pairs).map(([en, lt]) => [lt, en]));
            if (nextLang === "en" && reverse[slug]) {
                navigate(`/ghedini/${reverse[slug]}`);
                setLang("en");
                return;
            }

            // Otherwise just change language state
            setLang(nextLang);
            return;
        }

        // All other pages
        setLang(nextLang);
    };

    return (
        <Routes>
            <Route path="/" element={<Landing lang={lang} handleLangChange={handleLangChange} />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy lang={lang} handleLangChange={handleLangChange} />} />
            <Route path="/privacy-policy-lt" element={<PrivacyPolicyLT lang={lang} handleLangChange={handleLangChange} />} />

            <Route path="/terms-and-conditions" element={<TermsConditions lang={lang} handleLangChange={handleLangChange} />} />
            <Route path="/terms-and-conditions-lt" element={<TermsConditionsLT lang={lang} handleLangChange={handleLangChange} />} />

            <Route path="/parts" element={<Parts lang={lang} handleLangChange={handleLangChange} />} />
            <Route path="/dalys" element={<Parts lang={lang} handleLangChange={handleLangChange} />} />
            <Route path="/parts/:id" element={<PartPage lang={lang} handleLangChange={handleLangChange} />} />
            <Route path="/dalys/:id" element={<PartPage lang={lang} handleLangChange={handleLangChange} />} />"

            <Route path="/ghedini/*" element={<Ghedini lang={lang} handleLangChange={handleLangChange} />} />

            
        </Routes>
    )
}