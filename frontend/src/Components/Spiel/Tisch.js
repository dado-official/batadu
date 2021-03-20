import React from "react";
import LevelBadge from "../Shared/LevelBadge";
import NameContainer from "./NameContainer";
import UserGameInfo from "./UserGameInfo";

const Tisch = ({ geboten }) => {
    return (
        <div className="w-90% pt-90% sm:pt-0 sm:w-29rem sm:h-29rem flex items-center justify-center bg-tableGray relative rounded-full border-8 sm:border-12 border-borderGray">
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
            <p className="hidden sm:block">
                Geboten: <span className="font-bold">{geboten}</span>
            </p>
            {/*AccountLevels */}
            <div className="absolute -top-10 left-1/2 topBadge">
                <LevelBadge className="tisch" level={20} />
            </div>
            <div className="absolute top-1/2 -left-10 leftBadge">
                <LevelBadge className="tisch" level={190} />
            </div>
            <div className="absolute top-1/2 -right-10 rightBadge">
                <LevelBadge className="tisch" level={7} />
            </div>
            <div className="absolute -bottom-10 left-1/2 bottomBadge">
                <LevelBadge className="tisch" level={29} />
            </div>
            {/*AccountsInformations */}
            <div className="absolute -top-10 top md:left-1/2 flex flex-col items-center">
                <NameContainer name="Holunderyogele" />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div className="absolute top-1/2 left -left-4 flex flex-col items-center">
                <NameContainer name="Holunderyogele" />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div className="absolute top-1/2 -right-4 right flex flex-col items-center">
                <NameContainer name="Holunde" />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div className="absolute -bottom-4 bottom left-1/2 flex flex-col items-center">
                <NameContainer name="Holunder" />
                <UserGameInfo stiche="0" team="1" />
            </div>
        </div>
    );
};

export default Tisch;
