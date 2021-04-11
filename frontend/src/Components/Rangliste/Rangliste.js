import React, { useState, useEffect } from "react";
import Trophy from "../../assets/emoji_events-24px.svg";
import SelectElement from "../Shared/SelectElement";
import RanglisteTabelle from "./RanglisteTabelle";

const Rangliste = ({ setUrl, isDarkmode }) => {
    const [filter, setFilter] = useState("Gewonnene Spiele");

    useEffect(() => {
        setUrl("/rangliste");
    }, []);
    return (
        <div className="flex w-1450 max-w-1/9 mx-auto pt-12 flex-col justify-center items-center">
            <img
                src={Trophy}
                alt="Trophäe"
                className={`w-16 mb-2 ${isDarkmode ? "whiteSVG" : null}`}
            />
            <h3 className="font-bold text-4xl dark:text-white">
                Die besten Spieler
            </h3>
            <div className="mt-4 border-t-2 border-gray-300 dark:border-gray-600 w-full md:w-40">
                <div className="mt-6 flex justify-between gap-4 md:gap-8">
                    <SelectElement
                        value="Gewonnene Spiele"
                        selectValue={filter}
                        setSelectValue={setFilter}
                    />
                    <SelectElement
                        value="Winrate"
                        selectValue={filter}
                        setSelectValue={setFilter}
                    />
                    <SelectElement
                        value="Punkte"
                        selectValue={filter}
                        setSelectValue={setFilter}
                    />
                </div>
                <RanglisteTabelle />
            </div>
        </div>
    );
};

export default Rangliste;
