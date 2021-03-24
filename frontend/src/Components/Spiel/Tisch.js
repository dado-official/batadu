import React from "react";
import LevelBadge from "../Shared/LevelBadge";
import NameContainer from "./NameContainer";
import UserGameInfo from "./UserGameInfo";

const Tisch = ({ geboten, isDarkmode, users, pos }) => {
    function calcPos(pos) {
        if (pos > 3) {
            return pos - 4;
        }
        return pos;
    }

    return (
        <div className="w-90% pt-90% sm:pt-0 sm:w-29rem sm:h-29rem flex items-center justify-center bg-tableGray dark:bg-whiteDark relative rounded-full border-8 sm:border-12 border-borderGray dark:border-borderBlack">
            {/*cards*/}
            <div
                className="h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white absolute top-6 md:top-12 left-1/2"
                style={{ transform: "translateX(-50%)" }}
            ></div>
            <div
                className="h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white absolute top-1/2 left-7 md:left-14"
                style={{ transform: "translateY(-50%)" }}
            ></div>
            <div
                className="h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white absolute top-1/2 right-7 md:right-14"
                style={{ transform: "translateY(-50%)" }}
            ></div>
            <div
                className="h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white absolute bottom-6 md:bottom-12 left-1/2"
                style={{ transform: "translateX(-50%)" }}
            ></div>
            <p className="hidden sm:block dark:text-white">
                Geboten: <span className="font-bold">{geboten}</span>
            </p>
            {/*AccountLevels */}
            <div className="absolute -top-10 left-1/2 topBadge">
                <LevelBadge
                    className="tisch"
                    level={20}
                    isDarkmode={isDarkmode}
                />
            </div>
            <div className="absolute top-1/2 -left-10 leftBadge">
                <LevelBadge
                    className="tisch"
                    level={190}
                    isDarkmode={isDarkmode}
                />
            </div>
            <div className="absolute top-1/2 -right-10 rightBadge">
                <LevelBadge
                    className="tisch"
                    level={7}
                    isDarkmode={isDarkmode}
                />
            </div>
            <div className="absolute -bottom-10 left-1/2 bottomBadge">
                <LevelBadge
                    className="tisch"
                    level={29}
                    isDarkmode={isDarkmode}
                />
            </div>
            {/*AccountsInformations */}
            <div className="absolute -top-10 top md:left-1/2 flex flex-col items-center">
                <NameContainer name={users[calcPos(2 + pos)]} />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div className="absolute top-1/2 left -left-4 flex flex-col items-center">
                <NameContainer name={users[calcPos(3 + pos)]} />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div className="absolute top-1/2 -right-4 right flex flex-col items-center">
                <NameContainer name={users[calcPos(1 + pos)]} />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div className="absolute -bottom-4 bottom left-1/2 flex flex-col items-center">
                <NameContainer name={users[calcPos(0 + pos)]} />
                <UserGameInfo stiche="0" team="1" />
            </div>
        </div>
    );
};

export default Tisch;
