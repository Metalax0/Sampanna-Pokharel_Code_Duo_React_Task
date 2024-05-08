import "./style.css";
import { useEffect, useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { SpellCard } from "../../molecules/spell-card";
import { apiRoutes } from "../../../api/apiRoutes";
import { Pagination, Spin } from "antd";

export const SpellCardCollection = () => {
    const spellsAPI = useAPI();
    const [pageData, setPageData] = useState({
        page: 0,
        itemsPerPage: 10,
    });

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
            const { name, url } = spellsAPI.data.results[i];
            cardArr.push(<SpellCard key={url + i} name={name} url={url} />);
        }
        return cardArr;
    };

    return (
        <div className="spell-card-collection">
            {spellsAPI.isLoading && <Spin size="large" />}
            <div className="spells-card-list">
                {spellsAPI.data.results &&
                    controlledSpellsRender().map((card) => (
                        <div key={card.key}>{card}</div>
                    ))}
            </div>
            <Pagination
                defaultCurrent={pageData.page + 1}
                total={spellsAPI.data.count}
                pageSize={pageData.itemsPerPage}
                responsive={true}
                // showSizeChanger={false}
                onChange={handlePageChange}
            />
        </div>
    );
};
