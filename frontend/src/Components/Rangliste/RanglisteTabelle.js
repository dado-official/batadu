import React from "react";
import RanglisteTabelleData from "./RanglisteTabelleData";

const RanglisteTabelle = ({ data, filter }) => {
    return (
        <table className="rangliste mt-2 border-separate mb-16">
            <thead>
                <tr className="dark:text-white">
                    <th>Platz</th>
                    <th>Benutzer</th>
                    <th>Winrate %</th>
                    <th>Gewonnene Spiele</th>
                    <th>Punkte</th>
                </tr>
            </thead>
            <tbody>
                {data
                    .sort((a, b) => {
                        if (filter === "Gewonnene Spiele")
                            return b.wongames - a.wongames;
                        else if (filter === "Winrate")
                            return b.winrate - a.winrate;
                        else if (filter === "Punkte")
                            return b.points - a.points;
                    })
                    .map((element, index) => {
                        return (
                            <RanglisteTabelleData
                                pos={index + 1}
                                username={element.username}
                                points={element.points}
                                winrate={element.winrate}
                                games={element.wongames}
                                key={Math.random() * 10000}
                            />
                        );
                    })}
            </tbody>
        </table>
    );
};

export default RanglisteTabelle;
