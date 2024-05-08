import "./style.css";
import { useSelector } from "react-redux";
import { getImage } from "../../../utils/getImage";
import { ThemeToggleBttn } from "../../atom/theme-toggle-button";
import { RootState } from "../../../state-management/store";
import { ThemeEnum } from "../../../types/uiSliceType";

export const Navbar = () => {
    const theme = useSelector((state: RootState) => state.ui.theme);

    return (
        <div className="navbar">
            <img
                className="nav-logo"
                src={getImage(
                    theme === ThemeEnum.light ? "logo-light" : "logo-dark"
                )}
                alt="logo for lightmode"
            />
            <ThemeToggleBttn />
        </div>
    );
};
