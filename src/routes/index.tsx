import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landing";
import { SpellPage } from "../pages/spell";
import { ErrorPage } from "../pages/error";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/spell/:spellid" element={<SpellPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </BrowserRouter>
);
