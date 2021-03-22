import React from "react";

const Team = ({ spieler1, spieler2, punkte, team, selected, setSelected }) => {
    function selectHandler() {
        setSelected(team);
    }

    return (
        <div
            className={`flex w-full items-center bg-white dark:bg-whiteDark rounded-st mb-6 cursor-pointer justify-between ${
                selected === team
                    ? "ring-4 ring-primary dark:ring-primaryDark"
                    : "null"
            }`}
            onClick={selectHandler}
        >
            <p
                className={`font-bold px-2 w-12ch text-center ${
                    spieler1 === ""
                        ? "text-secondary dark:text-secondaryDark underline"
                        : "dark:text-white"
                }`}
            >
                {spieler1 === "" ? "offen" : spieler1}
            </p>
            <p
                className={`font-bold w-12ch px-2 text-center ${
                    spieler2 === ""
                        ? "text-secondary dark:text-secondaryDark underline"
                        : "dark:text-white"
                }`}
            >
                {spieler2 === "" ? "offen" : spieler2}
            </p>
            <p className="text-2xl text-gray-500 dark:text-gray-300 text-center px-8 py-3 border-l-2 border-gray-400 dark:border-gray-600 font-bold">
                {punkte}
            </p>
        </div>
    );
};

export default Team;
