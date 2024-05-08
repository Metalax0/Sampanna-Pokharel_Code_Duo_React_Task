import "./style.css";
import { SpellCardProps } from "../../../types/spellCardPropsType";
import { useEffect } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { Spin } from "antd";

export const SpellCard = ({ name, url }: SpellCardProps) => {
    const spellsAPI = useAPI();

    useEffect(() => {
        spellsAPI.API("GET", url);
    }, []);

    return (
        <div className="spell-card">
            <h2 className="spell-name">{name}</h2>
            {spellsAPI.isLoading && <Spin />}
            {spellsAPI.data.name && (
                <>
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
                                            <span key={name + i}>{item}</span>
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
