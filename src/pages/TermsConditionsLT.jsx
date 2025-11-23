import { useNavigate } from "react-router-dom";

export default function TermsConditionsLT() {
    const navigate = useNavigate();

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 text-neutral-200">
            <button
                onClick={() => navigate("/")}
                className="mb-6 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
            >
                ← Grižti į pradinį puslapį
            </button>
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
    );
}
