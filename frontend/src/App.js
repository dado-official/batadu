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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import io from "socket.io-client";
const socket = io("http://10.10.30.213:8080");

function App() {
    const [url, setUrl] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isServer, setIsServer] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkmode, setIsDarkmode] = useState(false);
    const [team, setTeam] = useState(0);

    useEffect(() => {
        loadDarkmode();
    }, []);

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
        console.log(value);
        if (value === undefined) return;
        if (value == "true") {
            setIsDarkmode(true);
        } else {
            setIsDarkmode(false);
        }
    }

    return (
        <Router>
            {!isServer ? <ServerDown isDarkmode={isDarkmode} /> : null}
            <Navbar
                url={url}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isDarkmode={isDarkmode}
                setIsDarkmode={setIsDarkmode}
            />
            <Sidebar
                url={url}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isDarkmode={isDarkmode}
                setIsDarkmode={setIsDarkmode}
            />
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
                    <SpielErstellen
                        setUrl={setUrl}
                        socket={socket}
                        isDarkmode={isDarkmode}
                    />
                </Route>
                <Route path="/spielen/:room/:username">
                    <Spiel
                        setUrl={setUrl}
                        socket={socket}
                        isDarkmode={isDarkmode}
                        team={team}
                    />
                </Route>
                <Route path="/rangliste">
                    <Rangliste setUrl={setUrl} isDarkmode={isDarkmode} />
                </Route>
                <Route path="/team/:room">
                    <SelectTeam
                        setUrl={setUrl}
                        isDarkmode={isDarkmode}
                        setTeam={setTeam}
                        team={team}
                    />
                </Route>
                <Route path="/profile/:user">
                    <Profil setUrl={setUrl} isDarkmode={isDarkmode} />
                </Route>
                <Route path="/anmelden">
                    <Anmelden setUrl={setUrl} isDarkmode={isDarkmode} />
                </Route>
                <Route path="/registrieren">
                    <Registrieren setUrl={setUrl} isDarkmode={isDarkmode} />
                </Route>
            </Switch>
            <Footer isDarkmode={isDarkmode} />
        </Router>
    );
}

export default App;
