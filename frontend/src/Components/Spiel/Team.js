import React from "react";

const Team = ({ spieler1, spieler2, punkte, team, selected, setSelected }) => {
    function selectHandler() {
        setSelected(team);
    }

    return (
        <div
            className={`flex w-full items-center bg-white rounded-st mb-6 cursor-pointer justify-between ${
                selected === team ? "ring-4 ring-primary" : "null"
            }`}
            onClick={selectHandler}
        >
            <p
                className={`font-bold px-2 w-12ch text-center ${
                    spieler1 === "" ? "text-secondary underline" : null
                }`}
            >
                {spieler1 === "" ? "offen" : spieler1}
            </p>
            <p
                className={`font-bold w-12ch px-2 text-center ${
                    spieler2 === "" ? "text-secondary underline" : null
                }`}
            >
                {spieler2 === "" ? "offen" : spieler2}
            </p>
            <p className="text-2xl text-gray-500 text-center px-8 py-3 border-l-2 border-gray-400 font-bold">
                {punkte}
            </p>
        </div>
    );
};

export default Team;
