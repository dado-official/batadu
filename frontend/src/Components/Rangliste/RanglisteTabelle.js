import React from "react";
import RanglisteTabelleData from "./RanglisteTabelleData";

const RanglisteTabelle = () => {
    return (
        <table className="rangliste mt-8 border-separate">
            <thead>
                <tr>
                    <th>Platz</th>
                    <th>Benutzer</th>
                    <th>Punkte</th>
                    <th>Winrate %</th>
                    <th>Spiele</th>
                </tr>
            </thead>
            <tbody>
                <RanglisteTabelleData
                    pos={2}
                    username="Hirte99"
                    points="299"
                    winrate="47.9"
                    games="19"
                />
                <RanglisteTabelleData
                    pos={2}
                    username="Hirte99"
                    points="299"
                    winrate="47.9"
                    games="19"
                />
            </tbody>
        </table>
    );
};

export default RanglisteTabelle;
