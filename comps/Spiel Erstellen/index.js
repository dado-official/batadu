import React, { useEffect, useState } from "react";
import SelectElement from "../SelectElement";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

import { Fragment } from "react";

function SpielErstellen({ setShow }) {
    const [spielName, setSpielName] = useState("");
    const [punkte, setPunkte] = useState("18");
    const [runde, setRunde] = useState("Pausieren");
    const [password, setPassword] = useState("");
    const [isPassword, setIsPassword] = useState(true);
    const [spieler, setSpieler] = useState("4");
    const [modus, setModus] = useState("Blind");
    const [warten, setWarten] = useState("10");
    const [guten, setGuten] = useState("Nein");
    const [problem, setProblem] = useState("");

    function spielNameHandler(e) {
        setSpielName(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function isPasswordHandler(e) {
        setIsPassword((prev) => !prev);
    }

    return (
        <Fragment>
            <div className="fixed flex justify-center items-center w-full z-50 h-full left-0 top-0 bg-darkBg backdrop-filter backdrop-blur">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setShow(false);
                    }}
                >
                    <div
                        className="flex relative rounded-st p-10 bg-white  justify-center items-center flex-col m-auto max-w-1/9"
                        style={{ width: "50rem" }}
                    >
                        <h3 className="mb-8 dark:text-white ">
                            Spiel erstellen
                        </h3>
                        <XIcon
                            className="h-5 absolute right-10 top-10 text-gray hover:text-whiteDark transition-all cursor-pointer"
                            onClick={() => {
                                setShow(false);
                            }}
                        />
                        {/*Input fields */}
                        <div className="flex gap-8 w-full">
                            <div className="w-full flex flex-col gap-6 dark:text-white text-gray">
                                <div className="w-full">
                                    <p className="text-left mb-1">Spielname*</p>
                                    <input
                                        type="text"
                                        className="input"
                                        value={spielName}
                                        onChange={spielNameHandler}
                                        placeholder="Spielname"
                                    ></input>
                                </div>

                                <div className="w-full">
                                    <p className="text-left mb-1">
                                        Spielen bis
                                    </p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="11"
                                            setSelectValue={setPunkte}
                                            selectValue={punkte}
                                        />
                                        <SelectElement
                                            value="15"
                                            setSelectValue={setPunkte}
                                            selectValue={punkte}
                                        />
                                        <SelectElement
                                            value="18"
                                            setSelectValue={setPunkte}
                                            selectValue={punkte}
                                        />
                                        <SelectElement
                                            value="21"
                                            setSelectValue={setPunkte}
                                            selectValue={punkte}
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <p className="text-left mb-1">Spieler</p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="2"
                                            setSelectValue={setSpieler}
                                            selectValue={spieler}
                                        />
                                        <SelectElement
                                            value="4"
                                            setSelectValue={setSpieler}
                                            selectValue={spieler}
                                        />
                                    </div>
                                </div>

                                <div className="w-full mb-8">
                                    <p className="text-left mb-1">Password</p>
                                    <div className="relative flex items-center w-full gap-8">
                                        <input
                                            type="Password"
                                            className="input"
                                            value={password}
                                            onChange={passwordHandler}
                                            placeholder="Password"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-6 dark:text-white text-gray">
                                <div className="w-full">
                                    <p className="text-left mb-1">
                                        Bei Spieler Disconnect, Runde:
                                    </p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="Pausieren"
                                            setSelectValue={setRunde}
                                            selectValue={runde}
                                        />
                                        <SelectElement
                                            value="Abbrechnen"
                                            setSelectValue={setRunde}
                                            selectValue={runde}
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <p className="text-left mb-1">Modus</p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="Offen"
                                            setSelectValue={setModus}
                                            selectValue={modus}
                                        />
                                        <SelectElement
                                            value="Blind"
                                            setSelectValue={setModus}
                                            selectValue={modus}
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <p className="text-left mb-1">
                                        Welli hat einen Guten
                                    </p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="Ja"
                                            setSelectValue={setModus}
                                            selectValue={modus}
                                        />
                                        <SelectElement
                                            value="Nein"
                                            setSelectValue={setGuten}
                                            selectValue={guten}
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-left mb-1">
                                        Wartezeit nach Stich (Sekunden)
                                    </p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="6"
                                            setSelectValue={setWarten}
                                            selectValue={warten}
                                        />
                                        <SelectElement
                                            value="8"
                                            setSelectValue={setWarten}
                                            selectValue={warten}
                                        />
                                        <SelectElement
                                            value="10"
                                            setSelectValue={setWarten}
                                            selectValue={warten}
                                        />
                                        <SelectElement
                                            value="12"
                                            setSelectValue={setWarten}
                                            selectValue={warten}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p
                            className={`${
                                problem === "" ? "hidden" : "block"
                            } text-xm text-primary dark:text-primaryDark text-center`}
                        >
                            {problem}
                        </p>
                        {/*Button + Zurück Link*/}
                        <button className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4">
                            <p>Erstellen</p>
                        </button>
                        <p className="text-sm pt-8 text-gray-600 dark:text-gray-400">
                            Möchten Sie ein Spiel beitreten?{" "}
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
}

export default SpielErstellen;
