import React, { useEffect, useState, useRef } from "react";
import Tisch from "./Tisch";
import SpielInformations from "./SpielInformations";
import Chat from "./Chat";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Spiel = ({ setUrl, isDarkmode, socket }) => {
    const [geboten, setGeboten] = useState(2);
    const [schlag, setSchlag] = useState("Laub 7");
    const [trumpf, setTrumpf] = useState("Schell X");
    const [exist, setExist] = useState("");
    const [users, setUsers] = useState("");
    const [pos, setPos] = useState(undefined);
    const [karten, setKarten] = useState([]);
    const [alleKarten, setAlleKarten] = useState([]);

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
            setUsers(users);
            if (pos === undefined) {
                setPos(users.indexOf(username));
                console.log("pos SET!");
            }
        });
        socket.on("karten", (data) => {
            setAlleKarten(data);
        });
    }, []);

    useEffect(() => {
        console.log("pos? " + pos);
        if (pos !== undefined) {
            setKarten(alleKarten[pos]);
        }
    }, [alleKarten]);

    useEffect(() => {
        setUrl("/");
    }, []);

    function scrollToChatHandler() {
        chatRef.current.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToInfosHandler() {
        infosRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToSpielHandler() {
        spielRef.current.scrollIntoView({ behavior: "smooth" });
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
                            />
                        </div>
                        <div className="flex justify-between mt-28 md:mt-28 mb-16 flex-wrap">
                            <div className="flex justify-between md:flex-col gap-1 sm:gap-8 md:gap-2 w-full md:w-max mb-4 md:mb-0">
                                <button className="btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full">
                                    Bieten
                                </button>
                                <button className="btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white opacity-20 w-full">
                                    Schönere
                                </button>
                                <button className="btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white opacity-20 w-full">
                                    Schlagtausch
                                </button>
                            </div>
                            {/*my cards*/}
                            {karten.map((element) => {
                                console.log(element);
                                return (
                                    <div
                                        key={Math.random() * 1000}
                                        className="h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white"
                                    >
                                        {element.name}
                                    </div>
                                );
                            })}
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
