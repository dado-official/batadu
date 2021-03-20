import React, { useState, useEffect } from "react";

const SpielVerlauf = ({
    date,
    team1,
    team2,
    stiche,
    punkte,
    percentage,
    win,
}) => {
    return (
        <div className="bg-white relative py-4 rounded-st px-8 grid grid-flow-row gap-y-8 grid-cols-1 sm:grid-cols-5">
            <div
                className={`absolute h-full w-2 rounded-l-st left-0 top-0 ${
                    win ? "bg-secondary" : "bg-primary"
                }`}
            ></div>
            <div
                className={`absolute h-full left-2 top-0 rounded-r-st ${
                    win ? "bg-secondary" : "bg-primary"
                }`}
                style={{ width: `${percentage}%`, opacity: "5%" }}
            ></div>
            <div className="flex items-end gap-3 pl-2 m-auto">
                <p className="text-gray-500">Datum</p>
                <h6 className="font-bold text-xl">{date}</h6>
            </div>
            <div className="hidden sm:block">

            </div>
            <div className="flex items-end gap-3 m-auto">
                {" "}
                <h6
                    className="font-bold text-xl"
                >
                    <span className="text-secondary">{team1}</span>:
                    <span className="text-primary">{team2}</span>
                </h6>
            </div>
            <div className="flex items-end gap-3 m-auto">
                <p className="text-gray-500">Stiche</p>
                <h6 className="font-bold text-xl">{stiche}</h6>
            </div>
            <div className="flex items-end gap-3 mx-auto">
                <p className="text-gray-500 text-right">Punkte gewonnen</p>
                <h6 className="font-bold text-xl m-auto">{punkte}</h6>
            </div>
        </div>
    );
};

export default SpielVerlauf;
