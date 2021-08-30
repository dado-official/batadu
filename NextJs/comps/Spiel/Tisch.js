import React, { useState, useEffect } from "react";
import LevelBadge from "../LevelBadge";
import NameContainer from "./NameContainer";
import StatusContainer from "./StatusContainer";
import UserGameInfo from "./UserGameInfo";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";

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
    cardPhotos,
}) => {
    const [level, setLevel] = useState([
        { level: 0 },
        { level: 0 },
        { level: 0 },
        { level: 0 },
    ]);

    useEffect(() => {
        for (let i = 0; i < users.length; i++) {
            if (users[i] !== undefined && users[i] !== null) {
                if (level[i].user === undefined && level[i].user !== users[i]) {
                    /*axios
                        .get(`http://82.165.104.152:42069/user/level`, {
                            params: { username: users[i] },
                        })
                        .then((data) => {
                            const newLevels = level.slice();
                            newLevels[i].level = data.data.currentlevel.nr;
                            newLevels[i].user = users[i];
                            setLevel(newLevels);
                        });*/
                    const newLevels = level.slice();
                    newLevels[i].level = 5;
                    newLevels[i].user = users[i];
                    setLevel(newLevels);
                }
            }
        }
    }, [users]);
    return (
        <div className="w-90% pt-90% sm:pt-0 sm:w-29rem sm:h-29rem flex items-center justify-center bg-tableGray dark:bg-whiteDark relative rounded-full border-8 sm:border-12 border-borderGray2 dark:border-borderBlack">
            {/*cards*/}
            {/*Kate oben */}
            {karten[calcPos(2 + pos)] !== undefined &&
            karten[calcPos(2 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute top-6 md:top-12 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                    src={cardPhotos[karten[calcPos(2 + pos)]]}
                    alt={karten[calcPos(2 + pos)]}
                />
            ) : null}

            {/*Karten left */}
            {karten[calcPos(3 + pos)] !== undefined &&
            karten[calcPos(3 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute top-1/2 left-7 md:left-14"
                    style={{ transform: "translateY(-50%)" }}
                    src={cardPhotos[karten[calcPos(3 + pos)]]}
                    alt={karten[calcPos(3 + pos)]}
                />
            ) : null}

            {/*Karten right */}
            {karten[calcPos(1 + pos)] !== undefined &&
            karten[calcPos(1 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute top-1/2 right-7 md:right-14"
                    style={{ transform: "translateY(-50%)" }}
                    src={cardPhotos[karten[calcPos(1 + pos)]]}
                    alt={karten[calcPos(1 + pos)]}
                />
            ) : null}

            {/*Karten unten */}
            {karten[calcPos(0 + pos)] !== undefined &&
            karten[calcPos(0 + pos)] !== null ? (
                <img
                    className="h-auto w-4.275rem md:w-4.75rem absolute bottom-6 md:bottom-12 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                    src={cardPhotos[karten[calcPos(0 + pos)]]}
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
                    <ProfilePicture
                        level={level[calcPos(2 + pos)].level}
                        size={70}
                        imgSrc="https://avatars.githubusercontent.com/u/63723690?v=4"
                    />
                </div>
            ) : null}
            {users[calcPos(3 + pos)] !== undefined &&
            users[calcPos(3 + pos)] !== null ? (
                <div className="absolute top-1/2 -left-10 leftBadge">
                    <ProfilePicture
                        level={level[calcPos(3 + pos)].level}
                        size={70}
                        imgSrc="https://avatars.githubusercontent.com/u/63723690?v=4"
                    />
                </div>
            ) : null}
            {users[calcPos(1 + pos)] !== undefined &&
            users[calcPos(1 + pos)] !== null ? (
                <div className="absolute top-1/2 -right-10 rightBadge">
                    <ProfilePicture
                        level={level[calcPos(1 + pos)].level}
                        size={70}
                        imgSrc="https://avatars.githubusercontent.com/u/63723690?v=4"
                    />
                </div>
            ) : null}
            {users[calcPos(0 + pos)] !== undefined &&
            users[calcPos(0 + pos)] !== null ? (
                <div className="absolute -bottom-10 left-1/2 bottomBadge">
                    <ProfilePicture
                        level={level[calcPos(0 + pos)].level}
                        size={70}
                        imgSrc="https://avatars.githubusercontent.com/u/63723690?v=4"
                    />
                </div>
            ) : null}
            {/*AccountsInformations */}
            {users[calcPos(2 + pos)] !== undefined &&
            users[calcPos(2 + pos)] !== null ? (
                <div className="absolute -top-10 top md:left-1/2 -ml-2 bg-bgWhite py-3 px-4 rounded-st bg-opacity-50 shadow-sm text-right -mt-3 transition-all hover:shadow-md hover:bg-opacity-70">
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
                <div className="absolute top-1/2 left -left-4 bg-bgWhite shadow-sm rounded-st py-3 px-4 -mt-5 -ml-1 transition-all hover:shadow-md">
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
                <div className="absolute top-1/2 -right-7 -mt-5 mr-1 right shadow-sm py-3 px-4 rounded-st hover:shadow-md transition-all">
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
                <div className="absolute -bottom-5 bottom left-1/2 bg-bgWhite bg-opacity-50 ml-2 shadow-sm py-3 px-4 rounded-st transition-all hover:shadow-md hover:bg-opacity-70">
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
