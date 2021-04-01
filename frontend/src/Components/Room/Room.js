import React from "react";
import Arrow from "../../assets/play_arrow-24px.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Room = ({
    roomName,
    score1,
    score2,
    team1_0,
    team1_1,
    team2_0,
    team2_1,
    isDarkmode,
    setTeam,
}) => {
    const history = useHistory();
    const handleOnClick = () => {
        axios
            .get(`http://127.0.0.1:3003/room/select/${roomName}`)
            .then((res) => {
                if (res.data) {
                    history.push(`/team/${roomName}`);
                } else {
                    history.push(`/spielen/${roomName}`);
                }
            });
    };

    return (
        <div className="w-full">
            <p className="bg-roomGray dark:bg-roomBlack dark:text-white text-center py-2 rounded-t-st font-bold border-gray-400 border-b-2 dark:border-black">
                {roomName}
            </p>
            <div className="flex bg-white dark:bg-whiteDark justify-center dark:text-white">
                <div className="flex flex-1 flex-col py-3 px-2 border-gray-400 dark:border-black border-r-2">
                    <p
                        className={`w-12ch text-14 text-center ${
                            team1_0 === undefined || team1_0 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team1_0 === undefined || team1_0 === null
                            ? "offen"
                            : team1_0}
                    </p>
                    <p className="text-right mr-2 text-xl font-medium text-primary dark:text-primaryDark">
                        {score1}
                    </p>
                    <p
                        className={`w-12ch text-14 text-center ${
                            team1_1 === undefined || team1_1 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team1_1 === undefined || team1_1 === null
                            ? "offen"
                            : team1_1}
                    </p>
                </div>
                <div className="flex flex-1 flex-col py-3 px-2">
                    <p
                        className={`w-12ch text-14 text-center ml-auto ${
                            team2_0 === undefined || team2_0 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team2_0 === undefined || team2_0 === null
                            ? "offen"
                            : team2_0}
                    </p>
                    <p className="text-left ml-2 text-xl font-medium text-primary dark:text-primaryDark">
                        {score2}
                    </p>
                    <p
                        className={`w-12ch text-14 text-center ml-auto ${
                            team2_1 === undefined || team2_1 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team2_1 === undefined || team2_1 === null
                            ? "offen"
                            : team2_1}
                    </p>
                </div>
            </div>
            <button
                onClick={handleOnClick}
                className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-b-st flex justify-center gap-2 cursor-pointer"
            >
                <img
                    src={Arrow}
                    alt="Spielen"
                    className={`${!isDarkmode ? "whiteSVG" : null}`}
                />
                <p>Teilnehmen</p>
            </button>
        </div>
    );
};

export default Room;
