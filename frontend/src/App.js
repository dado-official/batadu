import Navbar from "./Navbar";
import React, { useState } from "react";
import Homepage from "./Homepage";
import Rooms from "./Rooms";
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
                <Route path="spielen/:room"></Route>
                <Route path="/rangliste"></Route>
                <Route path="/profile/:user"></Route>
                <Route path="/anmelden"></Route>
                <Route path="/registrieren"></Route>
            </Switch>
        </Router>
    );
}

export default App;
