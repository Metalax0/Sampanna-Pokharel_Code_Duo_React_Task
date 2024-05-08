import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../../pages/landing";
import { ErrorPage } from "../../pages/error";
import { Layout } from "../layout";
import { FavoritesPage } from "../../pages/favorites";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state-management/store";
import { changeTheme } from "../../utils/themeToggle";
import { ThemeEnum } from "../../types/uiSliceType";

export const AppRoutes = () => {
    const dispatch = useDispatch<AppDispatch>();

    // Initial Operations (making data persist)
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        changeTheme(theme as ThemeEnum, dispatch);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />}></Route>
                    <Route
                        path="/favorites"
                        element={<FavoritesPage />}
                    ></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
