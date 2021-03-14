import React, { useEffect } from "react";
import Room from "./Room";

const Rooms = ({ setUrl }) => {
    useEffect(() => {
        setUrl("/");
    }, []);
    return (
        <div className="w-1450 max-w-1/9 mx-auto mt-8">
            <h3 className=" font-semibold text-3xl mt-8 mb-6">Offene Spiele</h3>
            <div className="grid gap-8 grid-flow-row grid-cols-4">
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
