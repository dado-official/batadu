import React from "react";
import { Link } from "react-router-dom";
import logo from ".//assets/logo.svg";
import "./styles/navbar.css";
import casinoIcon from "./assets/casino-24px.svg";
import rankIcon from "./assets/leaderboard-24px.svg";
import profileIcon from "./assets/account_circle-24px.svg";

const Navbar = () => {
    return (
        <header className="bg-white ">
            <div className="flex justify-between items-center w-1450 mx-auto max-w-1/9">
                <div className="flex gap-2">
                    <img src={logo} alt="4 Wattkarten" />
                    <h4 className=" text-logoGray text-7.5 font-abril font-normal">
                        Batadú
                    </h4>
                </div>
                <div className="flex gap-12">
                    <div className="flex gap-3 items-center relative py-6">
                        <img
                            src={casinoIcon}
                            alt="Würfel"
                            className=" h-1.25 primarySVG"
                        />
                        <h6 className="text-base text-primary font-bold">
                            Spielen
                        </h6>
                        <div className="bg-primary h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                    </div>
                    <div className="flex gap-3 items-center relative py-6">
                        <img src={rankIcon} alt="Würfel" className=" h-1.25" />
                        <h6 className="text-base">Rangliste</h6>
                    </div>
                    <div className="flex gap-3 items-center relative py-6">
                        <img
                            src={profileIcon}
                            alt="Würfel"
                            className=" h-1.25"
                        />
                        <h6 className="text-base">Profile</h6>
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                    <h6 className="text-base">Login</h6>
                    <button className="btn htext-base text-white bg-primary">
                        Registrieren
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
