import React from "react";

const RanglisteTabelleData = ({ pos, username, points, winrate, games }) => {
    return (
        <tr className="mb-8">
            <td className="rounded-l-st">{pos}</td>
            <td>{username}</td>
            <td>{points}</td>
            <td>{winrate}</td>
            <td className=" rounded-r-st">{games}</td>
        </tr>
    );
};

export default RanglisteTabelleData;
