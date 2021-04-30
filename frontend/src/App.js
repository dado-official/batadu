import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import Rooms from "./Components/Room/Rooms";
import Spiel from "./Components/Spiel/Spiel";
import Sidebar from "./Components/Sidebar/Sidebar";
import SelectTeam from "./Components/Spiel/SelectTeam";
import SpielErstellen from "./Components/Spiel erstellen/SpielErstellen";
import Anmelden from "./Components/Anmelden/Anmelden";
import Registrieren from "./Components/Registrieren/Registrieren";
import Profil from "./Components/Profil/Profil";
import Rangliste from "./Components/Rangliste/Rangliste";
import ServerDown from "./Components/ServerDown/ServerDown";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
let socket = io("http://82.165.104.152:8080");

function App() {
    const [url, setUrl] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isServer, setIsServer] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkmode, setIsDarkmode] = useState(false);
    const [team, setTeam] = useState(0);
    const [username, setUsername] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [userLevel, setUserLevel] = useState(0);
    const [reconnect, setReconnect] = useState(false);

    useEffect(() => {
        socket.on("connect_failed", () => {
            console.log("Fella");
        });
        loadDarkmode();
        loadUser();
    }, []);

    useEffect(() => {
        if (reconnect) {
            socket = io("http://82.165.104.152:8080");
        }
    }, [reconnect]);

    useEffect(() => {
        //enable or disable darkmode
        if (isDarkmode) {
            document.getElementsByTagName("html")[0].classList.add("dark");
            document.body.classList.remove("scrollWhite");
            document.body.classList.add("scrollDark");
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark");
            document.body.classList.add("scrollWhite");
            document.body.classList.remove("scrollDark");
        }
        localStorage.setItem("darkmode", isDarkmode);
    }, [isDarkmode]);

    function loadDarkmode() {
        let value = localStorage.getItem("darkmode");
        if (value === undefined) return;
        if (value == "true") {
            setIsDarkmode(true);
        } else {
            setIsDarkmode(false);
        }
    }
    function loadUser() {
        let user = localStorage.getItem("username");
        if (user === undefined || user === "") {
            setLoaded(true);
            return;
        }

        let password = localStorage.getItem("password");
        if (password === undefined || password === "") {
            setLoaded(true);
            return;
        }

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        };
        let data = {
            params: {
                username: user,
                password: password,
            },
        };
        axios
            .get("http://82.165.104.152:42069/user/login", data, axiosConfig)
            .then((response) => {
                setUsername(user);
                setIsLoggedIn(true);
                axios
                    .get(
                        "http://82.165.104.152:42069/user/level",
                        { params: { username: user } },
                        axiosConfig
                    )
                    .then((res) => {
                        setUserLevel(res.data.currentlevel.nr);
                        setLoaded(true);
                    });
            })
            .catch(() => {
                setLoaded(true);
            });
    }

    function logout(history) {
        setUsername("");
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        setIsLoggedIn(false);
        history.push("/anmelden");
    }

    return (
        <Router>
            {!isServer ? <ServerDown isDarkmode={isDarkmode} /> : null}
            {loaded ? (
                <Navbar
                    url={url}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isDarkmode={isDarkmode}
                    setIsDarkmode={setIsDarkmode}
                    username={username}
                    logout={logout}
                    level={userLevel}
                />
            ) : null}
            {loaded ? (
                <Sidebar
                    url={url}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isDarkmode={isDarkmode}
                    setIsDarkmode={setIsDarkmode}
                    username={username}
                    logout={logout}
                    level={userLevel}
                />
            ) : null}
            {loaded ? (
                <Switch>
                    <Route path={["/", "/spielen"]} exact>
                        {isLoggedIn ? (
                            <Rooms
                                setUrl={setUrl}
                                socket={socket}
                                isDarkmode={isDarkmode}
                                setTeam={setTeam}
                            />
                        ) : (
                            <Homepage setUrl={setUrl} isDarkmode={isDarkmode} />
                        )}
                    </Route>
                    <Route path="/spielen/erstellen">
                        {isLoggedIn ? (
                            <SpielErstellen
                                setUrl={setUrl}
                                socket={socket}
                                isDarkmode={isDarkmode}
                            />
                        ) : (
                            <Redirect to="/anmelden" />
                        )}
                    </Route>
                    <Route path="/spielen/:room">
                        {isLoggedIn ? (
                            <Spiel
                                setUrl={setUrl}
                                socket={socket}
                                isDarkmode={isDarkmode}
                                team={team}
                                username={username}
                                setReconnect={setReconnect}
                            />
                        ) : (
                            <Redirect to="/anmelden" />
                        )}
                    </Route>
                    <Route path="/rangliste">
                        {isLoggedIn ? (
                            <Rangliste
                                setUrl={setUrl}
                                isDarkmode={isDarkmode}
                                isLoggedIn={isLoggedIn}
                            />
                        ) : (
                            <Redirect to="/anmelden" />
                        )}
                    </Route>
                    <Route path="/team/:room">
                        {isLoggedIn ? (
                            <SelectTeam
                                setUrl={setUrl}
                                isDarkmode={isDarkmode}
                                setTeam={setTeam}
                                team={team}
                            />
                        ) : (
                            <Redirect to="/anmelden" />
                        )}
                    </Route>
                    <Route path="/profile/:username">
                        {isLoggedIn ? (
                            <Profil setUrl={setUrl} isDarkmode={isDarkmode} />
                        ) : (
                            <Redirect to="/anmelden" />
                        )}
                    </Route>
                    <Route path="/anmelden">
                        <Anmelden
                            setUrl={setUrl}
                            isDarkmode={isDarkmode}
                            setIsLoggedIn={setIsLoggedIn}
                            setUsernameApp={setUsername}
                        />
                    </Route>
                    <Route path="/registrieren">
                        <Registrieren
                            setUrl={setUrl}
                            isDarkmode={isDarkmode}
                            setIsLoggedIn={setIsLoggedIn}
                            setUsernameApp={setUsername}
                        />
                    </Route>
                </Switch>
            ) : null}
            {loaded ? <Footer isDarkmode={isDarkmode} /> : null}
            {!loaded ? (
                <div
                    className="lds-ellipsis fixed top-1/2 left-1/2 mt-4.5rem"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <div className="bg-primary dark:bg-primaryDark"></div>
                    <div className="bg-primary dark:bg-primaryDark"></div>
                    <div className="bg-primary dark:bg-primaryDark"></div>
                    <div className="bg-primary dark:bg-primaryDark"></div>
                </div>
            ) : null}
        </Router>
    );
}

export default App;
