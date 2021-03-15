import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import Homepage from "./Homepage";
import Rooms from "./Rooms";
import Spiel from "./Spiel";
import SelectTeam from "./SelectTeam";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [url, setUrl] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Router>
            <Navbar url={url} />
            <Switch>
                <Route path={["/", "/spielen"]} exact>
                    {isLoggedIn ? (
                        <Rooms setUrl={setUrl} />
                    ) : (
                        <Homepage setUrl={setUrl} />
                    )}
                </Route>
                <Route path="/spielen/:room">
                    <Spiel setUrl={setUrl} />
                </Route>
                <Route path="/rangliste"></Route>
                <Route path="/team">
                    <SelectTeam />
                </Route>
                <Route path="/profile/:user"></Route>
                <Route path="/anmelden"></Route>
                <Route path="/registrieren"></Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
