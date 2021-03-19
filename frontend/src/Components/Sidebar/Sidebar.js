import React from "react";
import { Link } from "react-router-dom";
import casinoIcon from "../../assets/casino-24px.svg";
import rankIcon from "../../assets/leaderboard-24px.svg";
import profileIcon from "../../assets/account_circle-24px.svg";

const Sidebar = ({ url, isSidebarOpen, setIsSidebarOpen }) => {
    function closeSidebarHandler() {
        setIsSidebarOpen(false);
    }

    return (
        <div
            className={`fixed top-0 w-screen h-screen bg-white lg:hidden z-10 ${
                isSidebarOpen ? "sidebaropen" : "sidebar"
            }`}
        >
            <div
                className={`flex flex-col justify-between h-full py-8 ${
                    isSidebarOpen ? "fade" : null
                }`}
            >
                {url === "Anmelden" || url === "Registrieren" ? null : (
                    <div className="flex items-center flex-col gap-12 mt-20">
                        <Link to="/">
                            <div
                                className="flex gap-3 items-center relative py-2"
                                onClick={closeSidebarHandler}
                            >
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
                            </div>
                        </Link>
                        <Link to="/rangliste">
                            <div
                                className="flex gap-3 items-center relative py-2"
                                onClick={closeSidebarHandler}
                            >
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
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div
                                className="flex gap-3 items-center relative py-2"
                                onClick={closeSidebarHandler}
                            >
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
                            </div>
                        </Link>
                    </div>
                )}
                {/*linie*/}
                <div className="flex gap-8 flex-col items-center">
                    <div className="border-gray-600 border-t-2 w-80% mx-auto"></div>
                    {url !== "Anmelden" ? (
                        <Link
                            to="/anmelden"
                            onClick={closeSidebarHandler}
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
                        <Link
                            to="/registrieren"
                            onClick={closeSidebarHandler}
                            className="py-4.5"
                        >
                            <button className="btn text-base text-white bg-primary">
                                Registrieren
                            </button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
