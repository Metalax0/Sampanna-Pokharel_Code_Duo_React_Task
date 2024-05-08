import { getImage } from "../../../util/getImage";
import "./style.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={getImage("logo-light")} alt="logo for lightmode" />
            <h1>Navbar</h1>
        </div>
    );
};
