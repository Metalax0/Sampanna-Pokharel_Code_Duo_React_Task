import "./style.css";
import { SpellCardProps } from "../../../types/spellCardPropsType";

export const SpellCard = ({ name, url }: SpellCardProps) => {
    return (
        <div className="spell-card">
            <p className="spell-name">{name}</p>
            {/* <p className="spell-url">{url}</p> */}
        </div>
    );
};
