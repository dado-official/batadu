import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Room from "./Room";
import Create from "../../assets/create-24px.svg";
import SearchInput from "../Shared/SearchInput";

const Rooms = ({ setUrl, isDarkmode, socket, setTeam }) => {
    const [search, setSearch] = useState("");
    const [rooms, setRooms] = useState([]);
    const [showRooms, setShowRooms] = useState([]);

    useEffect(() => {
        socket.emit("getRooms");
        socket.on("rooms", (data) => {
            console.log("Rooms");
            console.log(data);
            setRooms(data);
        });
        setTeam(0);
    }, []);

    useEffect(() => {
        if (search === "" || search === " ") {
            setShowRooms(rooms);
        } else {
            setShowRooms(
                rooms.filter((element) =>
                    element.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [rooms, search]);

    useEffect(() => {
        setUrl("/");
    }, []);
    return (
        <div className="w-1450 max-w-1/9 mx-auto mt-8 mb-16">
            <div className="flex justify-between md:mt-8 flex-col-reverse md:flex-row">
                <h3 className="font-semibold text-3xl mb-6 dark:text-white">
                    Spiele
                </h3>
                <div className="mb-6 w-full md:w-max ">
                    <SearchInput
                        search={search}
                        setSearch={setSearch}
                        isDarkmode={isDarkmode}
                    />
                </div>
                <Link to="/spielen/erstellen" className="w-full md:w-max">
                    <button className="w-full md:w-max  py-1.5 rounded-st bg-primary dark:bg-primaryDark text-white dark:text-black mb-6 flex justify-center px-8">
                        <img
                            src={Create}
                            alt="Erstellen"
                            className={`mr-2 ${
                                !isDarkmode ? "whiteSVG" : null
                            }`}
                        />
                        Spiel erstellen
                    </button>
                </Link>
            </div>
            <div className="grid gap-x-16 gap-y-8 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {showRooms.map((element) => {
                    return (
                        <Room
                            roomName={element.name}
                            score1={element.team1}
                            score2={element.team2}
                            team1_0={element.users[0]}
                            team1_1={element.users[2]}
                            team2_0={element.users[1]}
                            team2_1={element.users[3]}
                            isDarkmode={isDarkmode}
                            key={Math.random() * 1000}
                            setTeam={setTeam}
                        />
                    );
                })}
            </div>
            {showRooms.length === 0 ? (
                <p className="mt-4 dark:text-white">
                    Keine Spiele gefunden, Sie können selbt ein Spiel erstellen
                    indem Sie auf{" "}
                    <span className="font-bold">Spiel erstellen</span> drücken
                </p>
            ) : null}
        </div>
    );
};

export default Rooms;
