import React, { Fragment, useEffect, useState } from "react";
import Create from "../../assets/create-24px.svg";
import Create2 from "../../assets/add_circle-24px.svg";
import { Link, useHistory } from "react-router-dom";
import Name from "../../assets/drive_file_rename_outline-24px.svg";
import PunkteSelector from "../Shared/SelectElement";
import Switch from "./Switch";
import Lock from "../../assets/lock-24px.svg";
import axios from "axios";
import SelectElement from "../Shared/SelectElement";
import OutsideClickHandler from "react-outside-click-handler";

const SpielErstellen2 = ({ setShow, socket }) => {
    const [spielName, setSpielName] = useState("");
    const [punkte, setPunkte] = useState("18");
    const [runde, setRunde] = useState("Pausieren");
    const [password, setPassword] = useState("");
    const [spieler, setSpieler] = useState("4");
    const [modus, setModus] = useState("Blind");
    const [warten, setWarten] = useState("8");
    const [guten, setGuten] = useState("Nein");
    const [problem, setProblem] = useState("");

    const history = useHistory();

    function spielNameHandler(e) {
        setSpielName(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function createGame() {
        if (spielName === "" || spielName === " ") {
            setProblem("Der Spielname fehlt!");
        } else {
            if (spielName.length > 31) {
                setProblem("Spielname muss kleiner als 32 Zeichen sein!");
            } else {
                axios
                    .get(
                        `${process.env.REACT_APP_GAME_SERVER_API}/room/available/${spielName}`
                    )
                    .then((res) => {
                        console.log(res.data);
                        if (res.data) {
                            setProblem(
                                "Dieser Spielname existiert schon, wählen Sie einen anderer Name"
                            );
                        } else {
                            socket.emit("createRoom", {
                                spielerAnzahl: spieler,
                                punkte: punkte,
                                runde: runde,
                                spieler: spieler,
                                name: spielName,
                                modus: modus,
                                password: password,
                                modus: modus,
                                warten: warten,
                                gute: guten,
                            });
                            history.push(`/spielen/${spielName}`);
                        }
                    });
            }
        }
    }

    return (
        <Fragment>
            <div className="fixed flex justify-center items-center w-full z-10000 h-full left-0 top-0 bg-darkBg backdrop-filter backdrop-blur">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setShow(false);
                    }}
                >
                    <div
                        className="flex relative rounded-st p-10 bg-white  justify-center items-center flex-col m-auto max-w-1/9"
                        style={{ width: "50rem" }}
                    >
                        <h3 className="mb-8 dark:text-white text-3xl">
                            Spiel erstellen
                        </h3>

                        {/*Input fields */}
                        <div className="flex gap-8 w-full">
                            <div className="w-full flex flex-col gap-6 dark:text-white text-text">
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
                                    <p className="text-left mb-1">Spieler 🚧</p>
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
                                    <p className="text-left mb-1">
                                        Password 🚧
                                    </p>
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
                            <div className="w-full flex flex-col gap-6 dark:text-white text-text">
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
                                        Welli hat einen Guten 🚧
                                    </p>
                                    <div className="flex justify-between gap-4">
                                        <SelectElement
                                            value="Ja"
                                            setSelectValue={setGuten}
                                            selectValue={guten}
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
                        <button
                            onClick={createGame}
                            className="bg-primary btnPrimary shadow hover:shadow-md transition-all dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
                        >
                            <p>Erstellen</p>
                        </button>
                    </div>
                </OutsideClickHandler>
            </div>
        </Fragment>
    );
};

export default SpielErstellen2;
