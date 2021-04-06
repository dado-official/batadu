import React, { useState, useEffect } from "react";
import LevelBadge from "../Shared/LevelBadge";
import Statistik from "./Statistik";
import SpielVerlauf from "./SpielVerlauf";
import Search from "./Search";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Profil = ({ setUrl, isDarkmode }) => {
    const [punkte, setPunkte] = useState(0);
    const [curLevelPunkteRequired, setCurLevelPunkteRequired] = useState(0);
    const [nextPunkte, setNextPunkte] = useState(0);
    const [level, setLevel] = useState(0);
    const [games, setGames] = useState([]);
    const [position, setPosition] = useState("?");
    const [anzSpieler, setAnzSpieler] = useState("?");
    const [winrate, setWinrate] = useState("0");
    const [spielerGes, setSpieleGes] = useState("?");
    const [sticheSpiel, setSticheSpiel] = useState("0");
    const { username } = useParams();

    useEffect(() => {
        setUrl("/profile");

        axios
            .get("http://10.10.30.218:42069/user/level", {
                params: {
                    username: username,
                },
            })
            .then((res) => {
                let data = res.data;
                setLevel(data.currentlevel.nr);
                setPunkte(data.punkte);
                setCurLevelPunkteRequired(
                    data.currentlevel.erforderlichepunkte
                );
                setNextPunkte(data.nextlevel.erforderlichepunkte);
            });
        axios
            .get("http://10.10.30.218:42069/user/games", {
                params: {
                    username: username,
                },
            })
            .then((res) => {
                setGames(res.data);
            });
        axios
            .get("http://10.10.30.218:42069/user/stats", {
                params: {
                    username: username,
                },
            })
            .then((res) => {
                console.log(res.data);
                setAnzSpieler(res.data.anzspieler);
                setWinrate(res.data.winrate);
                setSpieleGes(
                    res.data.verlorenespiele + res.data.gewonnenespiele
                );
                setSticheSpiel(res.data.sticheprospiel);
            });

        axios.get("http://10.10.30.218:42069/rankings").then((res) => {
            setPosition(res.data.findIndex((a) => a.username === username) + 1);
        });
    }, [username]);

    return (
        <div>
            <div className="w-1450 max-w-1/9 mx-auto mt-8">
                <div className="md:hidden">
                    <Search isDarkmode={isDarkmode} />
                </div>
                <div className="flex mt-4 items-center gap-8 mb-6">
                    <LevelBadge
                        level={level}
                        size="6.6875rem"
                        isDarkmode={isDarkmode}
                    />
                    <div className="flex-1">
                        <div className="flex flex-row mt-4 justify-between w-full items-center">
                            <h3 className="font-bold dark:text-white text-3xl md:text-4xl text-left">
                                {username}
                            </h3>
                            <div className=" hidden md:block">
                                <Search isDarkmode={isDarkmode} />
                            </div>
                        </div>
                        <h6 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-2">
                            {punkte} Punkte
                        </h6>
                    </div>
                </div>

                <div className="mb-16">
                    <h6 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-right font-light mb-4">
                        Level {level + 1}
                    </h6>
                    <div className="relative w-full rounded-st h-9">
                        <div className="w-full bg-secondary dark:bg-secondaryDark rounded-st h-full opacity-20 flex justify-center items-center"></div>
                        {(100 / (nextPunkte - curLevelPunkteRequired)) *
                            (punkte - curLevelPunkteRequired) >
                            30 || punkte === curLevelPunkteRequired ? (
                            <p
                                className="absolute text-black dark:text-white font-regular left-1/2 top-1/2"
                                style={{ transform: "translate(-0%, -50%" }}
                            >
                                {punkte}/{nextPunkte}
                            </p>
                        ) : null}
                        <div
                            className="bg-secondary dark:bg-secondaryDark rounded-st flex items-center justify-center h-full absolute left-0 top-0"
                            style={{
                                width: `${
                                    (100 /
                                        (nextPunkte - curLevelPunkteRequired)) *
                                    (punkte - curLevelPunkteRequired)
                                }%`,
                            }}
                        >
                            {(100 / (nextPunkte - curLevelPunkteRequired)) *
                                (punkte - curLevelPunkteRequired) >
                            30 ? (
                                <p className="text-white dark:text-black font-regular">
                                    {punkte}/{nextPunkte}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {/*Statistiken*/}
            <div
                className="bg-white dark:bg-whiteDark"
                style={{ width: "100%" }}
            >
                <div className="w-1450 max-w-1/9 mx-auto py-8">
                    <h5 className="font-bold text-7.5 mb-6 mt-2 dark:text-white">
                        Statistiken
                    </h5>
                    <div className="grid gap-x-8 lg:gap-x-20 gap-y-8 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Statistik
                            typ="Rang"
                            data={`#${position}`}
                            extra={`von ${anzSpieler}`}
                        />
                        <Statistik
                            typ="Winnrate %"
                            data={`${winrate} %`}
                            percentage={winrate}
                        />
                        <Statistik typ="Spiele gesamt" data={spielerGes} />
                        <Statistik
                            typ="Stich/Spiel %"
                            data={`${sticheSpiel} %`}
                            percentage={sticheSpiel}
                        />
                    </div>
                </div>
            </div>

            <div className="w-1450 max-w-1/9 mx-auto mt-8 flex flex-col gap-6 mb-12">
                <h5 className="font-bold text-7.5 mt-2 dark:text-white">
                    Verlauf
                </h5>
                {games.length === 0 ? (
                    <p className="dark:white">
                        {username} hat noch keine Spiele gespielt
                    </p>
                ) : (
                    games.map((element) => {
                        return (
                            <SpielVerlauf
                                win={element.amiawinner}
                                team1={element.teams.myteampoints}
                                team2={element.teams.otherteampoints}
                                date={moment(element.gamedate).format(
                                    "MM/DD/YYYY"
                                )}
                                punkte={element.wonpoints}
                                percentage={
                                    (100 /
                                        (element.teams.myteampoints +
                                            element.teams.otherteampoints)) *
                                    element.teams.myteampoints
                                }
                                /*Stiche=... */
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Profil;
