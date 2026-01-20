import { useNavigate } from "react-router-dom";

export default function TermsCondition({ lang, handleLangChange }) {
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
            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">General Information</h2>
            <p className="mb-4">
                These Terms & Conditions apply to all visitors and customers of the
                Forestas Baltic website and services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Products and Information</h2>
            <p className="mb-4">
                All product information, specifications, and prices presented on our website
                are provided for general guidance and may change without notice.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Quotes & Orders</h2>
            <p className="mb-4">
                Sending an inquiry does not create a formal order. Orders become valid only
                after written confirmation from Forestas Baltic.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
            <p className="mb-4">
                Forestas Baltic is not responsible for damage caused by misuse, incorrect
                installation, or improper operation of purchased equipment.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
            <p className="mb-4">
                For any questions regarding these Terms & Conditions, contact us at:
                <br />📧 sales@forestasbaltic.lt
            </p>
            </div>
        </div>
    );
}
