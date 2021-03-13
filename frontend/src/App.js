import Navbar from "./Navbar";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/rangliste"></Route>
                <Route path="/profile/:user"></Route>
            </Switch>
        </Router>
    );
}

export default App;
