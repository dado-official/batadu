import React, { useState, useEffect } from "react";
import Password from "../../assets/lock-24px.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function SpielPassword({
    isDarkmode,
    setIsPassword,
    joinGame,
    room,
}) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function clickHandler() {
        axios
            .get(
                `${process.env.REACT_APP_GAME_SERVER_API}/room/password/${room}/${password}`
            )
            .then((res) => {
                if (res.data) {
                    setIsPassword(false);
                    joinGame();
                } else {
                    setError("Das Passwort ist falsch");
                }
            });
    }
    return (
        <div className="mt-32 flex justify-center items-center flex-col m-auto w-96 max-w-1/9">
            <h6 className="text-center text-3xl dark:text-white w-10/12 mb-3.625rem">
                Dieses Spiel benötigt einen Password um beizutreten
            </h6>
            <div
                className="w-full flex flex-col gap-6
            "
            >
                <div className="w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center">
                    <img
                        src={Password}
                        alt="Name"
                        className={`px-4 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <input
                        type="password"
                        className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white"
                        value={password}
                        onChange={passwordHandler}
                        placeholder="Password"
                    ></input>
                </div>
            </div>
            <p
                className={`${
                    error === "" ? "hidden" : "block"
                } text-xm text-primary dark:text-primaryDark mt-4`}
            >
                {error}
            </p>
            {/*Button + Zurück Link*/}
            <button
                onClick={clickHandler}
                className="bg-primary btnPrimary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
            >
                Beitreten
            </button>
            <p className="text-sm mt-3.625rem text-gray-600 dark:text-gray-400 mb-16">
                Möchten Sie einem anderen Spiel beitreten?{" "}
                <Link to="/spielen">
                    <span className="font-bold underline text-black dark:text-white">
                        Zurück
                    </span>
                </Link>
            </p>
        </div>
    );
}
