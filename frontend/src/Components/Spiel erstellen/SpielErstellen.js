import React, { useEffect, useState } from "react";
import Create from "../../assets/create-24px.svg";
import Create2 from "../../assets/add_circle-24px.svg";
import { Link, useHistory } from "react-router-dom";
import Name from "../../assets/drive_file_rename_outline-24px.svg";
import SelectElement from "../Shared/SelectElement";
import Switch from "./Switch";
import Lock from "../../assets/lock-24px.svg";
import axios from "axios";

const SpielErstellen = ({ setUrl, isDarkmode, socket }) => {
    const [spielName, setSpielName] = useState("");
    const [punkte, setPunkte] = useState("18");
    const [runde, setRunde] = useState("Abbrechen");
    const [password, setPassword] = useState("");
    const [spieler, setSpieler] = useState("4");
    const [modus, setModus] = useState("Blind");
    const [warten, setWarten] = useState("8");
    const [guten, setGuten] = useState("Ja");
    const [problem, setProblem] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setUrl("/");
    }, []);

    function spielNameHandler(e) {
        setSpielName(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function isPasswordHandler(e) {
        setIsPassword((prev) => !prev);
    }

    function createGame() {
        if (spielName === "" || spielName === " ") {
            setProblem("Spielname fehlt!");
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
                                name: spielName,
                                modus: modus,
                                isPassword: isPassword,
                                password: password,

                                runde: runde,
                                spieler: spieler,
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
        <div
            className="flex justify-center items-center flex-col m-auto max-w-1/9"
            style={{ width: "50rem" }}
        >
            <img
                src={Create}
                alt="Team"
                className={`h-16 sm:h-20 mt-8 md:mt-12 lg:mt-16 ${
                    isDarkmode ? "whiteSVG" : null
                }`}
            />
            <h3 className="font-bold text-4xl pt-4 mb-8 dark:text-white">
                Spiel erstellen
            </h3>
            {/*Input fields */}
            <div className="flex gap-8 w-full flex-wrap lg:flex-nowrap mb-8">
                <div
                    className="w-full flex flex-col gap-6 dark:text-white
            "
                >
                    <div className="w-full">
                        <p className="font-bold text-left mb-2">Spielname</p>
                        <div className="bg-white rounded-st py-2 flex items-center dark:bg-whiteDark">
                            <img
                                src={Name}
                                alt="Name"
                                className={`px-4 ${
                                    isDarkmode ? "whiteSVG" : null
                                }`}
                            />
                            <input
                                type="text"
                                className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white"
                                value={spielName}
                                onChange={spielNameHandler}
                                placeholder="Spielname"
                            ></input>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-bold text-left mb-2">Spielen bis</p>
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
                        <p className="font-bold text-left mb-2">
                            Spieler 🚧 (Aktuell nur 4)
                        </p>
                        <div className="flex justify-between gap-4">
                            <SelectElement
                                value="4"
                                setSelectValue={setSpieler}
                                selectValue={spieler}
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <p className="font-bold text-left mb-2">Password</p>
                        <div className="relative flex items-center w-full gap-8">
                            <Switch isPasswordHandler={isPasswordHandler} />
                            <div
                                className={`bg-white dark:bg-whiteDark rounded-st py-2 flex items-center w-full transition-all ${
                                    !isPassword
                                        ? "cursor-not-allowed opacity-0"
                                        : null
                                }`}
                            >
                                <img
                                    src={Lock}
                                    alt="Name"
                                    className={`px-4 w-12 ${
                                        isDarkmode ? "whiteSVG" : null
                                    }`}
                                />
                                {isPassword ? (
                                    <input
                                        type="Password"
                                        className={`focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white`}
                                        value={password}
                                        onChange={passwordHandler}
                                        placeholder="Password"
                                    ></input>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6 dark:text-white text-text">
                    <div className="w-full">
                        <p className="font-bold text-left mb-2">Modus</p>
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
                        <p className="font-bold text-left mb-2">
                            Welli hat einen Guten 🚧 (Aktuell nur Ja)
                        </p>
                        <div className="flex justify-between gap-4">
                            <SelectElement
                                value="Ja"
                                setSelectValue={setGuten}
                                selectValue={guten}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-bold text-left mb-2">
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
                    <div className="w-full">
                        <p className="font-bold text-left mb-2">
                            Bei Spieler Disconnect, Runde: 🚧 (Pausieren mit
                            Bugs)
                        </p>
                        <div className="flex justify-between gap-4">
                            <SelectElement
                                value="Pausieren"
                                setSelectValue={setRunde}
                                selectValue={runde}
                            />
                            <SelectElement
                                value="Abbrechen"
                                setSelectValue={setRunde}
                                selectValue={runde}
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
                className="bg-primary btnPrimary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
            >
                <img
                    src={Create2}
                    alt="Spielen"
                    className={`${!isDarkmode ? "whiteSVG" : null}`}
                />
                <p>Erstellen</p>
            </button>
            <p className="text-sm pt-8 text-gray-600 dark:text-gray-400 mb-8 md:mb-12 lg:mb-16">
                Möchten Sie ein Spiel beitreten?{" "}
                <Link to="/spielen">
                    <span className="font-bold underline text-black dark:text-white">
                        Zurück
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default SpielErstellen;
