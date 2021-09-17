import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { Fragment } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

const Room = ({ roomName, score1, score2, users, setSelectTeam, config }) => {
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

    const countPlayers = () => {
        let count = 0,
            i = users.length;

        while (i--) {
            if (typeof users[i] === "undefined" || users[i] === null) count++;
        }
        return users.length - count;
    };

    return (
        <div className="w-full bg-white shadow hover:shadow-md transition-all p-5 rounded flex gap-16 border-2 border-transparent ">
            <div className="flex-1">
                <div className="mb-1 flex gap-6 text_small text-borderGray">
                    <p>
                        Bis:{" "}
                        <span className="text-black font-medium">
                            {config.punkte}
                        </span>
                    </p>
                    <p>
                        Bei Spieler Disconnect, Runde:{" "}
                        <span className="text-black font-medium">
                            {config.runde}
                        </span>
                    </p>
                    <p>
                        Welli hat einen Guten:{" "}
                        <span className="text-black font-medium">
                            {config.gute}
                        </span>
                    </p>
                    <p>
                        Wartezeit nach Stich:{" "}
                        <span className="text-black font-medium">
                            {config.warten}
                        </span>{" "}
                        Sekunden
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <h5 className="font-medium">{roomName}</h5>
                    {config.password && config.password !== "" && (
                        <LockClosedIcon className="h-4" />
                    )}
                    <p className="flex-1 text-right">
                        {countPlayers()}/4 Spieler
                    </p>
                </div>
                <div className="flex gap-12 text-black">
                    <div className="w-full text_small mt-3 flex items-center gap-4">
                        {users[0] ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={users[0].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{users[0].username}</p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                        {users[2] ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={users[2].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{users[2].username}</p>
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
                        {users[1] ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={users[1].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{users[1].username}</p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                        {users[3] ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full -mr-2">
                                    <Image
                                        src={users[3].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p>{users[3].username}</p>
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
                    className=" bg-bgWhite hover:bg-buttonGray transition-all rounded py-1.5 px-4 w-44 cursor-pointer text-center"
                >
                    Beitreten
                </button>
                <Link href={`/spielen/${roomName}?mode=spectate`}>
                    <button className="">Zuschauen</button>
                </Link>
            </div>
        </div>
    );
};

export default Room;
