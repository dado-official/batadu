import React, { useEffect, useState, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import axios from "axios";
import Tisch from "../../../comps/Spiel/Tisch";
import Link from "next/link";
import { cardPhotos } from "../../../comps/Spiel/Karten";
import SpielInformations from "../../../comps/Spiel/SpielInformations";
import Chat from "../../../comps/Spiel/Chat";
import Layout from "../../../comps/Layout";
import SpectatorElement from "../../../comps/Spiel/SpectatorElement";
import BottomContainer from "../../../comps/Spiel/BottomContainer";
import TopLeftInformations from "../../../comps/Spiel/TopLeftInformations";
import CurrentUserStatus from "../../../comps/Spiel/CurrentUserStatus";
import AntwortPopover from "../../../comps/Spiel/AntwortPopover.js";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Spiel = ({
    isDarkmode,
    socket,
    team,
    setReconnect,
    room,
    session,
    setIsDarkmode,
    userId,
    mode,
    level,
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

    const infosRef = useRef();
    const spielRef = useRef();

    const router = useRouter();

    const username = session.user.name;

    /*const [sound1] = useSound(sound1Mp3, { volume: 0.5 });
    const [sound2] = useSound(sound2Mp3, { volume: 0.2 });
    const [sound3] = useSound(sound3Mp3, { volume: 0.3 });
    const [sound4] = useSound(sound4Mp3, { volume: 0.6 });*/

    function joinGame() {
        if (mode === "spectate") {
            socket.emit("spectateRoom", {
                room: room,
                user: {
                    userId: userId,
                    username: username,
                    userPic: session.user.image,
                    level: level,
                },
            });
        } else {
            socket.emit("joinRoom", {
                room: room,
                user: {
                    userId: userId,
                    username: username,
                    userPic: session.user.image,
                    level: level,
                },
                team: team,
            });
        }
    }

    function handleWindowBeforeUnload(e) {
        e.preventDefault();
        e.returnValue = "";
    }

    useEffect(() => {
        if (room === "undefined") {
            router.push("/spielen");
        }
        setReconnect(false);

        axios.get(`${process.env.GAMEAPI_URL}/room/${room}`).then((res) => {
            console.log(res.data.config?.modus);
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
                setPos(users.userPos.map((e) => e?.userId).indexOf(userId));
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
            socket.emit("end");
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
        if (pos !== undefined && mode !== "spectate") {
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
                    // sound3();
                    setIsBieten(false);
                }

                if (statusMe === "Am Zug") {
                    if (!playedSoundZug) {
                        // sound1();
                        setPlayedSoundZug(true);
                        setPlayedSoundWaelen(false);
                    }
                }
                if (statusMe === "Geboten Antwort") {
                    setHover(false);
                    //sound4();
                    setIsHaltenWindow(true);
                } else if (statusMe === "Schlagtausch Antwort") {
                    //sound4();
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
                        // sound1();
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
        if (kartenTisch !== undefined && kartenTisch.length > 0) {
            //sound2();
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
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            spielen={true}
            level={level}
            title={`Batadù - ${room} ${punkte.reduce(
                (sum, value) =>
                    typeof value.team1 == "number" ? sum + value.team1 : sum,
                0
            )}:${punkte.reduce(
                (sum, value) =>
                    typeof value.team2 == "number" ? sum + value.team2 : sum,
                0
            )} `}
        >
            <div className="w-full">
                {isPassword ? (
                    <SpielPassword
                        isDarkmode={isDarkmode}
                        setIsPassword={setIsPassword}
                        joinGame={joinGame}
                        room={room}
                    />
                ) : exist ? (
                    <Fragment>
                        <TopLeftInformations
                            room={room}
                            spectators={spectators}
                        />
                        <div className="relative w-1450 max-w-1/9 mx-auto mt-32 pr-80">
                            <div className="xl:col-span-2 relative">
                                {/*Countdown bar */}
                                <div
                                    className={`${
                                        showTimer ? "countdown" : "hidden"
                                    } h-2 bg-secondary z-30 dark:bg-secondaryDark absolute rounded-st bottom-0 mb-16`}
                                ></div>
                                <div
                                    className={`flex relative justify-center mt-8 ${
                                        isOver ? "h-32" : null
                                    }`}
                                >
                                    {!isOver ? (
                                        <Fragment>
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
                                            <CurrentUserStatus
                                                users={users}
                                                status={status}
                                                pos={pos}
                                            />
                                        </Fragment>
                                    ) : (
                                        <div className="bg-white h-bottomSpiel dark:bg-whiteDark absolute w-full top-0 left-0 z-20 rounded-st flex justify-center items-center">
                                            <div className="flex justify-center items-center flex-col w-96 max-w-1/9">
                                                <h3 className="dark:text-white text-4xl text-center font-bold">
                                                    {won
                                                        ? "Gratulation!"
                                                        : "Schade!"}
                                                    <br />
                                                    {won
                                                        ? "Sie haben gewonnen"
                                                        : "Sie haben verloren"}
                                                </h3>
                                                <h6 className="text-center text-xl text-gray-500 dark:text-gray-400 mt-4">
                                                    Sie können jetzt das Spiel
                                                    verlassen oder Sie spielen
                                                    nochmal
                                                </h6>
                                                <button
                                                    onClick={playAgainHandler}
                                                    className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st cursor-pointer mt-8 xl:mt-20"
                                                >
                                                    Nochmal Spielen
                                                </button>
                                                <Link
                                                    href="/spielen"
                                                    className="w-full"
                                                >
                                                    <button className=" bg-bgWhite dark:bg-bgDark  dark:text-white font-medium w-full py-2 rounded-st cursor-pointer mt-4">
                                                        Verlassen
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <AntwortPopover
                                    isHaltenWindow={isHaltenWindow}
                                    is4erle={is4erle}
                                    geboten={geboten}
                                    haltenHandler={haltenHandler}
                                    ablehnenHandler={ablehnenHandler}
                                    isSchlagtauschWindow={isSchlagtauschWindow}
                                    schlagTauschJaHandler={
                                        schlagTauschJaHandler
                                    }
                                    schönereNeinHandler={
                                        schlagTauschNeinHandler
                                    }
                                    isSchönereWindows={isSchönereWindows}
                                    schönereJaHandler={schönereJaHandler}
                                    schönereNeinHandler={schönereNeinHandler}
                                />
                                {mode !== "spectate" && (
                                    <BottomContainer
                                        bietenHandler={bietenHandler}
                                        isBieten={isBieten}
                                        gebotenDavor={gebotenDavor}
                                        pos={pos}
                                        isHaltenWindow={isHaltenWindow}
                                        isSchlagtauschWindow={
                                            isSchlagtauschWindow
                                        }
                                        geboten={geboten}
                                        isOneGestrichen={isOneGestrichen}
                                        schönereHandler={schönereHandler}
                                        isSchönere={isSchönere}
                                        hasSchönere={hasSchönere}
                                        isSchönereWindows={isSchönereWindows}
                                        schlagtauschHandler={
                                            schlagtauschHandler
                                        }
                                        isSchlagtausch={isSchlagtausch}
                                        hasSchlagtausch={hasSchlagtausch}
                                        seeCards={seeCards}
                                        karten={karten}
                                        setKarten={setKarten}
                                        hover={hover}
                                        cardPhotos={cardPhotos}
                                        selectCardHandler={selectCardHandler}
                                        showSchlagTrumpf={showSchlagTrumpf}
                                        schlag={schlag}
                                        trumpf={trumpf}
                                        modus={modus}
                                    />
                                )}
                            </div>
                            {/*Rechte Seite */}
                            <div className="fixed right-0 top-0 flex flex-col h-screen w-80">
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
                                <Chat
                                    socket={socket}
                                    isDarkmode={isDarkmode}
                                    username={username}
                                    userPic={session.user.image}
                                    userId={userId}
                                />
                            </div>
                            <div
                                ref={spielRef}
                                className="flex justify-between gap-16 absolute top-0 w-full xl:hidden -mt-96 pt-96"
                            >
                                <button className="btn bg-white border-4 border-secondary w-28 font-bold">
                                    Chat
                                </button>
                                <button
                                    className="btn bg-white border-4 border-secondary w-28 font-bold text-black xl:hidden"
                                    onClick={scrollToInfosHandler}
                                >
                                    Infos
                                </button>
                            </div>
                        </div>{" "}
                    </Fragment>
                ) : exist === false ? (
                    <div>
                        <h2 className="dark:text-white text-4xl text-center mt-16">
                            Dieser Raum existiert nicht oder ist voll
                        </h2>
                        <p className="text-sm pt-8 text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 lg:mb-16">
                            Möchten Sie ein Spiel beitreten?{" "}
                            <Link href="/spielen">
                                <span className="font-bold cursor-pointer underline text-black dark:text-white">
                                    Zu den Offenen Spielen
                                </span>
                            </Link>
                        </p>
                    </div>
                ) : null}
            </div>
        </Layout>
    );
};

export default Spiel;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        const { room } = context.query;
        const { mode } = context.query;
        const { userId } = session;
        const [{ level }] =
            await prisma.$queryRaw`Select (Select level.nr FROM level WHERE xpreq <= users.xp ORDER BY xpreq DESC LIMIT 1) AS "level" FROM users Where id = ${parseInt(
                session.userId
            )}`;

        prisma.$disconnect();

        return {
            props: {
                session: session,
                room: room,
                userId: userId,
                mode: mode ? mode : null,
                level: level,
            },
        };
    }
    return {
        redirect: {
            destination: "/anmelden",
            permanent: false,
        },
    };
}
