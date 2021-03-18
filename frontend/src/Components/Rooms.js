import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Room from "./Room/Room";
import Create from "../assets/create-24px.svg";

const Rooms = ({ setUrl }) => {
    useEffect(() => {
        setUrl("/");
    }, []);
    return (
        <div className="w-1450 max-w-1/9 mx-auto mt-8">
            <div className="flex justify-between">
                <h3 className=" font-semibold text-3xl mt-8 mb-6">
                    Offene Spiele
                </h3>
                <Link to="/spielen/erstellen">
                    <button className="py-1.5 rounded-st bg-primary text-white mt-8 mb-6 flex justify-center px-8">
                        <img
                            src={Create}
                            alt="Erstellen"
                            className="whiteSVG mr-2 w-2/12"
                        />
                        Spiel erstellen
                    </button>
                </Link>
            </div>
            <div className="grid gap-x-16 gap-y-8 grid-flow-row grid-cols-4">
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1=""
                    team2_0="Frangio"
                    team2_1="Mangio"
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                />
                <Room
                    roomName="Hirte"
                    score1="2"
                    score2="2"
                    team1_0="Danjo"
                    team1_1="Frangio"
                    team2_0="Frangio"
                    team2_1="Mangio"
                />
            </div>
        </div>
    );
};

export default Rooms;
