import { Fragment } from "react";

const Team = ({ spieler1, spieler2, punkte, team, selected, setSelected }) => {
    function selectHandler() {
        setSelected(team);
    }

    return (
        <div
            className={`flex w-full border-2 transition-all border-gray items-center bg-bgWhite dark:bg-whiteDark rounded-st mb-6 cursor-pointer justify-between ${
                selected === team
                    ? "ring-4 ring-primaryLight dark:ring-primaryDark border-primary"
                    : "null"
            }`}
            onClick={selectHandler}
        >
            <p
                className={`px-2 w-12ch text-center ${
                    spieler1 === undefined || spieler1 === null
                        ? "text-secondary dark:text-secondaryDark underline"
                        : "dark:text-white"
                }`}
            >
                {spieler1 === undefined || spieler1 === null
                    ? "offen"
                    : spieler1}
            </p>
            <p
                className={` w-12ch px-2 text-center ${
                    spieler2 === undefined || spieler2 === null
                        ? "text-secondary dark:text-secondaryDark underline"
                        : "dark:text-white"
                }`}
            >
                {spieler2 === undefined || spieler2 === null
                    ? "offen"
                    : spieler2}
            </p>
            <h5 className="text-gray-500 dark:text-gray-300 text-center px-8 py-3 border-l-2 border-gray dark:border-gray-600 font-bold">
                {punkte}
            </h5>
        </div>
    );
};

export default Team;
