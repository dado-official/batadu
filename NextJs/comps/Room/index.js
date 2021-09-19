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
        <div className="w-full border-1 border-grayLight2 rounded p-4 transition-all">
            <p className="text_small font-medium text-text text-center mb-1">
                <span className="text-gray font-normal">Bis</span>{" "}
                {config.punkte}
                <span className="text-gray font-normal">,</span> {config.modus}
                <span className="text-gray font-normal">,</span>{" "}
                {countPlayers()}/4{" "}
                <span className="text-gray font-normal">Spieler</span>
            </p>
            <h5 className="text-center">{roomName}</h5>
            <div className="flex dark:bg-whiteDark justify-center dark:text-white">
                <div className="flex flex-1 flex-col py-3 px-2">
                    <div className="flex gap-4 text_small h-6">
                        {users[0] ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full">
                                    <Image
                                        src={users[0].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p className="whitespace-nowrap overflow-hidden text-text">
                                    {users[0].username}
                                </p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary">offen</p>
                        )}
                    </div>
                    <p className="text-right mr-2 text-xl text-black">
                        {score1}
                    </p>
                    <div className="flex gap-4 text_small h-6">
                        {users[2] ? (
                            <Fragment>
                                <div className="h-6 w-6 relative rounded-full">
                                    <Image
                                        src={users[2].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                                <p className="whitespace-nowrap overflow-hidden text-text">
                                    {users[2].username}
                                </p>
                            </Fragment>
                        ) : (
                            <p className="text-secondary ml-10 overflow-hidden whitespace-nowrap">
                                offen
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-1 flex-col py-3 px-2 text-right">
                    <div className="flex gap-4 text_small h-6">
                        {users[1] ? (
                            <Fragment>
                                <p className="flex-1 overflow-hidden whitespace-nowrap text-text">
                                    {users[1].username}
                                </p>
                                <div className="h-6 w-6 relative rounded-full">
                                    <Image
                                        src={users[1].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                            </Fragment>
                        ) : (
                            <p className="text-secondary mr-10 ml-auto">
                                offen
                            </p>
                        )}
                    </div>
                    <p className="text-left ml-2 text-xl text-black">
                        {score2}
                    </p>
                    <div className="flex gap-4 text_small h-6">
                        {users[3] ? (
                            <Fragment>
                                <p className="flex-1 overflow-hidden whitespace-nowrap text-text">
                                    {users[3].username}
                                </p>
                                <div className="h-6 w-6 relative rounded-full">
                                    <Image
                                        src={users[3].userPic}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />{" "}
                                </div>
                            </Fragment>
                        ) : (
                            <p className="text-secondary mr-10 ml-auto">
                                offen
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex mt-2">
                {countPlayers() < 4 && (
                    <button
                        onClick={handleOnClick}
                        className="hover:shadow flex-1 hover:ring-4 hover:ring-primaryLight transition-all rounded-l bg-primary text-white py-1.5 px-4 cursor-pointer text-center"
                    >
                        Beitreten
                    </button>
                )}
                <button className="flex-1 border-1 transition-all hover:shadow hover:ring-4 hover:ring-light border-grayLight2 rounded-r py-1.5 text-grayLight px-4">
                    <Link href={`/spielen/${roomName}?mode=spectate`}>
                        Zuschauen
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Room;
