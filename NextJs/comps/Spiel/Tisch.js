import React, { useState, useEffect } from "react";
import LevelBadge from "../LevelBadge";
import NameContainer from "./NameContainer";
import StatusContainer from "./StatusContainer";
import UserGameInfo from "./UserGameInfo";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";
import Image from "next/image";

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
    return (
        <div className="w-90% pt-90% sm:pt-0 sm:w-29rem sm:h-29rem flex items-center justify-center bg-tableGray dark:bg-whiteDark relative rounded-full border-8 sm:border-12 border-borderGray2 dark:border-borderBlack">
            {/*cards*/}
            {/*Kate oben */}
            {karten[calcPos(2 + pos)] !== undefined &&
            karten[calcPos(2 + pos)] !== null ? (
                <div
                    className="absolute top-6 md:top-12 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                >
                    <div className="relative w-4.275rem md:w-4.75rem h-6.73625 md:h-8.421875 hover:shadow-lg transition-all">
                        <Image
                            src={cardPhotos[karten[calcPos(2 + pos)]]}
                            layout="fill"
                            objectFit="contain"
                            alt={karten[calcPos(2 + pos)]}
                            blurDataURL={cardPhotos[karten[calcPos(2 + pos)]]}
                            placeholder="blur"
                            title={karten[calcPos(2 + pos)]}
                        />
                    </div>
                </div>
            ) : null}

            {/*Karten left */}
            {karten[calcPos(3 + pos)] !== undefined &&
            karten[calcPos(3 + pos)] !== null ? (
                <div
                    className="absolute top-1/2 left-7 md:left-14"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <div className="relative w-4.275rem md:w-4.75rem h-6.73625 md:h-8.421875 hover:shadow-lg transition-all">
                        <Image
                            src={cardPhotos[karten[calcPos(3 + pos)]]}
                            layout="fill"
                            objectFit="contain"
                            alt={karten[calcPos(3 + pos)]}
                            blurDataURL={cardPhotos[karten[calcPos(3 + pos)]]}
                            placeholder="blur"
                            title={karten[calcPos(3 + pos)]}
                        />
                    </div>
                </div>
            ) : null}

            {/*Karten right */}
            {karten[calcPos(1 + pos)] !== undefined &&
            karten[calcPos(1 + pos)] !== null ? (
                <div
                    className="absolute top-1/2 right-7 md:right-14"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <div className="relative w-4.275rem md:w-4.75rem h-6.73625 md:h-8.421875 hover:shadow-lg transition-all">
                        <Image
                            src={cardPhotos[karten[calcPos(1 + pos)]]}
                            layout="fill"
                            objectFit="contain"
                            alt={karten[calcPos(1 + pos)]}
                            blurDataURL={cardPhotos[karten[calcPos(1 + pos)]]}
                            placeholder="blur"
                            title={karten[calcPos(1 + pos)]}
                        />
                    </div>
                </div>
            ) : null}

            {/*Karten unten */}
            {karten[calcPos(0 + pos)] !== undefined &&
            karten[calcPos(0 + pos)] !== null ? (
                <div
                    className="absolute bottom-6 md:bottom-12 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                >
                    <div className="relative w-4.275rem md:w-4.75rem h-6.73625 md:h-8.421875 hover:shadow-lg transition-all">
                        <Image
                            src={cardPhotos[karten[calcPos(0 + pos)]]}
                            layout="fill"
                            objectFit="contain"
                            alt={karten[calcPos(0 + pos)]}
                            blurDataURL={cardPhotos[karten[calcPos(0 + pos)]]}
                            placeholder="blur"
                            title={karten[calcPos(0 + pos)]}
                        />
                    </div>
                </div>
            ) : null}

            <p className="hidden sm:block dark:text-white">
                Geboten: <span className="font-bold">{geboten}</span>
            </p>
            {/*AccountLevels */}
            {users[calcPos(2 + pos)] !== undefined &&
            users[calcPos(2 + pos)] !== null ? (
                <div className={`absolute -top-10 left-1/2 topBadge`}>
                    <ProfilePicture
                        level={users[calcPos(2 + pos)].level}
                        size={70}
                        imgSrc={users[calcPos(2 + pos)].userPic}
                        selected={status[calcPos(2 + pos)]}
                    />
                </div>
            ) : null}
            {users[calcPos(3 + pos)] !== undefined &&
            users[calcPos(3 + pos)] !== null ? (
                <div className={`absolute top-1/2 -left-10 leftBadge`}>
                    <ProfilePicture
                        level={users[calcPos(3 + pos)].level}
                        size={70}
                        imgSrc={users[calcPos(3 + pos)].userPic}
                        selected={status[calcPos(3 + pos)]}
                    />
                </div>
            ) : null}
            {users[calcPos(1 + pos)] !== undefined &&
            users[calcPos(1 + pos)] !== null ? (
                <div className={`absolute top-1/2 -right-10 rightBadge`}>
                    <ProfilePicture
                        level={users[calcPos(1 + pos)].level}
                        size={70}
                        imgSrc={users[calcPos(1 + pos)].userPic}
                        selected={status[calcPos(1 + pos)]}
                    />
                </div>
            ) : null}
            {users[calcPos(0 + pos)] !== undefined &&
            users[calcPos(0 + pos)] !== null ? (
                <div className={`absolute -bottom-10 left-1/2 bottomBadge`}>
                    <ProfilePicture
                        level={users[calcPos(0 + pos)].level}
                        size={70}
                        imgSrc={users[calcPos(0 + pos)].userPic}
                        selected={status[calcPos(0 + pos)]}
                    />
                </div>
            ) : null}
            {/*AccountsInformations */}
            {users[calcPos(2 + pos)] !== undefined &&
            users[calcPos(2 + pos)] !== null ? (
                <div
                    className={`absolute -top-10 top md:left-1/2 -ml-2 bg-bgWhite py-3 px-4 rounded-st bg-opacity-50 shadow-sm -mt-3 transition-all hover:shadow-md hover:bg-opacity-70
                `}
                >
                    <NameContainer name={users[calcPos(2 + pos)].username} />
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
                <div
                    className={`absolute top-1/2 left -left-4 bg-bgWhite bg-opacity-90 hover:bg-opacity-100 shadow-sm rounded-st py-3 px-4 -mt-5 -ml-1 transition-all hover:shadow-md 
                `}
                >
                    <NameContainer name={users[calcPos(3 + pos)].username} />
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
                <div
                    className={`absolute top-1/2 -right-7 -mt-5 mr-1 right shadow-sm py-3 px-4 rounded-st hover:shadow-md transition-all
                `}
                >
                    <NameContainer name={users[calcPos(1 + pos)].username} />
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
                <div
                    className={`absolute -bottom-5 bottom left-1/2 bg-bgWhite bg-opacity-50 ml-2 shadow-sm py-3 px-4 rounded-st transition-all hover:shadow-md hover:bg-opacity-70
                `}
                >
                    <NameContainer name={users[calcPos(0 + pos)].username} />
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
