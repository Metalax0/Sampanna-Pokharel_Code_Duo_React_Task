import "./style.css";
import { useEffect, useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { SpellCard } from "../../molecules/spell-card";
import { apiRoutes } from "../../../api/apiRoutes";
import { Pagination, Spin } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";
import { isIndexFavorite } from "../../../utils/isIndexFavorite";

export enum SpellCardCollectionEnum {
    all = "all",
    favorites = "favorites",
}

export interface SpellCardCollectionPropsType {
    type: SpellCardCollectionEnum;
}

export const SpellCardCollection = ({ type }: SpellCardCollectionPropsType) => {
    const spellsAPI = useAPI();
    const [pageData, setPageData] = useState({
        page: 0,
        itemsPerPage: 10,
    });
    const favoriteStoreArr = useSelector(
        (state: RootState) => state.favorite.arr
    );

    useEffect(() => {
        spellsAPI.API("GET", apiRoutes.fetchAllSpells);
    }, []);

    const handlePageChange = (page: number) => {
        setPageData({
            page: page - 1,
            itemsPerPage: pageData.itemsPerPage,
        });
    };

    const controlledSpellsRender = () => {
        const cardArr = [];
        for (
            let i = pageData.page * pageData.itemsPerPage;
            i < pageData.page * pageData.itemsPerPage + 10 &&
            i < spellsAPI.data.count;
            i++
        ) {
            const { url, index } = spellsAPI.data.results[i];
            cardArr.push(<SpellCard key={url + i} url={url} index={index} />);
        }
        return cardArr;
    };

    const renderFavoriteSpells = () => {
        const selectedIndex: any[] = [];

        spellsAPI.data.results.map((data: { index: string }, i: unknown) => {
            if (isIndexFavorite(favoriteStoreArr, data.index))
                selectedIndex.push(i);
        });

        const newArr = selectedIndex.map((i) => (
            <SpellCard
                key={spellsAPI.data.results[i].url + i}
                url={spellsAPI.data.results[i].url}
                index={spellsAPI.data.results[i].index}
            />
        ));

        return newArr;
    };

    return (
        <div className="spell-card-collection">
            <div>
                {spellsAPI.isLoading && <Spin size="large" />}
                {type === SpellCardCollectionEnum.all ? (
                    <h1> All Spells </h1>
                ) : (
                    <h1> Favorite Spells </h1>
                )}
                <small> Click on card to add / remove from favorites </small>
            </div>
            {type === SpellCardCollectionEnum.all ? (
                <div className="spells-card-list">
                    {spellsAPI.data.results &&
                        controlledSpellsRender().map((card) => (
                            <div key={card.key}>{card}</div>
                        ))}
                </div>
            ) : (
                <div className="spells-card-list">
                    {spellsAPI.data.results &&
                        renderFavoriteSpells().map((card) => (
                            <div key={card.key}>{card}</div>
                        ))}
                </div>
            )}

            {type === SpellCardCollectionEnum.all && (
                <Pagination
                    defaultCurrent={pageData.page + 1}
                    total={spellsAPI.data.count}
                    pageSize={pageData.itemsPerPage}
                    responsive={true}
                    showSizeChanger={false}
                    onChange={handlePageChange}
                />
            )}
        </div>
    );
};
