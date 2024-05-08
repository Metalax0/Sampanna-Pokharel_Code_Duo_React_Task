import { useEffect } from "react";
import "./style.css";
import { useAPI } from "../../hooks/useAPI";
import { apiRoutes } from "../../api/apiRoutes";

export const LandingPage = () => {
    const spellsAPI = useAPI();

    useEffect(() => {
        spellsAPI.API("GET", apiRoutes.fetchAllSpells);
    }, []);

    return (
        <div>
            <h1>LandingPage</h1>
        </div>
    );
};
