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
let socket = io(process.env.REACT_APP_GAME_SERVER);

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

    axios.defaults.withCredentials = true;

    useEffect(() => {
        console.log(process.env);
        socket.on("connect_failed", () => {
            console.log("Network error");
        });
        loadDarkmode();
        loadUser();
    }, []);

    useEffect(() => {
        if (reconnect) {
            socket = io(process.env.REACT_APP_GAME_SERVER);
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
        const token = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("refresh_token");
        if (token && refreshToken) {
            axios
                .get(`${process.env.REACT_APP_REST_SERVER}/user/login`)
                .then((response) => {
                    console.log(response.data);
                    setUsername(response.data.user);
                    setIsLoggedIn(true);
                    getUserLevel(response.data.user);
                })
                .catch((error) => {
                    console.log(error);
                    setLoaded(true);
                });
        } else {
            setLoaded(true);
        }
    }

    function getUserLevel(username) {
        axios
            .get(`${process.env.REACT_APP_REST_SERVER}/user/level`, {
                params: { username: username },
            })
            .then((res) => {
                setUserLevel(res.data.currentlevel.nr);
                setLoaded(true);
            });
    }

    function logout(history) {
        setUsername("");
        setIsLoggedIn(false);
        axios.delete("/user/login", (res) => {
            console.log(res.data);
        });
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
                    <Route path="/spielen/:room/:mode?">
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
