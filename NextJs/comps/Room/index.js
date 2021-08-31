import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { Fragment } from "react";

const Room = ({
    roomName,
    score1,
    score2,
    team1_0,
    team1_1,
    team2_0,
    team2_1,
    setSelectTeam,
}) => {
    const router = useRouter();

    const handleOnClick = () => {
        console.log(`${process.env.GAMEAPI_URL}/room/select/${roomName}`);
        axios
            .get(`${process.env.GAMEAPI_URL}/room/select/${roomName}`)
            .then((res) => {
                if (res.data) {
                    //router.push(`/team/${roomName}`);
                    setSelectTeam({ show: true, room: roomName });
                } else {
                    router.push(`/spielen/${roomName}`);
                }
            });
    };

    return (
        <div className="w-full bg-white shadow hover:shadow-lg transition-all py-4 px-5 rounded-st flex gap-16">
            <div className="flex-1">
                <div className="mb-1 flex gap-6 text_small text-borderGray">
                    <p>Bis: 18</p>
                    <p>Bei Spieler Disconnect, Runde: Pausieren</p>
                    <p>Welli hat einen Guten: Nein</p>
                    <p>Wartezeit nach Stich: 8 Sekunden</p>
                </div>
                <div className="flex justify-between">
                    <h5 className="">{roomName}</h5>
                    <p className="">2/4 Spieler</p>
                </div>
                <div className="flex gap-12 text-black">
                    <div className="w-full text_small mt-3 flex items-center gap-4">
                        <p>Team 1:</p>
                        {team1_0 ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={team1_0.userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{team1_0.username}</p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                        {team1_1 ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={team1_1.userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{team1_1.username}</p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                        <p className="flex-1 text-right text-base text-black">
                            {score1}
                        </p>
                    </div>
                    <div className="w-full text_small mt-3 flex items-center gap-4">
                        <p className="flex-1 text-base text-black">{score2}</p>
                        <p>Team 2:</p>
                        {team2_0 ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={team2_0.userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{team2_0.username}</p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                        {team2_1 ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={team2_1.userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{team2_1.username}</p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <button
                    onClick={handleOnClick}
                    className=" bg-bgWhite hover:bg-buttonGray transition-all rounded-st py-1.5 px-4 w-44 cursor-pointer text-center"
                >
                    Beitreten
                </button>
                <button className="">Zuschauen</button>
            </div>
        </div>
    );
};

export default Room;
