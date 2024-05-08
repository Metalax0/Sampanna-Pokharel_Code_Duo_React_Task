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
import { setFavoriteBulk } from "../../state-management/slices/favoriteSlice";

export const AppRoutes = () => {
    const dispatch = useDispatch<AppDispatch>();

    // Initial Operations (loading persisted data)
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        const favoriteArr = JSON.parse(
            localStorage.getItem("favorite") as string
        );
        if (theme) changeTheme(theme as ThemeEnum, dispatch);
        if (favoriteArr) dispatch(setFavoriteBulk(favoriteArr));
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
