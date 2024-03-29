import React, { useEffect, useState, useRef } from "react";
import Tisch from "./Tisch";
import SpielInformations from "./SpielInformations";
import Chat from "./Chat";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NoDark from "../../assets/no-dark.svg";
import YesDark from "../../assets/yes-dark.svg";
import NoWhite from "../../assets/no-white.svg";
import YesWhite from "../../assets/yes-white.svg";
import SpielPassword from "../SpielPassword/SpielPassword";
import useSound from "use-sound";
import axios from "axios";
import { cardPhotos } from "../Karten/Karten";
import sound1Mp3 from "../../assets/game-1.mp3";
import sound2Mp3 from "../../assets/game-2.mp3";
import sound3Mp3 from "../../assets/game-3.mp3";
import sound4Mp3 from "../../assets/game-4.mp3";
import BottomContainer from "./BottomContainer";
import GameInfo from "./GameInfo";

const Spiel = ({
    setUrl,
    isDarkmode,
    socket,
    team,
    username,
    setReconnect,
}) => {
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
    const [spectators, setSpectators] = useState([]);

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
    const [playedSoundWaelen, setPlayedSoundWaelen] = useState(false);
    const [playedSoundZug, setPlayedSoundZug] = useState(false);
    const [showSchlagTrumpf, setShowSchlagTrumpf] = useState(false);
    const [modus, setModus] = useState("Offen");
    const [sTPos, setSTPos] = useState({ schlagPos: -1, trumpfPos: -1 });

    const chatRef = useRef();
    const infosRef = useRef();
    const spielRef = useRef();

    const history = useHistory();

    const { room } = useParams();
    const { mode } = useParams();

    const [sound1] = useSound(sound1Mp3, { volume: 0.5 });
    const [sound2] = useSound(sound2Mp3, { volume: 0.2 });
    const [sound3] = useSound(sound3Mp3, { volume: 0.3 });
    const [sound4] = useSound(sound4Mp3, { volume: 0.6 });

    function joinGame() {
        if (mode === "spectate") {
            socket.emit("spectateRoom", {
                room: room,
                user: username,
            });
        } else {
            socket.emit("joinRoom", {
                room: room,
                user: username,
                team: team,
            });
        }
    }

    useEffect(() => {
        if (room === "undefined") {
            history.push("/");
        }
        setReconnect(false);
        /*axios
            .get(
                `${process.env.REACT_APP_GAME_SERVER_API}/room/isPassword/${room}`
            )
            .then((res) => {
                if (res.data) {
                    setIsPassword(true);
                } else {
                    joinGame();
                }
            });*/
        axios
            .get(`${process.env.REACT_APP_GAME_SERVER_API}/room/${room}`)
            .then((res) => {
                //console.log(res.data.config?.modus);
                setModus(res.data.config?.modus);
                joinGame();
            });

        socket.on("roomExist", () => setExist(true));
        socket.on("roomNotExist", () => setExist(false));
        socket.on("players", (users) => {
            setUsers(users.userPos);
            setTeams(users.userTeam);
            setStiche(users.userStiche);
            setStatus(users.userStatus);

            if (pos === undefined) {
                setPos(users.userPos.indexOf(username));
            }
        });
        socket.on("status", (status) => {
            setStatus(status);
        });
        if (mode !== "spectate") {
            socket.on("karten", (data) => {
                setKartenTisch([]);
                setAlleKarten(data);
            });
            socket.on("karten sehen", () => {
                setSeeCards(true);
            });
        }
        socket.on("tischkarten", (data) => {
            setKartenTisch(data);
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
            setPlayedSoundWaelen(false);
            setPlayedSoundZug(false);
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
            setSchlag("?");
            setTrumpf("?");
            setSeeCards(false);
            setSeeStiche(false);
            setHasSchlagtausch(false);
            setHasSchönere(false);
            setSelectedInfo("Punkte");
            setPlayedSoundWaelen(false);
            setPlayedSoundZug(false);
            setShowSchlagTrumpf(false);
        });
        socket.on("reset", () => {
            setGebotenDavor(0);
            setGeboten(2);
            setSchlag("?");
            setTrumpf("?");
            setSeeCards(false);
            setHasSchlagtausch(false);
            setHasSchönere(false);
            setKartenTisch([]);
            setKarten([]);
            setPunkte([]);
            setIsTeam1Gestrichen(false);
            setIsTeam2Gestrichen(false);
            setSeeStiche(false);
            setPlayedSoundWaelen(false);
            setPlayedSoundZug(false);
            setShowSchlagTrumpf(false);
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
        socket.on("schlag trumpf", (data) => {
            setSchlag(data.schlag);
            setTrumpf(data.trumpf);
        });
        socket.on("spectators", (data) => {
            setSpectators(data.spectators);
        });
        socket.on("stiche", (data) => {
            setStiche(data);
        });
        socket.on("canSee", ({ schlag, trumpf, schlagPos, trumpfPos }) => {
            setSchlag(schlag);
            setTrumpf(trumpf);
            console.log("Pos: " + pos);
            setSTPos({ schlagPos: schlagPos, trumpfPos: trumpfPos });
        });
        return () => {
            window.location.reload();
        };
    }, []);

    useEffect(() => {
        console.log(pos);
        console.table(sTPos);
        if (pos !== undefined) {
            console.log("Okk");
            if (sTPos.schlagPos === pos || sTPos.trumpfPos === pos) {
                console.log("Al va ite");
                setShowSchlagTrumpf(true);
            } else {
                console.log("al n va nia ite");
            }
        }
    }, [sTPos]);

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

                if (statusMe.includes("Gestochen")) {
                    sound3();
                    setIsBieten(false);
                }

                if (statusMe === "Am Zug") {
                    if (!playedSoundZug) {
                        sound1();
                        setPlayedSoundZug(true);
                        setPlayedSoundWaelen(false);
                    }
                }
                if (statusMe === "Geboten Antwort") {
                    setHover(false);
                    sound4();
                    setIsHaltenWindow(true);
                } else if (statusMe === "Schlagtausch Antwort") {
                    sound4();
                    setHover(false);
                    setIsSchlagtauschWindow(true);
                } else if (statusMe === "Schönere Antwort") {
                    setHover(false);
                    setIsSchönereWindow(true);
                }

                setMyStatus(statusMe);
                setSeeCards(true);
                if (statusMe === "Schlag" || statusMe === "Trumpf") {
                    setShowSchlagTrumpf(true);
                    if (!playedSoundWaelen) {
                        sound1();
                        setPlayedSoundWaelen(true);
                    }
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
        if (kartenTisch !== undefined && kartenTisch.length > 0) {
            sound2();
        }
    }, [kartenTisch]);

    useEffect(() => {
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
            let card = e.target.alt;

            let index = karten.findIndex((i) => i.name === e.target.alt);
            let cardObject = karten[index];

            if (myStatus === "Am Zug") {
                //delete
                removeCard(e);
                socket.emit("Am Zug", { card: cardObject, pos: pos });
                setMyStatus(null);
                setHover(false);
            } else {
                socket.emit(myStatus, cardObject);
                setMyStatus(null);
                setHover(false);
            }
        }
    }

    function removeCard(e) {
        let array = karten;
        let index = array.findIndex((i) => i.name === e.target.alt);
        if (index !== -1) {
            array.splice(index, 1);
            setKarten(array);
        }
    }

    function getSchlag(schlag) {
        if (schlag === "Weli") return schlag;
        return schlag.split(" ")[0];
    }

    function getTrumpf(trumpf) {
        if (trumpf === "Weli") return "Schell";
        if (trumpf === "?") return "?";
        return trumpf.split(" ")[1];
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
                        <GameInfo users={users} status={status} pos={pos} />
                        <div
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
                                    cardPhotos={cardPhotos}
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

                        <BottomContainer
                            bietenHandler={bietenHandler}
                            isBieten={isBieten}
                            gebotenDavor={gebotenDavor}
                            pos={pos}
                            isSchlagtauschWindow={isSchlagtauschWindow}
                            isSchönereWindows={isSchönereWindows}
                            geboten={geboten}
                            isOneGestrichen={isOneGestrichen}
                            schönereHandler={schönereHandler}
                            isSchönere={isSchönere}
                            hasSchönere={hasSchönere}
                            isHaltenWindow={isHaltenWindow}
                            schlagtauschHandler={schlagtauschHandler}
                            isSchlagtausch={isSchlagtausch}
                            hasSchlagtausch={hasSchlagtausch}
                            seeCards={seeCards}
                            karten={karten}
                            hover={hover}
                            cardPhotos={cardPhotos}
                            selectCardHandler={selectCardHandler}
                            showSchlagTrumpf={showSchlagTrumpf}
                            schlag={schlag}
                            trumpf={trumpf}
                            modus={modus}
                            getSchlag={getSchlag}
                            getTrumpf={getTrumpf}
                            setKarten={setKarten}
                        />
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
                            cardPhotos={cardPhotos}
                        />
                        <button
                            className="btn bg-secondary btnSecondary dark:bg-secondaryDark w-full font-bold text-white dark:text-black mt-8 xl:hidden"
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
