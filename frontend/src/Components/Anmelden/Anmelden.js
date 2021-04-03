import React, { useState, useEffect } from "react";
import Account from "../../assets/account_circle-24px.svg";
import Password from "../../assets/lock-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Anmelden = ({ setUrl, isDarkmode }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameHandler(e) {
        setUsername(e.target.value);
    }
    function passwordHandler(e) {
        setPassword(e.target.value);
    }
    function login() {
        let axiosConfig = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        };
        let data = {
            user: "benni",
            password: "hirte",
        };
        axios
            .post("http://10.10.30.218:42069/user/login", data, axiosConfig)
            .then((data) => {
                console.log(data);
            });
    }
    useEffect(() => {
        setUrl("Anmelden");
    });
    return (
        <div className="flex justify-center items-center flex-col m-auto w-96 max-w-1/9">
            <h1 className="font-bold text-7.5xl mb-4 mt-16 dark:text-white">
                Hallo
            </h1>
            {/*Input fields */}
            <h6 className="text-center text-2xl text-gray-500 dark:text-gray-300 w-10/12 mb-3.625rem">
                Melden Sie sich bei Ihrem Konto an
            </h6>
            <div
                className="w-full flex flex-col gap-6
            "
            >
                <div className="w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center">
                    <img
                        src={Account}
                        alt="Name"
                        className={`px-4 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <input
                        type="text"
                        className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white"
                        value={username}
                        onChange={usernameHandler}
                        placeholder="Username"
                    ></input>
                </div>
                <div className="w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center">
                    <img
                        src={Password}
                        alt="Name"
                        className={`px-4 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <input
                        type="password"
                        className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark text-white"
                        value={password}
                        onChange={passwordHandler}
                        placeholder="Password"
                    ></input>
                </div>
            </div>
            {/*Button + Zurück Link*/}
            <button
                onClick={login()}
                className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
            >
                Anmelden
            </button>
            <p className="text-sm mt-3.625rem text-gray-600 dark:text-gray-400 mb-16">
                Haben Sie kein Konto?{" "}
                <Link to="/registrieren">
                    <span className="font-bold underline text-black dark:text-white">
                        Erstellen
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default Anmelden;
