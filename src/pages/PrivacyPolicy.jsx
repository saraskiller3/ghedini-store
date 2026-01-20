import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy({ lang, handleLangChange }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-5xl px-4 py-10">

                {/* top row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                    <button
                        onClick={() => window.history.back()}
                        className="text-yellow-400 hover:text-yellow-300 transition text-sm"
                        type="button"
                    >
                        ← {lang === "lt" ? "Atgal" : "Back"}
                    </button>

                    {/* language quick switch */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => handleLangChange("en")}
                            className={`h-7 w-9 overflow-hidden rounded-sm border ${lang === "en" ? "border-yellow-400" : "border-neutral-600"}`}
                            aria-label="English"
                        >
                            <img src="/flags/en.svg" alt="English" className="h-full w-full object-cover" />
                        </button>

                        <button
                            type="button"
                            onClick={() => handleLangChange("lt")}
                            className={`h-7 w-9 overflow-hidden rounded-sm border ${lang === "lt" ? "border-yellow-400" : "border-neutral-600"}`}
                            aria-label="Lietuvių"
                        >
                            <img src="/flags/lt.svg" alt="Lietuvių" className="h-full w-full object-cover" />
                        </button>
                    </div>
                </div>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                This Privacy Policy explains how Forestas Baltic (“we”, “our”, “us”) collects,
                uses, and protects your personal data when you use our website and services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Data We Collect</h2>
            <p className="mb-4">
                We may collect your name, email, phone number, company details, and inquiry
                information when you contact us.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
            <p className="mb-4">
                Your data is used solely for responding to inquiries, preparing quotes, and
                providing customer support. We do not sell or share your personal data with
                third parties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
            <p className="mb-4">
                Our website may use cookies to improve user experience and analyze traffic.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
            <p className="mb-4">
                You may request access, correction, or deletion of your personal data at any
                time by contacting us at sales@forestasbaltic.lt.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
            <p className="mb-4">
                If you have questions about this Privacy Policy, contact us at:
                <br />📧 sales@forestasbaltic.lt
            </p>
            </div>
        </div>

    );
}
