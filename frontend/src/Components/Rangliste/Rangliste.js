import React, { useState, useEffect } from "react";
import Trophy from "../../assets/emoji_events-24px.svg";
import SelectElement from "../Shared/SelectElement";
import RanglisteTabelle from "./RanglisteTabelle";
import axios from "axios";

const Rangliste = ({ setUrl, isDarkmode }) => {
    const [filter, setFilter] = useState("Punkte");
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setUrl("/rangliste");
    }, []);

    useEffect(() => {
        axios.get("http://82.165.104.152:42069/rankings").then((res) => {
            setData(res.data);
            setLoaded(true);
        });
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
                {loaded ? (
                    <RanglisteTabelle data={data} filter={filter} />
                ) : (
                    <div
                        className="lds-ellipsis w-full flex justify-center mt-16 left-1/2"
                        style={{ transform: "translateX(-50%)" }}
                    >
                        <div className="bg-primary dark:bg-primaryDark"></div>
                        <div className="bg-primary dark:bg-primaryDark"></div>
                        <div className="bg-primary dark:bg-primaryDark"></div>
                        <div className="bg-primary dark:bg-primaryDark"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rangliste;
