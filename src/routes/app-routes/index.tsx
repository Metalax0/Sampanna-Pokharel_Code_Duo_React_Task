import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../../pages/landing";
import { SpellPage } from "../../pages/spell";
import { ErrorPage } from "../../pages/error";
import { Layout } from "../layout";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />}></Route>
                <Route path="/spell/:index" element={<SpellPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
