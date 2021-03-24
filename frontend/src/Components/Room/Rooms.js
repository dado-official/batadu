import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Room from "./Room";
import Create from "../../assets/create-24px.svg";
import SearchInput from "../Shared/SearchInput";

const Rooms = ({ setUrl, isDarkmode, socket }) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        //socket.on("rooms", (rooms) => console.log(rooms));
    }, []);

    useEffect(() => {
        setUrl("/");
    }, []);
    return (
        <div className="w-1450 max-w-1/9 mx-auto mt-8 mb-16">
            <div className="flex justify-between md:mt-8 flex-col-reverse md:flex-row">
                <h3 className="font-semibold text-3xl mb-6 dark:text-white">
                    Offene Spiele
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
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Holunderyogele"
                    team2_0="Frangio"
                    team2_1="Mangio"
                    isDarkmode={isDarkmode}
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1=""
                    team2_0="Frangio"
                    team2_1="Mangio"
                    isDarkmode={isDarkmode}
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                    isDarkmode={isDarkmode}
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                    isDarkmode={isDarkmode}
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                    isDarkmode={isDarkmode}
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                    isDarkmode={isDarkmode}
                />
            </div>
        </div>
    );
};

export default Rooms;
