import "./style.css";
import {
    SpellCardCollection,
    SpellCardCollectionEnum,
} from "../../components/organisms/spell-card-collection";

export const FavoritesPage = () => {
    return (
        <div className="favorites-page">
            <SpellCardCollection type={SpellCardCollectionEnum.favorites} />
        </div>
    );
};
