import "./style.css";
import { useSelector } from "react-redux";
import { getImage } from "../../../utils/getImage";
import { ThemeToggleBttn } from "../../atom/theme-toggle-button";
import { RootState } from "../../../state-management/store";
import { ThemeEnum } from "../../../types/uiSliceType";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const theme = useSelector((state: RootState) => state.ui.theme);
    const navigate = useNavigate();

    const handleGoToFavorites = () => {
        navigate("/favorites");
    };

    const handleGoToHome = () => {
        navigate("/");
    };

    return (
        <div className="navbar">
            <img
                className="nav-logo"
                src={getImage(
                    theme === ThemeEnum.light ? "logo-light" : "logo-dark"
                )}
                alt="logo for lightmode"
                onClick={handleGoToHome}
            />
            <div className="nav-right">
                <img
                    className="nav-favorites"
                    src={getImage("favorites")}
                    alt="favorites icon"
                    onClick={handleGoToFavorites}
                />
                <ThemeToggleBttn />
            </div>
        </div>
    );
};
