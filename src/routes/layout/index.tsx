import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/organisms/navbar";
import "./style.css";

export const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
        </div>
    );
};
