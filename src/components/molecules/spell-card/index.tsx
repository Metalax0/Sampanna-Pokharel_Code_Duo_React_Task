import "./style.css";
import { SpellCardProps } from "../../../types/spellCardPropsType";
import { useEffect } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../../state-management/slices/favoriteSlice";
import { AppDispatch, RootState } from "../../../state-management/store";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

export const SpellCard = ({ url, index }: SpellCardProps) => {
    const spellsAPI = useAPI();
    const dispatch = useDispatch<AppDispatch>();
    const favoriteStoreArr = useSelector(
        (state: RootState) => state.favorite.arr
    );

    useEffect(() => {
        spellsAPI.API("GET", url);
    }, []);

    const handleToggleFavorites = () => {
        dispatch(setFavorite(index));
    };

    const isIndexFavorite = (ind: string) => {
        return favoriteStoreArr.includes(ind);
    };

    return (
        <div className="spell-card" onClick={handleToggleFavorites}>
            {spellsAPI.isLoading && <Spin />}
            {spellsAPI.data.name && (
                <>
                    <h2 className="spell-name">
                        {spellsAPI.data.name}{" "}
                        {isIndexFavorite(index) ? (
                            <HeartFilled />
                        ) : (
                            <HeartOutlined />
                        )}
                    </h2>
                    <div className="spell-details-row">
                        <div className="spell-details-col">
                            <p className="spell-stat">
                                <span>
                                    <b>Casting Time</b>
                                </span>
                                <span>{spellsAPI.data.casting_time}</span>
                            </p>
                            <p className="spell-stat">
                                <span>
                                    <b> Concentration </b>
                                </span>
                                <span>
                                    {spellsAPI.data.concentration
                                        ? "Yes"
                                        : "No"}
                                </span>
                            </p>
                        </div>
                        <div className="spell-details-col">
                            <p className="spell-stat">
                                <span>
                                    <b>Duration</b>
                                </span>
                                <span>{spellsAPI.data.duration}</span>
                            </p>
                            <p className="spell-stat">
                                <span>
                                    <b> Range </b>
                                </span>
                                <span>
                                    {spellsAPI.data.range ? "Yes" : "No"}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="spell-details-row">
                        <div className="spell-details-col">
                            <div className="spell-stat">
                                <span>
                                    <b>Components</b>
                                </span>
                                <div className="spell-stat-sub">
                                    {spellsAPI.data.components.map(
                                        (item: string, i: number) => (
                                            <span key={spellsAPI.data.name + i}>
                                                {item}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="spell-details-col">
                            <p className="spell-stat">
                                <span>
                                    <b>Level</b>
                                </span>
                                <span>{spellsAPI.data.level}</span>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
