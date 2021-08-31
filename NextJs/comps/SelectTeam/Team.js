import { Fragment } from "react";
import Image from "next/image";

const Team = ({ spieler1, spieler2, punkte, team, selected, setSelected }) => {
    function selectHandler() {
        setSelected(team);
    }

    return (
        <div
            className={`flex px-4 w-full border-2 transition-all border-gray items-center bg-bgWhite dark:bg-whiteDark rounded-st mb-6 cursor-pointer justify-between gap-4 ${
                selected === team
                    ? "ring-4 ring-primaryLight dark:ring-primaryDark border-primary"
                    : "null"
            }`}
            onClick={selectHandler}
        >
            <div className="flex w-full items-center justify-center">
                {spieler1 && (
                    <div className="relative rounded-full w-8 h-8">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={spieler1.userPic}
                            className="rounded-full"
                        />
                    </div>
                )}
                <p
                    className={`px-2 whitespace-nowrap max-w-xs overflow-hidden ${
                        spieler1 === undefined || spieler1 === null
                            ? "text-secondary dark:text-secondaryDark underline"
                            : "dark:text-white"
                    }`}
                >
                    {spieler1 === undefined || spieler1 === null
                        ? "offen"
                        : spieler1.username}
                </p>
            </div>
            <div className="flex w-full items-center justify-center">
                {spieler2 && (
                    <div className="relative rounded-full w-8 h-8">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={spieler2.userPic}
                            className="rounded-full"
                        />
                    </div>
                )}
                <p
                    className={`px-2 max-w-xs whitespace-nowrap  overflow-hidden ${
                        spieler2 === undefined || spieler2 === null
                            ? "text-secondary dark:text-secondaryDark underline"
                            : "dark:text-white"
                    }`}
                >
                    {spieler2 === undefined || spieler2 === null
                        ? "offen"
                        : spieler2.username}
                </p>
            </div>
            <h5 className="text-gray-500 dark:text-gray-300 text-center px-8 py-3 border-l-2 border-gray dark:border-gray-600 font-bold">
                {punkte}
            </h5>
        </div>
    );
};

export default Team;
