import React from "react";
import Gold from "../../assets/gold.svg";
import Silver from "../../assets/silver.svg";
import Bronze from "../../assets/bronze.svg";

const RanglisteTabelleData = ({ pos, username, points, winrate, games }) => {
    return (
        <tr className="mb-8">
            <td className="rounded-l-st">
                {pos === 1 ? (
                    <img src={Gold} alt="Goldmedallie" className="m-auto" />
                ) : pos === 2 ? (
                    <img src={Silver} alt="Silveredallie" className="m-auto" />
                ) : pos === 3 ? (
                    <img src={Bronze} alt="Bronzedallie" className="m-auto" />
                ) : (
                    <p>{pos}.</p>
                )}
            </td>
            <td>{username}</td>
            <td>{points}</td>
            <td>{winrate}</td>
            <td className=" rounded-r-st">{games}</td>
        </tr>
    );
};

export default RanglisteTabelleData;
