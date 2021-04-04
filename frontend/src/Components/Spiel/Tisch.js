import React, { useState, useEffect } from "react";
import LevelBadge from "../Shared/LevelBadge";
import NameContainer from "./NameContainer";
import StatusContainer from "./StatusContainer";
import UserGameInfo from "./UserGameInfo";
import axios from "axios";

const Tisch = ({
    geboten,
    isDarkmode,
    users,
    pos,
    stiche,
    status,
    teams,
    calcPos,
    karten,
}) => {
    const [level, setLevel] = useState([
        { level: 0 },
        { level: 0 },
        { level: 0 },
        { level: 0 },
    ]);

    useEffect(() => {
        console.log("lenght: " + users.length);
        for (let i = 0; i < users.length; i++) {
            if (users[i] !== undefined && users[i] !== null) {
                if (level[i].user === undefined && level[i].user !== users[i]) {
                    axios
                        .get("http://10.10.30.218:42069/user/level", {
                            params: { username: users[i] },
                        })
                        .then((data) => {
                            const newLevels = level.slice();
                            newLevels[i].level = data.data.currentlevel.nr;
                            newLevels[i].user = users[i];
                            setLevel(newLevels);
                            console.log("Levels");
                            console.log(level);
                        });
                }
            }
        }
    }, [users]);
    return (
        <div className="w-90% pt-90% sm:pt-0 sm:w-29rem sm:h-29rem flex items-center justify-center bg-tableGray dark:bg-whiteDark relative rounded-full border-8 sm:border-12 border-borderGray dark:border-borderBlack">
            {/*cards*/}
            {/*Kate oben */}
            {karten[calcPos(2 + pos)] !== undefined &&
            karten[calcPos(2 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute top-6 md:top-12 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(2 + pos)]
                    )}.png`}
                    alt={karten[calcPos(2 + pos)]}
                />
            ) : null}

            {/*Karten left */}
            {karten[calcPos(3 + pos)] !== undefined &&
            karten[calcPos(3 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute top-1/2 left-7 md:left-14"
                    style={{ transform: "translateY(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(3 + pos)]
                    )}.png`}
                    alt={karten[calcPos(3 + pos)]}
                />
            ) : null}

            {/*Karten right */}
            {karten[calcPos(1 + pos)] !== undefined &&
            karten[calcPos(1 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute top-1/2 right-7 md:right-14"
                    style={{ transform: "translateY(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(1 + pos)]
                    )}.png`}
                    alt={karten[calcPos(1 + pos)]}
                />
            ) : null}

            {/*Karten unten */}
            {karten[calcPos(0 + pos)] !== undefined &&
            karten[calcPos(0 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute bottom-6 md:bottom-12 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(0 + pos)]
                    )}.png`}
                    alt={karten[calcPos(0 + pos)]}
                />
            ) : null}

            <p className="hidden sm:block dark:text-white">
                Geboten: <span className="font-bold">{geboten}</span>
            </p>
            {/*AccountLevels */}
            {users[calcPos(2 + pos)] !== undefined &&
            users[calcPos(2 + pos)] !== null ? (
                <div className="absolute -top-10 left-1/2 topBadge">
                    <LevelBadge
                        className="tisch"
                        level={level[calcPos(2 + pos)].level}
                        isDarkmode={isDarkmode}
                    />
                </div>
            ) : null}
            {users[calcPos(3 + pos)] !== undefined &&
            users[calcPos(3 + pos)] !== null ? (
                <div className="absolute top-1/2 -left-10 leftBadge">
                    <LevelBadge
                        className="tisch"
                        level={level[calcPos(3 + pos)].level}
                        isDarkmode={isDarkmode}
                    />
                </div>
            ) : null}
            {users[calcPos(1 + pos)] !== undefined &&
            users[calcPos(1 + pos)] !== null ? (
                <div className="absolute top-1/2 -right-10 rightBadge">
                    <LevelBadge
                        className="tisch"
                        level={level[calcPos(1 + pos)].level}
                        isDarkmode={isDarkmode}
                    />
                </div>
            ) : null}
            {users[calcPos(0 + pos)] !== undefined &&
            users[calcPos(0 + pos)] !== null ? (
                <div className="absolute -bottom-10 left-1/2 bottomBadge">
                    <LevelBadge
                        className="tisch"
                        level={level[calcPos(0 + pos)].level}
                        isDarkmode={isDarkmode}
                    />
                </div>
            ) : null}
            {/*AccountsInformations */}
            {users[calcPos(2 + pos)] !== undefined &&
            users[calcPos(2 + pos)] !== null ? (
                <div className="absolute -top-10 top md:left-1/2 flex flex-col items-center">
                    <NameContainer name={users[calcPos(2 + pos)]} />
                    <UserGameInfo
                        stiche={stiche[calcPos(2 + pos)]}
                        team={teams[calcPos(2 + pos)]}
                    />
                    {status[calcPos(2 + pos)] != null ? (
                        <StatusContainer status={status[calcPos(2 + pos)]} />
                    ) : null}
                </div>
            ) : null}

            {users[calcPos(3 + pos)] !== undefined &&
            users[calcPos(3 + pos)] !== null ? (
                <div className="absolute top-1/2 left -left-4 flex flex-col items-center">
                    <NameContainer name={users[calcPos(3 + pos)]} />
                    <UserGameInfo
                        stiche={stiche[calcPos(3 + pos)]}
                        team={teams[calcPos(3 + pos)]}
                    />
                    {status[calcPos(3 + pos)] != null ? (
                        <StatusContainer status={status[calcPos(3 + pos)]} />
                    ) : null}
                </div>
            ) : null}

            {users[calcPos(1 + pos)] !== undefined &&
            users[calcPos(1 + pos)] !== null ? (
                <div className="absolute top-1/2 -right-4 right flex flex-col items-center">
                    <NameContainer name={users[calcPos(1 + pos)]} />
                    <UserGameInfo
                        stiche={stiche[calcPos(1 + pos)]}
                        team={teams[calcPos(1 + pos)]}
                    />
                    {status[calcPos(1 + pos)] != null ? (
                        <StatusContainer status={status[calcPos(1 + pos)]} />
                    ) : null}
                </div>
            ) : null}

            {users[calcPos(0 + pos)] !== undefined &&
            users[calcPos(0 + pos)] !== null ? (
                <div className="absolute -bottom-4 bottom left-1/2 flex flex-col items-center">
                    <NameContainer name={users[calcPos(0 + pos)]} />
                    <UserGameInfo
                        stiche={stiche[calcPos(0 + pos)]}
                        team={teams[calcPos(0 + pos)]}
                    />
                    {status[calcPos(0 + pos)] != null ? (
                        <StatusContainer status={status[calcPos(0 + pos)]} />
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default Tisch;
