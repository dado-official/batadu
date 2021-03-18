import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import React, { useState } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Rooms from "./Components/Room/Rooms";
import Spiel from "./Components/Spiel/Spiel";
import SelectTeam from "./Components/Spiel/SelectTeam";
import SpielErstellen from "./Components/Spiel erstellen/SpielErstellen";
import Anmelden from "./Components/Anmelden/Anmelden";
import Registrieren from "./Components/Registrieren/Registrieren";
import Profil from "./Components/Profil/Profil";
import Rangliste from "./Components/Rangliste/Rangliste";
import ServerDown from "./Components/ServerDown/ServerDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [url, setUrl] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isServer, setIsServer] = useState(true);

    return (
        <Router>
            {!isServer ? <ServerDown /> : null}
            <Navbar url={url} />
            <Switch>
                <Route path={["/", "/spielen"]} exact>
                    {isLoggedIn ? (
                        <Rooms setUrl={setUrl} />
                    ) : (
                        <Homepage setUrl={setUrl} />
                    )}
                </Route>
                <Route path="/spielen/erstellen">
                    <SpielErstellen setUrl={setUrl} />
                </Route>
                <Route path="/spielen/:room">
                    <Spiel setUrl={setUrl} />
                </Route>
                <Route path="/rangliste">
                    <Rangliste setUrl={setUrl} />
                </Route>
                <Route path="/team">
                    <SelectTeam setUrl={setUrl} />
                </Route>
                <Route path="/profile/:user">
                    <Profil setUrl={setUrl} />
                </Route>
                <Route path="/anmelden">
                    <Anmelden setUrl={setUrl} />
                </Route>
                <Route path="/registrieren">
                    <Registrieren setUrl={setUrl} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
