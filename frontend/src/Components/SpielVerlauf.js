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
        <div className="bg-white relative py-4 flex justify-between rounded-st px-8">
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
            <div className="flex items-end gap-3 pl-2">
                <p className="text-gray-500">Datum</p>
                <h6 className="font-bold text-xl">{date}</h6>
            </div>
            <div className="flex justify-between w-1/2">
                <div className="flex items-end gap-3">
                    {" "}
                    <h6
                        className="font-bold text-xl"
                        style={{ transform: "translateX(-50%)" }}
                    >
                        <span className="text-secondary">{team1}</span>:
                        <span className="text-primary">{team2}</span>
                    </h6>
                </div>
                <div className="flex items-end gap-3">
                    <p className="text-gray-500">Stiche</p>
                    <h6 className="font-bold text-xl">{stiche}</h6>
                </div>
                <div className="flex items-end gap-3">
                    <p className="text-gray-500">Punkte gewonnen</p>
                    <h6 className="font-bold text-xl">{punkte}</h6>
                </div>
            </div>
        </div>
    );
};

export default SpielVerlauf;
