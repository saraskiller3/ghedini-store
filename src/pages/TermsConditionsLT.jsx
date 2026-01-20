import { useNavigate } from "react-router-dom";

export default function TermsConditionsLT({ lang, handleLangChange }) {
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
            <h1 className="text-3xl font-bold mb-6">Taisyklės ir sąlygos</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">Bendros nuostatos</h2>
            <p className="mb-4">
                Šios taisyklės taikomos visiems Forestas Baltic svetainės lankytojams
                ir klientams. Naudodamiesi svetaine, jūs sutinkate su šiomis sąlygomis.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Produktų informacija</h2>
            <p className="mb-4">
                Visa svetainėje pateikiama informacija apie produktus – aprašymai,
                specifikacijos, nuotraukos – yra informacinio pobūdžio ir gali būti
                keičiama be atskiro įspėjimo.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Užklausos ir užsakymai</h2>
            <p className="mb-4">
                Užklausos išsiuntimas nesukuria pirkimo-pardavimo sutarties.
                Užsakymas laikomas patvirtintu tik tada, kai Forestas Baltic pateikia
                oficialų rašytinį patvirtinimą.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Atsakomybės apribojimas</h2>
            <p className="mb-4">
                Forestas Baltic neatsako už žalą, patirtą dėl netinkamo įrangos naudojimo,
                neteisingo montavimo ar klaidingai pateiktos informacijos.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Kontaktai</h2>
            <p className="mb-4">
                Klausimams dėl taisyklių ir sąlygų prašome susisiekti:
                <br />📧 sales@forestasbaltic.lt
            </p>
            </div>
        </div>
    );
}
