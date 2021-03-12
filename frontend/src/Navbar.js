import React from "react";
import { Link } from "react-router-dom";
import logo from ".//assets/logo.svg";
import "./styles/navbar.css";
import casinoIcon from "./assets/casino-24px.svg";
import rankIcon from "./assets/leaderboard-24px.svg";
import profileIcon from "./assets/account_circle-24px.svg";

const Navbar = () => {
    return (
        <header>
            <div>
                <div className="logo">
                    <img src={logo} alt="4 Wattkarten" />
                    <h4>Batadú</h4>
                </div>
                <div className="links">
                    <div>
                        <img src={casinoIcon} alt="Würfel" />
                        <h6>Spielen</h6>
                    </div>
                    <div>
                        <img src={rankIcon} alt="Würfel" />
                        <h6>Rangliste</h6>
                    </div>
                    <div>
                        <img src={profileIcon} alt="Würfel" />
                        <h6>Profile</h6>
                    </div>
                </div>
                <div className="profile">
                    <h6>Login</h6>
                    <button>Registrieren</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
