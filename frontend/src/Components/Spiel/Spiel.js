import React, { useEffect, useState, useRef } from "react";
import Tisch from "./Tisch";
import SpielInformations from "./SpielInformations";
import Chat from "./Chat";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NoDark from "../../assets/no-dark.svg";
import YesDark from "../../assets/yes-dark.svg";
import NoWhite from "../../assets/no-white.svg";
import YesWhite from "../../assets/yes-white.svg";
import SpielPassword from "../SpielPassword/SpielPassword";
import axios from "axios";

const Spiel = ({ setUrl, isDarkmode, socket, team, username }) => {
    const [isPassword, setIsPassword] = useState(false);
    const [geboten, setGeboten] = useState(2);
    const [schlag, setSchlag] = useState("?");
    const [trumpf, setTrumpf] = useState("?");
    const [exist, setExist] = useState("");
    const [users, setUsers] = useState("");
    const [pos, setPos] = useState(undefined);
    const [karten, setKarten] = useState([]);
    const [alleKarten, setAlleKarten] = useState([]);
    const [hover, setHover] = useState(false);
    const [teams, setTeams] = useState([]);
    const [stiche, setStiche] = useState([]);
    const [status, setStatus] = useState([]);
    const [myStatus, setMyStatus] = useState("");
    const [seeCards, setSeeCards] = useState(false);
    const [kartenTisch, setKartenTisch] = useState([]);
    const [kartenStich, setKartenStich] = useState([]);
    const [stich, setStich] = useState();
    const [selectedInfo, setSelectedInfo] = useState("Punkte");
    const [seeStiche, setSeeStiche] = useState(false);
    const [punkte, setPunkte] = useState([]);
    const [isBieten, setIsBieten] = useState(false);
    const [isHaltenWindow, setIsHaltenWindow] = useState(false);
    const [gebotenDavor, setGebotenDavor] = useState(0);
    const [isSchlagtauschWindow, setIsSchlagtauschWindow] = useState(false);
    const [hasSchlagtausch, setHasSchlagtausch] = useState(false);
    const [isSchlagtausch, setIsSchlagtausch] = useState(false);
    const [isSchönereWindows, setIsSchönereWindow] = useState(false);
    const [isSchönere, setIsSchönere] = useState(false);
    const [hasSchönere, setHasSchönere] = useState(false);
    const [isTeam1Gestrichen, setIsTeam1Gestrichen] = useState(false);
    const [isTeam2Gestrichen, setIsTeam2Gestrichen] = useState(false);
    const [is4erle, setIs4erle] = useState(false);
    const [isOver, setIsOver] = useState(false);
    const [won, setWon] = useState(false);
    const [winningTeam, setWinningTeam] = useState(0);
    const [showTimer, setShowTimer] = useState(false);

    const chatRef = useRef();
    const infosRef = useRef();
    const spielRef = useRef();

    const { room } = useParams();

    function joinGame() {
        socket.emit("joinRoom", {
            room: room,
            user: username,
            team: team,
        });
    }

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:3003/room/isPassword/${room}`)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    setIsPassword(true);
                } else {
                    joinGame();
                }
            });
        socket.on("roomExist", () => setExist(true));
        socket.on("roomNotExist", () => setExist(false));
        socket.on("players", (users) => {
            console.log("data " + users);
            setUsers(users.userPos);
            setTeams(users.userTeam);
            setStiche(users.userStiche);
            setStatus(users.userStatus);

            if (pos === undefined) {
                setPos(users.userPos.indexOf(username));
                console.log("pos SET!");
            }
        });
        socket.on("status", (status) => {
            setStatus(status);
        });
        socket.on("karten", (data) => {
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log("got Karten");
            console.log(data);
            setAlleKarten(data);
        });
        socket.on("karten sehen", () => {
            setSeeCards(true);
        });
        socket.on("tischkarten", (data) => {
            console.log("Tischkarten: " + data);
            setKartenTisch(data);
            console.log("See Stiche? " + seeStiche);
        });
        socket.on("stich", (gewinner) => {
            setSeeStiche(true);
            setSelectedInfo("Stich 1");
            setStich(gewinner);
        });
        socket.on("hide Stich", () => {
            setSeeStiche(false);
            setSelectedInfo("Punkte");
        });
        socket.on("reset nach stich", (data) => {
            setStatus(data.status);
            setKartenTisch(data.karten);
            setStiche(data.stiche);
        });
        socket.on("punkte", (data) => {
            setPunkte((prev) => [...prev, data]);
        });
        socket.on("geboten", (data) => {
            setGeboten(data);
        });
        socket.on("geboten davor", (team) => {
            setGebotenDavor(team);
        });
        socket.on("neue Runde", () => {
            setGebotenDavor(0);
            setGeboten(2);
            setSchlag("");
            setTrumpf("");
            setSeeCards(false);
            setSeeStiche(false);
            setHasSchlagtausch(false);
            setHasSchönere(false);
        });
        socket.on("reset", () => {
            setGebotenDavor(0);
            setGeboten(2);
            setSchlag("");
            setTrumpf("");
            setSeeCards(false);
            setHasSchlagtausch(false);
            setHasSchönere(false);
            setKartenTisch([]);
            setKarten([]);
            setPunkte([]);
            setIsTeam1Gestrichen(false);
            setIsTeam2Gestrichen(false);
            setSeeStiche(false);
        });
        socket.on("kein schönere", () => {
            setHasSchönere(true);
        });
        socket.on("team1 gestrichen", () => {
            setIsTeam1Gestrichen(true);
        });
        socket.on("team2 gestrichen", () => {
            setIsTeam2Gestrichen(true);
        });
        socket.on("4erle", () => {
            setIs4erle(true);
        });
        socket.on("reset status", () => {
            setStatus([]);
        });
        socket.on("win", (winningTeam) => {
            setWinningTeam(winningTeam);
            setIsOver(true);
        });
    }, []);

    useEffect(() => {
        if (!seeStiche) {
            setKartenStich(kartenTisch.slice());
        }
    }, [kartenTisch]);

    useEffect(() => {
        if (pos !== undefined) {
            let statusMe = status[calcPos(pos)];
            if (statusMe != null) {
                if (
                    !statusMe.includes("Gestochen") &&
                    statusMe !== "Geboten Antwort" &&
                    statusMe !== "Schlagtausch Antwort"
                ) {
                    setHover(true);
                    setIsBieten(true);
                }
                if (statusMe === "Geboten Antwort") {
                    setHover(false);
                    setIsHaltenWindow(true);
                } else if (statusMe === "Schlagtausch Antwort") {
                    setHover(false);
                    setIsSchlagtauschWindow(true);
                } else if (statusMe === "Schönere Antwort") {
                    setHover(false);
                    setIsSchönereWindow(true);
                }

                setMyStatus(statusMe);
                setSeeCards(true);
                if (statusMe === "Schlag" || statusMe === "Trumpf") {
                    socket.on("schlag trumpf", (data) => {
                        console.log("Schlag Trumpf: " + data);
                        setSchlag(data.schlag);
                        setTrumpf(data.trumpf);
                    });
                    setIsSchlagtausch(true);
                    setIsSchönere(true);
                } else {
                    setIsSchlagtausch(false);
                    setIsSchönere(false);
                }
            } else {
                setHover(false);
                setIsSchlagtausch(false);
                setIsSchönere(false);
                setIsBieten(false);
            }
        }
    }, [status]);

    useEffect(() => {
        if (pos !== undefined) {
            setKarten(alleKarten[pos]);
        }
    }, [alleKarten]);

    useEffect(() => {
        setUrl("/");
    }, []);

    useEffect(() => {
        console.log("Team: " + {});
        if (winningTeam === 1 && pos % 2 === 0) {
            setWon(true);
        } else if (winningTeam === 2 && pos % 2 !== 0) {
            setWon(true);
        } else {
            setWon(false);
        }
    }, [winningTeam]);

    useEffect(() => {
        if (isOver) {
            setShowTimer(true);
            setTimeout(() => {
                setShowTimer(false);
                setIsOver(false);
            }, 10000);
        }
    }, [isOver]);

    function selectCardHandler(e) {
        if (
            myStatus !== "" ||
            !myStatus.includes("Gestochen") ||
            !myStatus === "Gebot Antwort"
        ) {
            console.log("myStatus: " + myStatus);
            console.log(e.target.alt);
            let card = e.target.alt;
            console.log("Emit: " + myStatus + " Karte: " + card);

            let index = karten.findIndex((i) => i.name === e.target.alt);
            console.log("Cherta: " + karten[index].name);
            let cardObject = karten[index];

            if (myStatus === "Am Zug") {
                console.log("Delete");
                //delete
                removeCard(e);
            }

            socket.emit(myStatus, cardObject);
            setMyStatus(null);
            setHover(false);
        }
    }

    function removeCard(e) {
        let array = karten;
        console.log(array);
        let index = array.findIndex((i) => i.name === e.target.alt);
        if (index !== -1) {
            array.splice(index, 1);
            setKarten(array);
        }
    }

    function scrollToChatHandler() {
        chatRef.current.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToInfosHandler() {
        infosRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToSpielHandler() {
        spielRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function calcPos(pos) {
        if (pos > 3) return pos - 4;
        return pos;
    }
    function bietenHandler() {
        if (
            isBieten &&
            gebotenDavor !== (pos % 2 === 0 ? 1 : 2) &&
            !isHaltenWindow &&
            !isSchlagtauschWindow &&
            !isSchönereWindows
        ) {
            if (geboten === 2 && isOneGestrichen()) return;
            socket.emit("bieten", pos);
        }
    }
    function isOneGestrichen() {
        if (isTeam1Gestrichen && isTeam2Gestrichen) return false;
        if (isTeam2Gestrichen || isTeam1Gestrichen) return true;
        return false;
    }
    function schlagtauschHandler() {
        if (
            isSchlagtausch &&
            !hasSchlagtausch &&
            !isHaltenWindow &&
            !isSchlagtauschWindow &&
            !isSchönereWindows
        ) {
            setHasSchlagtausch(true);
            socket.emit("schlagtausch", pos);
        }
    }

    function schönereHandler() {
        if (
            isSchönere &&
            !hasSchönere &&
            !isHaltenWindow &&
            !isSchlagtauschWindow &&
            !isSchönereWindows
        ) {
            socket.emit("schönere", pos);
        }
    }

    function haltenHandler() {
        setIsHaltenWindow(false);
        if (is4erle && geboten === 2) {
            socket.emit("4erle halten");
            setIs4erle(false);
        } else {
            socket.emit("halten");
        }
    }

    function ablehnenHandler() {
        setIsHaltenWindow(false);
        socket.emit("ablehnen", pos);
        if (is4erle) {
            setIs4erle(false);
        }
    }
    function schlagTauschJaHandler() {
        //Ja Schlagtausch
        setIsSchlagtauschWindow(false);
        socket.emit("schlagtausch annehmen");
    }
    function schlagTauschNeinHandler() {
        //Nein Schlagtausch
        setIsSchlagtauschWindow(false);
        socket.emit("schlagtausch ablehnen");
    }
    function schönereJaHandler() {
        setIsSchönereWindow(false);
        socket.emit("schönere annehmen");
        //schönere Ja
    }
    function schönereNeinHandler() {
        setIsSchönereWindow(false);
        socket.emit("schönere ablehnen");
        //schönere Nein
    }

    function playAgainHandler() {
        setIsOver(false);
    }

    return (
        <div className="w-full">
            {isPassword ? (
                <SpielPassword
                    isDarkmode={isDarkmode}
                    setIsPassword={setIsPassword}
                    joinGame={joinGame}
                    room={room}
                />
            ) : exist ? (
                <div className="relative grid grid-cols-1 xl:grid-cols-3 w-1450 max-w-1/9 mx-auto gap-12 mt-16">
                    <div className="xl:col-span-2 relative">
                        {/*Countdown bar */}
                        <div
                            data
                            className={`${
                                showTimer ? "countdown" : "hidden"
                            } h-2 bg-secondary z-30 dark:bg-secondaryDark absolute rounded-st bottom-0 mb-16`}
                        ></div>
                        <div
                            className={`flex justify-center mt-8 ${
                                isOver ? "h-32" : null
                            }`}
                        >
                            {!isOver ? (
                                <Tisch
                                    geboten={geboten}
                                    isDarkmode={isDarkmode}
                                    users={users}
                                    pos={pos}
                                    teams={teams}
                                    stiche={stiche}
                                    status={status}
                                    calcPos={calcPos}
                                    karten={kartenTisch}
                                />
                            ) : (
                                <div className="bg-white h-bottomSpiel dark:bg-whiteDark absolute w-full top-0 left-0 z-20 rounded-st flex justify-center items-center">
                                    <div className="flex justify-center items-center flex-col w-96 max-w-1/9">
                                        <h3 className="dark:text-white text-4xl text-center font-bold">
                                            {won ? "Gratulation!" : "Schade!"}
                                            <br />
                                            {won
                                                ? "Sie haben gewonnen"
                                                : "Sie haben verloren"}
                                        </h3>
                                        <h6 className="text-center text-xl text-gray-500 dark:text-gray-400 mt-4">
                                            Sie können jetzt das Spiel verlassen
                                            oder Sie spielen nochmal
                                        </h6>
                                        <button
                                            onClick={playAgainHandler}
                                            className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st cursor-pointer mt-8 xl:mt-20"
                                        >
                                            Nochmal Spielen
                                        </button>
                                        <Link to="/spielen" className="w-full">
                                            <button className=" bg-bgWhite dark:bg-bgDark  dark:text-white font-medium w-full py-2 rounded-st cursor-pointer mt-4">
                                                Verlassen
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/*fenster wenn man gewinnt*/}
                        {/*fenster wenn geboten wird */}
                        <div
                            className={`fixed mt-4.25rem lg:mt-4.5rem w-full top-0 left-0 flex justify-center items-center gap-10 bg-secondary dark:bg-secondaryDark p-3 rounded-b-st z-10 ${
                                isHaltenWindow ? "fadein" : "fadeout"
                            }`}
                        >
                            <p className="font-medium text-center text-2xl text-white dark:text-black">
                                {is4erle && geboten === 2
                                    ? geboten + 2
                                    : geboten + 1}{" "}
                                halten?
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src={isDarkmode ? YesDark : YesWhite}
                                    alt="Ja"
                                    onClick={haltenHandler}
                                    className="cursor-pointer"
                                />
                                <img
                                    src={isDarkmode ? NoDark : NoWhite}
                                    alt="Nein"
                                    onClick={ablehnenHandler}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        {/*fenster für schlagtausch */}
                        <div
                            className={`fixed mt-4.25rem lg:mt-4.5rem w-full top-0 left-0 flex justify-center items-center gap-10 bg-secondary dark:bg-secondaryDark p-3 rounded-b-st z-10 ${
                                isSchlagtauschWindow ? "fadein" : "fadeout"
                            }`}
                        >
                            <p className="font-medium text-center text-2xl text-white dark:text-black">
                                Schlagtausch?
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src={isDarkmode ? YesDark : YesWhite}
                                    alt="Ja"
                                    onClick={schlagTauschJaHandler}
                                    className="cursor-pointer"
                                />
                                <img
                                    src={isDarkmode ? NoDark : NoWhite}
                                    alt="Nein"
                                    onClick={schlagTauschNeinHandler}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        {/*fenster für  schönere*/}
                        <div
                            className={`fixed mt-4.25rem lg:mt-4.5rem w-full top-0 left-0 flex justify-center items-center gap-10 bg-secondary dark:bg-secondaryDark p-3 rounded-b-st z-10 ${
                                isSchönereWindows ? "fadein" : "fadeout"
                            }`}
                        >
                            <p className="font-medium text-center text-2xl text-white dark:text-black">
                                Schönere?
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src={isDarkmode ? YesDark : YesWhite}
                                    alt="Ja"
                                    onClick={schönereJaHandler}
                                    className="cursor-pointer"
                                />
                                <img
                                    src={isDarkmode ? NoDark : NoWhite}
                                    alt="Nein"
                                    onClick={schönereNeinHandler}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between mt-28 md:mt-28 mb-16 flex-wrap">
                            <div className="flex justify-between md:flex-col gap-1 sm:gap-8 md:gap-2 w-full md:w-max mb-4 md:mb-0">
                                <button
                                    onClick={bietenHandler}
                                    className={`btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ${
                                        !isBieten ||
                                        gebotenDavor ===
                                            (pos % 2 === 0 ? 1 : 2) ||
                                        isHaltenWindow ||
                                        isSchlagtauschWindow ||
                                        isSchönereWindows ||
                                        (geboten === 2 && isOneGestrichen())
                                            ? "opacity-20 cursor-not-allowed"
                                            : null
                                    }`}
                                >
                                    Bieten
                                </button>
                                <button
                                    onClick={schönereHandler}
                                    className={`btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ${
                                        !isSchönere ||
                                        hasSchönere ||
                                        isSchlagtauschWindow ||
                                        isHaltenWindow ||
                                        isSchönereWindows
                                            ? "opacity-20 cursor-not-allowed"
                                            : null
                                    }`}
                                >
                                    Schönere
                                </button>
                                <button
                                    onClick={schlagtauschHandler}
                                    className={`btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ${
                                        !isSchlagtausch ||
                                        hasSchlagtausch ||
                                        isSchlagtauschWindow ||
                                        isHaltenWindow ||
                                        isSchönereWindows
                                            ? "opacity-20 cursor-not-allowed"
                                            : null
                                    }`}
                                >
                                    Schlagtausch
                                </button>
                            </div>
                            {/*my cards*/}
                            {seeCards
                                ? karten.map((element) => {
                                      return (
                                          <img
                                              className={`h-auto w-4.275rem md:w-4.75rem rounded-st ${
                                                  hover
                                                      ? "hover:border-secondary dark:hover:border-secondaryDark border-4 border-transparent cursor-pointer"
                                                      : null
                                              } `}
                                              src={`http://10.10.30.218/${decodeURI(
                                                  element.name
                                              )}.png`}
                                              alt={element.name}
                                              onClick={selectCardHandler}
                                              key={Math.random() * 1000}
                                          />
                                      );
                                  })
                                : null}
                            <div className="flex flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static sm:flex-col justify-between md:justify-start w-full sm:w-max mt-4 md:mt-0">
                                <p className="dark:text-white">
                                    Schlag:{" "}
                                    <span className="font-bold">{schlag}</span>
                                </p>
                                <p className="dark:text-white">
                                    Trumpf:{" "}
                                    <span className="font-bold">{trumpf}</span>
                                </p>
                                <p className="block sm:hidden dark:text-white">
                                    Geboten:{" "}
                                    <span className="font-bold">{geboten}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Rechte Seite */}
                    <div className="xl:col-span-1 mb-16 flex flex-col">
                        <SpielInformations
                            ref={infosRef}
                            isDarkmode={isDarkmode}
                            selected={selectedInfo}
                            setSelected={setSelectedInfo}
                            karten={kartenStich}
                            seeStiche={seeStiche}
                            calcPos={calcPos}
                            gewinner={stich}
                            pos={pos}
                            punkte={punkte}
                            isTeam1Gestrichen={isTeam1Gestrichen}
                            isTeam2Gestrichen={isTeam2Gestrichen}
                        />
                        <button
                            className="btn bg-secondary dark:bg-secondaryDark w-full font-bold text-white dark:text-black mt-8 xl:hidden"
                            onClick={scrollToSpielHandler}
                        >
                            Zurück zum Spiel
                        </button>
                        <Chat
                            socket={socket}
                            ref={chatRef}
                            isDarkmode={isDarkmode}
                            username={username}
                        />
                    </div>
                    <div
                        ref={spielRef}
                        className="flex justify-between gap-16 absolute top-0 w-full xl:hidden -mt-96 pt-96"
                    >
                        <button
                            className="btn bg-white border-4 border-secondary w-28 font-bold"
                            onClick={scrollToChatHandler}
                        >
                            Chat
                        </button>
                        <button
                            className="btn bg-white border-4 border-secondary w-28 font-bold text-black xl:hidden"
                            onClick={scrollToInfosHandler}
                        >
                            Infos
                        </button>
                    </div>
                </div>
            ) : exist === false ? (
                <div>
                    <h2 className="dark:text-white text-4xl text-center mt-16">
                        Dieser Raum existiert nicht oder ist voll
                    </h2>
                    <p className="text-sm pt-8 text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 lg:mb-16">
                        Möchten Sie ein Spiel beitreten?{" "}
                        <Link to="/spielen">
                            <span className="font-bold underline text-black dark:text-white">
                                Zu den Offenen Spielen
                            </span>
                        </Link>
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default Spiel;
