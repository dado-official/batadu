import React from "react";
import LevelBadge from "../LevelBadge";
import NameContainer from "./NameContainer";
import UserGameInfo from "./UserGameInfo";

const Tisch = ({ geboten }) => {
    return (
        <div className="flex items-center justify-center bg-tableGray relative rounded-full border-12 border-borderGray w-29rem h-29rem">
            {/*cards*/}
            <div
                className="h-8.8rem w-4.75rem bg-white absolute top-12 left-1/2"
                style={{ transform: "translateX(-50%)" }}
            ></div>
            <div
                className="h-8.8rem w-4.75rem bg-white absolute top-1/2 left-14"
                style={{ transform: "translateY(-50%)" }}
            ></div>
            <div
                className="h-8.8rem w-4.75rem bg-white absolute top-1/2 right-14"
                style={{ transform: "translateY(-50%)" }}
            ></div>
            <div
                className="h-8.8rem w-4.75rem bg-white absolute bottom-12 left-1/2"
                style={{ transform: "translateX(-50%)" }}
            ></div>
            <p>
                Geboten: <span className="font-bold">{geboten}</span>
            </p>
            {/*AccountLevels */}
            <div
                className="absolute -top-10 left-1/2"
                style={{ transform: "translateX(-50%)" }}
            >
                <LevelBadge level={20} size="4rem" />
            </div>
            <div
                className="absolute top-1/2 -left-10"
                style={{ transform: "translateY(-50%)" }}
            >
                <LevelBadge level={190} size="4rem" />
            </div>
            <div
                className="absolute top-1/2 -right-10"
                style={{ transform: "translateY(-50%)" }}
            >
                <LevelBadge level={7} size="4rem" />
            </div>
            <div
                className="absolute -bottom-10 left-1/2"
                style={{ transform: "translateX(-50%)" }}
            >
                <LevelBadge level={29} size="4rem" />
            </div>
            {/*AccountsInformations */}
            <div
                className="absolute -top-10 left-1/2 flex flex-col items-center"
                style={{ transform: "translateX(calc(-100% - 2.5rem))" }}
            >
                <NameContainer name="Holunderyogele" />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div
                className="absolute top-1/2 -left-4 flex flex-col items-center"
                style={{ transform: "translate(calc(-100% - 2rem), -1.5rem)" }}
            >
                <NameContainer name="Holunderyogele" />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div
                className="absolute top-1/2 -right-4 flex flex-col items-center"
                style={{
                    transform: "translate(calc(100% + 2rem), -1.5rem)",
                }}
            >
                <NameContainer name="Holunde" />
                <UserGameInfo stiche="0" team="1" />
            </div>
            <div
                className="absolute -bottom-4 left-1/2 flex flex-col items-center"
                style={{ transform: "translate(2.5rem, 2rem)" }}
            >
                <NameContainer name="Holunder" />
                <UserGameInfo stiche="0" team="1" />
            </div>
        </div>
    );
};

export default Tisch;
