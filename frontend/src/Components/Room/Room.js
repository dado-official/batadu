import React from "react";
import Arrow from "../../assets/play_arrow-24px.svg";

const Room = ({
    roomName,
    score1,
    score2,
    team1_0,
    team1_1,
    team2_0,
    team2_1,
}) => {
    return (
        <div className="w-min">
            <p className="bg-roomGray text-center py-2 rounded-t-st font-bold border-gray-400 border-b-2">
                {roomName}
            </p>
            <div className="flex bg-white ">
                <div className="flex flex-col py-3 px-2 border-gray-400 border-r-2">
                    <p
                        className={`w-12ch text-14 text-center ${
                            team1_0 === "" ? "text-secondary underline" : null
                        }`}
                    >
                        {team1_0 === "" ? "offen" : team1_0}
                    </p>
                    <p className="text-right mr-2 text-xl font-medium text-primary">
                        {score1}
                    </p>
                    <p
                        className={`w-12ch text-14 text-center ${
                            team1_1 === "" ? "text-secondary underline" : null
                        }`}
                    >
                        {team1_1 === "" ? "offen" : team1_1}
                    </p>
                </div>
                <div className="flex flex-col py-3 px-2">
                    <p
                        className={`w-12ch text-14 text-center ${
                            team2_0 === "" ? "text-secondary underline" : null
                        }`}
                    >
                        {team2_0 === "" ? "offen" : team2_0}
                    </p>
                    <p className="text-left ml-2 text-xl font-medium text-primary">
                        {score2}
                    </p>
                    <p
                        className={`w-12ch text-14 text-center ${
                            team2_1 === "" ? "text-secondary underline" : null
                        }`}
                    >
                        {team2_1 === "" ? "offen" : team2_1}
                    </p>
                </div>
            </div>
            <div className="bg-primary text-white w-full py-2 rounded-b-st flex justify-center gap-2 cursor-pointer">
                <img src={Arrow} alt="Spielen" className="whiteSVG" />
                <p>Teilnehmen</p>
            </div>
        </div>
    );
};

export default Room;
