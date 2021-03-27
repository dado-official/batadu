import React, { useEffect, useState, useRef } from "react";
import Tisch from "./Tisch";
import SpielInformations from "./SpielInformations";
import Chat from "./Chat";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Spiel = ({ setUrl, isDarkmode, socket }) => {
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

    const chatRef = useRef();
    const infosRef = useRef();
    const spielRef = useRef();

    const { room, username } = useParams();

    useEffect(() => {
        socket.emit("joinRoom", { room: room, user: username });
        socket.on("roomExist", () => setExist(true));
        socket.on("roomNotExist", () => setExist(false));
        socket.on("joinRoom", (counter) => console.log(counter));
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
            setHasSchlagtausch(false);
            setHasSchönere(false);
        });
        socket.on("kein schönere", () => {
            setHasSchönere(true);
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

    function selectCardHandler(e) {
        if (
            myStatus !== "" ||
            !myStatus.includes("Gestochen") ||
            !myStatus === "Gebot Antwort"
        ) {
            console.log("myStatus: " + myStatus);
            console.log(e.target.innerHTML);
            let card = e.target.innerHTML;
            console.log("Emit: " + myStatus + " Karte: " + card);

            let index = karten.findIndex((i) => i.name === e.target.innerHTML);
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
        let index = array.findIndex((i) => i.name === e.target.innerHTML);
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
            socket.emit("bieten", pos);
        }
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
        socket.emit("halten");
    }

    function ablehnenHandler() {
        setIsHaltenWindow(false);
        socket.emit("ablehnen", pos);
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

    return (
        <div className="w-full">
            {exist ? (
                <div className="relative grid grid-cols-1 xl:grid-cols-3 w-1450 max-w-1/9 mx-auto gap-12 mt-16">
                    <div className="xl:col-span-2 relative">
                        <div className="flex justify-center mt-8">
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
                        </div>
                        {/*fenster wenn geboten wird */}
                        <div
                            className={`fixed top-1/2 left-1/2 xl:ml-20 xl:mt-32 bg-white dark:bg-whiteDark p-6 rounded-st border-gray-400 border-4 z-10 ${
                                isHaltenWindow ? "block" : "hidden"
                            }`}
                            style={{ transform: "translate(-50%, -50%)" }}
                        >
                            <p className="font-medium text-center text-2xl dark:text-white">
                                {geboten + 1} halten?
                            </p>
                            <div className="flex mt-4 gap-4">
                                <button
                                    onClick={haltenHandler}
                                    className="btn bg-primary dark:bg-primaryDark text-white dark:text-black text-center"
                                >
                                    Ja
                                </button>
                                <button
                                    onClick={ablehnenHandler}
                                    className="btn bg-bgWhite dark:bg-bgDark text-black dark:text-white text-center "
                                >
                                    Nein
                                </button>
                            </div>
                        </div>
                        {/*fenster für schlagtausch */}
                        <div
                            className={`fixed top-1/2 left-1/2 xl:ml-20 xl:mt-32 bg-white dark:bg-whiteDark p-6 rounded-st border-gray-400 border-4 z-10 ${
                                isSchlagtauschWindow ? "block" : "hidden"
                            }`}
                            style={{ transform: "translate(-50%, -50%)" }}
                        >
                            <p className="font-medium text-center text-2xl dark:text-white">
                                Schlagtausch?
                            </p>
                            <div className="flex justify-between mt-4 gap-4">
                                <button
                                    onClick={schlagTauschJaHandler}
                                    className="btn bg-primary dark:bg-primaryDark text-white dark:text-black text-center"
                                >
                                    Ja
                                </button>
                                <button
                                    onClick={schlagTauschNeinHandler}
                                    className="btn bg-bgWhite dark:bg-bgDark text-black dark:text-white text-center "
                                >
                                    Nein
                                </button>
                            </div>
                        </div>
                        {/*fenster für  schänere*/}
                        <div
                            className={`fixed top-1/2 left-1/2 xl:ml-20 xl:mt-32 bg-white dark:bg-whiteDark p-6 rounded-st border-gray-400 border-4 z-10 ${
                                isSchönereWindows ? "block" : "hidden"
                            }`}
                            style={{ transform: "translate(-50%, -50%)" }}
                        >
                            <p className="font-medium text-center text-2xl dark:text-white">
                                Schönere?
                            </p>
                            <div className="flex justify-between mt-4 gap-4">
                                <button
                                    onClick={schönereJaHandler}
                                    className="btn bg-primary dark:bg-primaryDark text-white dark:text-black text-center"
                                >
                                    Ja
                                </button>
                                <button
                                    onClick={schönereNeinHandler}
                                    className="btn bg-bgWhite dark:bg-bgDark text-black dark:text-white text-center "
                                >
                                    Nein
                                </button>
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
                                        isSchönereWindows
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
                                          <div
                                              key={Math.random() * 1000}
                                              onClick={selectCardHandler}
                                              className={`h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white ${
                                                  hover
                                                      ? "hover:border-secondary dark:hover:border-secondaryDark border-4 border-transparent cursor-pointer"
                                                      : null
                                              } ${
                                                  element.name.includes(
                                                      "Schell"
                                                  )
                                                      ? "bg-yellow-200"
                                                      : element.name.includes(
                                                            "Laub"
                                                        )
                                                      ? "bg-green-300"
                                                      : element.name.includes(
                                                            "Eichel"
                                                        )
                                                      ? "bg-yellow-800"
                                                      : element.name.includes(
                                                            "Herz"
                                                        )
                                                      ? "bg-red-500"
                                                      : element.name.includes(
                                                            "Welli"
                                                        )
                                                      ? "bg-yellow-200"
                                                      : null
                                              }`}
                                          >
                                              {element.name}
                                          </div>
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
                        Dieser Raum existiert nicht
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
