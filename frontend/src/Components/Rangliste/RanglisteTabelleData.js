import React from "react";
import Gold from "../../assets/gold.svg";
import Silver from "../../assets/silver.svg";
import Bronze from "../../assets/bronze.svg";

const RanglisteTabelleData = ({ pos, username, points, winrate, games }) => {
    return (
        <tr className="mb-8">
            <td className="rounded-t-st md:rounded-t-none md:rounded-l-st" data-label="Platz">
                {pos === 1 ? (
                    <img src={Gold} alt="Goldmedallie" className="my-auto ml-auto md:mx-auto" />
                ) : pos === 2 ? (
                    <img src={Silver} alt="Silveredallie" className="my-auto ml-auto md:mx-auto" />
                ) : pos === 3 ? (
                    <img src={Bronze} alt="Bronzedallie" className="my-auto ml-auto md:mx-auto" />
                ) : (
                    <p>{pos}.</p>
                )}
            </td>
            <td data-label="Benutzer">{username}</td>
            <td data-label="Winrate %">{points}</td>
            <td data-label="Gewonnene Spiele">{winrate}</td>
            <td className="rounded-b-st md:rounded-b-none md:rounded-r-st" data-label="Punkte">{games}</td>
        </tr>
    );
};

export default RanglisteTabelleData;
