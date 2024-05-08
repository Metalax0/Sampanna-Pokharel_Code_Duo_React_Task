import { useParams } from "react-router-dom";
import "./style.css";

export const SpellPage = () => {
    const { spellid } = useParams();
    return <div>SpellPage {spellid}</div>;
};
