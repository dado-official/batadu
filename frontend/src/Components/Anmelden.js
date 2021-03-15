import React, { useState } from "react";
import Account from "../assets/account_circle-24px.svg";
import Password from "../assets/lock-24px.svg";
import { Link } from "react-router-dom";

const Anmelden = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameHandler(e) {
        setUsername(e.target.value);
    }
    function passwordHandler(e) {
        setPassword(e.target.value);
    }
    return (
        <div
            className="flex justify-center items-center flex-col m-auto"
            style={{ width: "23rem" }}
        >
            <h1 className="font-bold text-7.5xl mb-4 mt-16">Hallo</h1>
            {/*Input fields */}
            <h6 className="text-center text-2xl text-gray-500 w-10/12 mb-3.625rem">
                Melden Sie sich bei Ihrem Konto an
            </h6>
            <div
                className="w-full flex flex-col gap-6
            "
            >
                <div className="w-full bg-white rounded-st py-2 flex items-center">
                    <img src={Account} alt="Name" className="px-4" />
                    <input
                        type="text"
                        className="focus:outline-none flex-1 mr-4"
                        value={username}
                        onChange={usernameHandler}
                        placeholder="Username"
                    ></input>
                </div>
                <div className="w-full bg-white rounded-st py-2 flex items-center">
                    <img src={Password} alt="Name" className="px-4" />
                    <input
                        type="password"
                        className="focus:outline-none flex-1 mr-4"
                        value={password}
                        onChange={passwordHandler}
                        placeholder="Password"
                    ></input>
                </div>
            </div>
            {/*Button + Zurück Link*/}
            <button className="bg-primary text-white w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4">
                Anmelden
            </button>
            <p className="text-sm mt-3.625rem text-gray-600 mb-16">
                Haben Sie kein Konto?{" "}
                <Link to="/registrieren">
                    <span className="font-bold underline text-black">
                        Erstellen
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default Anmelden;
