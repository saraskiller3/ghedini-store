import { Routes, Route } from "react-router-dom"
import App from "./App"
import Landing from "./pages/Landing"
import Parts from "./pages/Parts"


export default function MainRouter() {
    return (
        <Routes>
            {/* Title page */}
            <Route path="/" element={<Landing />} />
            <Route path="/parts" element={<Parts />} />
            
            {/* Ghedini app (UNCHANGED) */}
            <Route path="/ghedini/*" element={<App />} />

            
            
        </Routes>
    )
}