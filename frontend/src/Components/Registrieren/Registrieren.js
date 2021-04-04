import React, { useState, useEffect } from "react";
import Account from "../../assets/account_circle-24px.svg";
import Password from "../../assets/lock-24px.svg";
import Email from "../../assets/contact_mail-24px.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import md6 from "md6-hash";

const Registrieren = ({
    setUrl,
    isDarkmode,
    setIsLoggedIn,
    setUsernameApp,
}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    function usernameHandler(e) {
        setUsername(e.target.value);
    }
    function emailHandler(e) {
        setEmail(e.target.value);
    }
    function passwordHandler(e) {
        setPassword(e.target.value);
    }
    function passwordConfirmHandler(e) {
        setPasswordConfirm(e.target.value);
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function register() {
        if (username === "" || username === " ") {
            setError("Der Benutzername fehlt");
        } else if (password === "" || password === " ") {
            setError("Das Password fehlt");
        } else if (password !== passwordConfirm) {
            setError("Die Passwörter stimmen nicht überein");
        } else if (username.length > 15) {
            setError("Der Benutzername ist zu groß");
        } else if (password.length < 8) {
            setError("Ihr Password muss mindestens 8 Zeichen groß sein");
        } else if (password.search(/[a-z]/i) < 0) {
            setError("Ihr Password muss mindestens ein Buchstabe beinhalten");
        } else if (password.search(/[0-9]/) < 0) {
            setError("Ihr Password muss mindestens ein Zeichen haben");
        } else if (!validateEmail(email)) {
            setError("Ihre Email ist nicht gültig");
        } else if (username === "System" || username === "Ich") {
            setError("Dieser Benutzername ist verboten");
        } else {
            let axiosConfig = {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                },
            };
            let data = {
                params: {
                    username: username,
                    email: email,
                },
            };
            console.log(data);
            axios
                .get(`http://10.10.30.218:42069/user/check`, data, axiosConfig)
                .then((response) => {
                    let data = {
                        username: username,
                        password: md6(password),
                        email: email,
                    };
                    console.log(data);
                    axios
                        .post(
                            "http://10.10.30.218:42069/register",
                            data,
                            axiosConfig
                        )
                        .then((response) => {
                            setUsernameApp(username);
                            localStorage.setItem("username", username);
                            localStorage.setItem("password", md6(password));
                            setIsLoggedIn(true);
                            console.log(response);
                            history.push("/spielen");
                        })
                        .catch((error) => {
                            setError("Dieser Benutzername gibt es schon");
                        });
                })
                .catch((error) => {
                    if (error.response.data.taken === "username") {
                        setError(
                            "Dieser Benutzername existiert schon, Sie müssen einen anderen wählen"
                        );
                    } else if (error.response.data.taken === "email") {
                        setError(
                            "Diese Email wurde schon benutzt, Sie müssen eine andere Email nehmen"
                        );
                    } else {
                        setError(
                            "Email und Benutzername wurden schon benutzt, wählen Sie etwas anderes"
                        );
                    }
                    console.log(error.response.data);
                });
        }
    }
    useEffect(() => {
        setUrl("Registrieren");
    });
    return (
        <div className="flex justify-center items-center flex-col m-auto w-96 max-w-1/9">
            <h1 className="font-bold text-6xl sm:text-7.5xl mb-4 mt-16 dark:text-white">
                Wilkommen
            </h1>
            {/*Input fields */}
            <h6 className="text-center text-2xl text-gray-500 dark:text-gray-300 w-10/12 mb-3.625rem">
                Erstellen Sie einen Konto
            </h6>
            <div
                className="w-full flex flex-col gap-6
            "
            >
                <div className="w-full rounded-st py-2 flex items-center bg-white dark:bg-whiteDark">
                    <img
                        src={Account}
                        alt="Name"
                        className={`px-4 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <input
                        type="text"
                        className="focus:outline-none flex-1 mr-4 dark:text-white dark:bg-whiteDark"
                        value={username}
                        onChange={usernameHandler}
                        placeholder="Username"
                    ></input>
                </div>
                <div className="w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center">
                    <img
                        src={Email}
                        alt="Email"
                        className={`px-4 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <input
                        type="text"
                        className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white"
                        value={email}
                        onChange={emailHandler}
                        placeholder="Email"
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
                        className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white"
                        value={passwordConfirm}
                        onChange={passwordConfirmHandler}
                        placeholder="Password"
                    ></input>
                </div>
                <div className="w-full bg-white rounded-st py-2 flex items-center dark:bg-whiteDark">
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
                        placeholder="Password bestätigen"
                    ></input>
                </div>
            </div>
            <p
                className={`${
                    error === "" ? "hidden" : "block"
                } text-xm text-primary dark:text-primaryDark mt-4 text-center`}
            >
                {error}
            </p>
            {/*Button + Anmelde Link*/}
            <button
                onClick={register}
                className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
            >
                Registrieren
            </button>
            <p className="text-sm mt-3.625rem text-gray-600 dark:text-gray-400 mb-16">
                Haben Sie bereits einen Konto?{" "}
                <Link to="/anmelden">
                    <span className="font-bold underline text-black dark:text-white">
                        Anmelden
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default Registrieren;
