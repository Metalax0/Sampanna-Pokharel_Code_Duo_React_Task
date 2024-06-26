import "./style.css";
import {
    SpellCardCollection,
    SpellCardCollectionEnum,
} from "../../components/organisms/spell-card-collection";

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <SpellCardCollection type={SpellCardCollectionEnum.all} />
        </div>
    );
};
