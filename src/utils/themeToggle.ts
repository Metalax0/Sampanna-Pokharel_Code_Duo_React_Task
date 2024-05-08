import { setTheme } from "../state-management/slices/uiSlice";
import { ThemeEnum } from "../types/uiSliceType";

export const toggleTheme = (dispatch: any) => {
    const currentTheme = document.querySelector("html")!.getAttribute("theme");
    changeTheme(
        currentTheme === ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark,
        dispatch
    );
};

export const changeTheme = (newTheme: ThemeEnum, dispatch: any) => {
    document.querySelector("html")!.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
    dispatch(setTheme(newTheme));
};

export const isDarkTheme = () => {
    return localStorage.getItem("theme") === "dark" ? true : false;
};
