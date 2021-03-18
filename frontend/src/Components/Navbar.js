import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import casinoIcon from "../assets/casino-24px.svg";
import rankIcon from "../assets/leaderboard-24px.svg";
import profileIcon from "../assets/account_circle-24px.svg";

const Navbar = ({ url }) => {
    return (
        <header className="bg-white ">
            <div className="flex justify-between items-center w-1450 mx-auto max-w-1/9">
                <Link to="/">
                    <div className="flex gap-2">
                        <img src={logo} alt="4 Wattkarten" />
                        <h4 className=" text-logoGray text-7.5 font-abril font-normal">
                            Batadú
                        </h4>
                    </div>
                </Link>
                {url === "Anmelden" || url === "Registrieren" ? null : (
                    <div className="flex gap-12">
                        <Link to="/">
                            <div className="flex gap-3 items-center relative py-6">
                                <img
                                    src={casinoIcon}
                                    alt="Würfel"
                                    className={`h-1.25 ${
                                        url === "/" ? "primarySVG" : null
                                    }`}
                                />
                                <h6
                                    className={`text-base ${
                                        url === "/"
                                            ? "text-primary font-bold"
                                            : null
                                    }`}
                                >
                                    Spielen
                                </h6>
                                {url === "/" ? (
                                    <div className="bg-primary h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                                ) : null}
                            </div>
                        </Link>
                        <Link to="/rangliste">
                            <div className="flex gap-3 items-center relative py-6">
                                <img
                                    src={rankIcon}
                                    alt="Ranglist"
                                    className={`h-1.25 ${
                                        url === "/rangliste"
                                            ? "primarySVG"
                                            : null
                                    }`}
                                />
                                <h6
                                    className={`text-base ${
                                        url === "/rangliste"
                                            ? "text-primary font-bold"
                                            : null
                                    }`}
                                >
                                    Rangliste
                                </h6>
                                {url === "/rangliste" ? (
                                    <div className="bg-primary h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                                ) : null}
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div className="flex gap-3 items-center relative py-6">
                                <img
                                    src={profileIcon}
                                    alt="Profil"
                                    className={`h-1.25 ${
                                        url === "/profile" ? "primarySVG" : null
                                    }`}
                                />
                                <h6
                                    className={`text-base ${
                                        url === "/profile"
                                            ? "text-primary font-bold"
                                            : null
                                    }`}
                                >
                                    Profile
                                </h6>
                                {url === "/profile" ? (
                                    <div className="bg-primary h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                                ) : null}
                            </div>
                        </Link>
                    </div>
                )}
                <div className="flex gap-8 items-center">
                    {url !== "Anmelden" ? (
                        <Link
                            to="/anmelden"
                            className={`${
                                url === "Registrieren" ? "py-4.5" : "px-6"
                            }`}
                        >
                            <h6
                                className={`text-base ${
                                    url === "Registrieren"
                                        ? "btn text-white bg-primary"
                                        : null
                                }`}
                            >
                                Anmelden
                            </h6>
                        </Link>
                    ) : null}
                    {url !== "Registrieren" ? (
                        <Link to="/registrieren" className="py-4.5">
                            <button className="btn text-base text-white bg-primary">
                                Registrieren
                            </button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </header>
    );
};

export default Navbar;