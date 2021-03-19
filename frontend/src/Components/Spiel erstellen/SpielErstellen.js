import React, { useEffect, useState } from "react";
import Create from "../../assets/create-24px.svg";
import Create2 from "../../assets/add_circle-24px.svg";
import { Link } from "react-router-dom";
import Name from "../../assets/drive_file_rename_outline-24px.svg";
import PunkteSelector from "../Shared/SelectElement";
import Switch from "./Switch";
import Lock from "../../assets/lock-24px.svg";

const SpielErstellen = ({ setUrl }) => {
    const [spielName, setSpielName] = useState("");
    const [punkte, setPunkte] = useState("18");
    const [password, setPassword] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const [spieler, setSpieler] = useState("4");
    const [modus, setModus] = useState("Offen");

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

    return (
        <div
            className="flex justify-center items-center flex-col m-auto  w-96 max-w-1/9"
        >
            <img src={Create} alt="Team" className="h-16 sm:h-20 mt-8 md:mt-12 lg:mt-16" />
            <h3 className="font-bold text-4xl pt-4 mb-8">Spiel erstellen</h3>
            {/*Input fields */}
            <div
                className="w-full flex flex-col gap-6
            "
            >
                <div className="w-full">
                    <p className="font-bold text-left mb-2">Spielname</p>
                    <div className="bg-white rounded-st py-2 flex items-center">
                        <img src={Name} alt="Name" className="px-4" />
                        <input
                            type="text"
                            className="focus:outline-none flex-1 mr-4"
                            value={spielName}
                            onChange={spielNameHandler}
                            placeholder="Spielname"
                        ></input>
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-bold text-left mb-2">Modus</p>
                    <div className="flex justify-between gap-4 sm:gap-8">
                        <PunkteSelector
                            value="Offen"
                            setSelectValue={setModus}
                            selectValue={modus}
                        />
                        <PunkteSelector
                            value="Geschlossen"
                            setSelectValue={setModus}
                            selectValue={modus}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-bold text-left mb-2">Spielen bis</p>
                    <div className="flex justify-between gap-4 sm:gap-8">
                        <PunkteSelector
                            value="11"
                            setSelectValue={setPunkte}
                            selectValue={punkte}
                        />
                        <PunkteSelector
                            value="15"
                            setSelectValue={setPunkte}
                            selectValue={punkte}
                        />
                        <PunkteSelector
                            value="18"
                            setSelectValue={setPunkte}
                            selectValue={punkte}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-bold text-left mb-2">Spieler</p>
                    <div className="flex justify-between gap-4 sm:gap-8">
                        <PunkteSelector
                            value="2"
                            setSelectValue={setSpieler}
                            selectValue={spieler}
                        />
                        <PunkteSelector
                            value="4"
                            setSelectValue={setSpieler}
                            selectValue={spieler}
                        />
                    </div>
                </div>

                <div className="w-full mb-8">
                    <p className="font-bold text-left mb-2">Password</p>
                    <div className="relative flex items-center w-full gap-8">
                        <Switch isPasswordHandler={isPasswordHandler} />
                        <div
                            className={`bg-white rounded-st py-2 flex items-center w-full transition-all ${
                                !isPassword
                                    ? "cursor-not-allowed opacity-0"
                                    : null
                            }`}
                        >
                            <img src={Lock} alt="Name" className="px-4 w-12" />
                            {isPassword ? (
                                <input
                                    type="Password"
                                    className={`focus:outline-none flex-1 mr-4}`}
                                    value={password}
                                    onChange={passwordHandler}
                                    placeholder="Password"
                                ></input>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {/*Button + Zurück Link*/}
            <div className="bg-primary text-white w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4">
                <img src={Create2} alt="Spielen" className="whiteSVG" />
                <p>Erstellen</p>
            </div>
            <p className="text-sm pt-8 text-gray-600 mb-8 md:mb-12 lg:mb-16">
                Möchten Sie ein Spiel beitreten?{" "}
                <Link to="/spielen">
                    <span className="font-bold underline text-black">
                        Zurück
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default SpielErstellen;
