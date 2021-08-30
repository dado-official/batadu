import React, { Fragment, useEffect, useState } from "react";
import Team from "./Team";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import { XIcon } from "@heroicons/react/solid";

const SelectTeam = ({ setShow, setUrl, isDarkmode, setTeam, team, room }) => {
    const [selected, setSelected] = useState(1);
    const [data, setData] = useState({
        users: ["Hirte", "Seppl"],
        team2: 2,
        team1: 8,
    });
    const [clicked, setClicked] = useState(false);

    const handlenOnClick = () => {
        setClicked(true);
        setTeam(selected);
    };

    return (
        <Fragment>
            <div className="fixed flex justify-center items-center w-full z-50 h-full left-0 top-0 bg-darkBg backdrop-filter backdrop-blur">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setShow(false);
                    }}
                >
                    <div
                        className="flex relative bg-white p-10 rounded-st justify-center items-center flex-col m-auto max-w-1/9"
                        style={{ width: "30rem" }}
                    >
                        <h3 className="dark:text-white">Team aussuchen</h3>
                        <XIcon
                            className="h-5 absolute right-10 top-10 text-gray hover:text-whiteDark transition-all cursor-pointer"
                            onClick={() => {
                                setShow(false);
                            }}
                        />
                        <p className="text_small text-gray dark:text-gray-400 pt-2 text-center mb-8">
                            Clicken Sie auf das Team, den Sie betreten möchten
                            und dann auf Teilnehmen
                        </p>
                        <Team
                            spieler1={data.users[0]}
                            spieler2={data.users[2]}
                            team={1}
                            punkte={data.team1}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Team
                            spieler1={data.users[1]}
                            spieler2={data.users[3]}
                            team={2}
                            punkte={data.team2}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <div
                            onClick={handlenOnClick}
                            className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
                        >
                            <p>Teilnehmen</p>
                        </div>
                        <p className="text_small pt-8 text-gray dark:text-gray-400">
                            Möchten Sie ein anderes Spiel beitreten?{" "}
                            <Link href="/spielen">
                                <span className="font-bold underline text-black dark:text-white">
                                    Zurück
                                </span>
                            </Link>
                        </p>
                    </div>
                </OutsideClickHandler>
            </div>
        </Fragment>
    );
};

export default SelectTeam;
