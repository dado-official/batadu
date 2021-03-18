import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import Homepage from "./Components/Homepage";
import Rooms from "./Components/Rooms";
import Spiel from "./Components/Spiel";
import SelectTeam from "./Components/Spiel/SelectTeam";
import SpielErstellen from "./Components/SpielErstellen";
import Anmelden from "./Components/Anmelden";
import Registrieren from "./Components/Registrieren";
import Profil from "./Components/Profil";
import Rangliste from "./Components/Rangliste";
import ServerDown from "./Components/ServerDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [url, setUrl] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
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
            <Footer />
        </Router>
    );
}

export default App;
