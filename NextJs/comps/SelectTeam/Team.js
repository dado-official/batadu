import { Fragment } from "react";
import Image from "next/image";

const Team = ({ spieler1, spieler2, punkte, team, selected, setSelected }) => {
    function selectHandler() {
        setSelected(team);
    }

    return (
        <div
            className={`flex w-full border transition-all border-gray items-center dark:bg-whiteDark rounded mb-6 cursor-pointer justify-between gap-4 ${
                selected === team
                    ? "ring-2 ring-primaryLight border-primary"
                    : "null"
            }`}
            onClick={selectHandler}
        >
            <div className="flex w-full items-center justify-center pl-2">
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
                    className={`px-2 whitespace-nowrap overflow-hidden ${
                        spieler1 === undefined || spieler1 === null
                            ? "text-secondary underline"
                            : "dark:text-white"
                    }`}
                    style={{ maxWidth: "8rem" }}
                >
                    {spieler1 === undefined || spieler1 === null
                        ? "offen"
                        : spieler1.username}
                </p>
            </div>
            <div className="flex w-full items-center justify-center pr-2">
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
                            ? "text-secondary underline"
                            : "dark:text-white"
                    }`}
                    style={{ maxWidth: "8rem" }}
                >
                    {spieler2 === undefined || spieler2 === null
                        ? "offen"
                        : spieler2.username}
                </p>
            </div>
            <h5
                className={`text-gray-500 dark:text-gray-300 text-center px-8 py-3 border-l ${
                    selected === team ? "border-primary" : "border-gray"
                } font-medium`}
            >
                {punkte}
            </h5>
        </div>
    );
};

export default Team;
