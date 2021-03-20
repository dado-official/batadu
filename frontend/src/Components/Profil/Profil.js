import React, { useState, useEffect } from "react";
import LevelBadge from "../Shared/LevelBadge";
import Statistik from "./Statistik";
import SpielVerlauf from "./SpielVerlauf";
import Search from "./Search";
const breakPoint = 5;

const Profil = ({ setUrl }) => {
    const [username, setUsername] = useState("Holunderyogele");
    const [punkte, setPunkte] = useState(39);
    const [nextPunkte, setNextPunkte] = useState(60);
    const [level, setLevel] = useState(2);

    useEffect(() => {
        setUrl("/profile");
    }, []);

    return (
        <div>
            <div className="w-1450 max-w-1/9 mx-auto mt-8 md:mt-16">
                <div className="md:hidden">
                    <Search />
                </div>
                <div className="flex mt-4 items-center gap-8 mb-6">
                    <LevelBadge level={level} size="6.6875rem" />
                    <div className="flex-1">
                        <div className="flex flex-row mt-4 justify-between w-full items-center">
                            <h3 className="font-bold text-3xl md:text-4xl text-left">{username}</h3>
                            <div className=" hidden md:block">
                                <Search />
                            </div>
                        </div>
                        <h6 className="text-xl md:text-2xl text-gray-600 mt-2">
                            {punkte} Punkte
                        </h6>
                    </div>
                </div>

                <div className="mb-16">
                    <h6 className="text-xl md:text-2xl text-gray-600 text-right font-light mb-4">
                        Level {level + 1}
                    </h6>
                    <div className="relative w-full rounded-st h-9">
                        {(100 / nextPunkte) * punkte <= breakPoint ? (
                            <p
                                className="absolute text-black font-regular left-1/2 top-1/2"
                                style={{ transform: "translate(-0%, -50%" }}
                            >
                                {punkte}/{nextPunkte}
                            </p>
                        ) : null}
                        <div className="w-full bg-secondary rounded-st h-full opacity-20 flex justify-center items-center"></div>
                        <div
                            className="bg-secondary rounded-st flex items-center justify-center h-full absolute left-0 top-0"
                            style={{ width: `${(100 / nextPunkte) * punkte}%` }}
                        >
                            {(100 / nextPunkte) * punkte > breakPoint ? (
                                <p className="text-white font-regular">
                                    {punkte}/{nextPunkte}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {/*Statistiken*/}
            <div className="bg-white" style={{ width: "100%" }}>
                <div className="w-1450 max-w-1/9 mx-auto py-8">
                    <h5 className="font-bold text-7.5 mb-6 mt-2">
                        Statistiken
                    </h5>
                    <div className="grid gap-x-8 lg:gap-x-20 gap-y-8 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Statistik typ="Rang" data="#1" extra="von 76" />
                        <Statistik
                            typ="Winnrate %"
                            data="62.1 %"
                            percentage={"62.1"}
                        />
                        <Statistik typ="Spiele gesamt" data="38" />
                        <Statistik
                            typ="Stich/Spiel %"
                            data="40 %"
                            percentage={"40"}
                        />
                    </div>
                </div>
            </div>

            <div className="w-1450 max-w-1/9 mx-auto mt-8 flex flex-col gap-6 mb-12">
                <h5 className="font-bold text-7.5 mt-2">Verlauf</h5>
                <SpielVerlauf
                    date="16.03.2021"
                    team1={13}
                    team2={15}
                    stiche="8"
                    punkte="20"
                    percentage={(100 / 28) * 13}
                    win={false}
                />
                <SpielVerlauf
                    date="16.03.2021"
                    team1={15}
                    team2={13}
                    stiche="8"
                    punkte="20"
                    percentage={(100 / 28) * 15}
                    win={true}
                />
            </div>
        </div>
    );
};

export default Profil;
