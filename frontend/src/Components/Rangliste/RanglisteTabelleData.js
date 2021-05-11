import React from "react";
import Gold from "../../assets/gold.svg";
import Silver from "../../assets/silver.svg";
import Bronze from "../../assets/bronze.svg";
import { useHistory } from "react-router-dom";

const RanglisteTabelleData = ({ pos, username, points, winrate, games }) => {
    const history = useHistory();
    return (
        <tr
            className="mb-8 cursor-pointer"
            onClick={() => {
                history.push(`/profile/${username}`);
            }}
        >
            <td
                className="rounded-t-st md:rounded-t-none md:rounded-l-st dark:bg-whiteDark dark:text-white"
                data-label="Platz"
            >
                {pos === 1 ? (
                    <img
                        src={Gold}
                        alt="Goldmedallie"
                        className="my-auto ml-auto md:mx-auto"
                    />
                ) : pos === 2 ? (
                    <img
                        src={Silver}
                        alt="Silveredallie"
                        className="my-auto ml-auto md:mx-auto"
                    />
                ) : pos === 3 ? (
                    <img
                        src={Bronze}
                        alt="Bronzedallie"
                        className="my-auto ml-auto md:mx-auto"
                    />
                ) : (
                    <p>{pos}.</p>
                )}
            </td>
            <td data-label="Benutzer">{username}</td>
            <td data-label="Winrate %">{winrate}</td>
            <td data-label="Gewonnene Spiele">{games}</td>
            <td
                className="rounded-b-st md:rounded-b-none md:rounded-r-st"
                data-label="Punkte"
            >
                {points}
            </td>
        </tr>
    );
};

export default RanglisteTabelleData;
