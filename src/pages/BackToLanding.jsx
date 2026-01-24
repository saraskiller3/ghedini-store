import { Link } from "react-router-dom";

export default function BackToLanding({ lang = "en" }) {
    const homePath = "/"; 
    return (
        <Link
            to={homePath}
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-yellow-400 transition"
        >
            <span className="text-base leading-none">←</span>
            <span>{lang === "lt" ? "Grįžti į pradžią" : "Back to homepage"}</span>
        </Link>
    );
}