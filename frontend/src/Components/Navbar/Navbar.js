import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import casinoIcon from "../../assets/casino-24px.svg";
import rankIcon from "../../assets/leaderboard-24px.svg";
import profileIcon from "../../assets/account_circle-24px.svg";
import Menu from "../../assets/Menu.svg";
import Cancel from "../../assets/Cancel.svg";
import DarkMode from "../../assets/dark_mode-24px.svg";
import LightMode from "../../assets/light_mode-24px.svg";
import LevelBadge from "../Shared/LevelBadge";

const Navbar = ({
    url,
    isSidebarOpen,
    setIsSidebarOpen,
    isDarkmode,
    setIsDarkmode,
    username,
    logout,
    level,
}) => {
    const history = useHistory();
    function clickSidebarHandler() {
        setIsSidebarOpen((prev) => !prev);
    }
    function clickDarkmodeHandler() {
        setIsDarkmode((prev) => {
            localStorage.setItem("darkmode", !prev);
            return !prev;
        });
    }
    function logoutHandler() {
        logout(history);
    }

    return (
        <header className="bg-white dark:bg-whiteDark z-50 fixed top-0 left-0 w-full">
            <div className="bg-white dark:bg-whiteDark flex justify-between items-center lg:w-1450 mx-auto max-w-1/9 h-auto">
                <Link to="/">
                    <div className="flex gap-4">
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="4 Wattkarten"
                                className="max-h-9"
                            />
                        </div>
                        <h4 className=" text-primary dark:text-primaryDark text-7.5 font-abril font-normal">
                            Batadú
                        </h4>
                    </div>
                </Link>
                {url === "Anmelden" || url === "Registrieren" ? null : (
                    <div className="hidden lg:flex lg:gap-10">
                        <Link to="/">
                            <div className="flex gap-3 items-center relative px-4 py-6 hover:bg-bgWhite dark:hover:bg-bgDark">
                                <img
                                    src={casinoIcon}
                                    alt="Würfel"
                                    className={`h-1.25 ${
                                        url === "/"
                                            ? `${
                                                  !isDarkmode
                                                      ? "primarySVG"
                                                      : "primaryDarkSVG"
                                              }`
                                            : `${
                                                  isDarkmode ? "whiteSVG" : null
                                              }`
                                    }`}
                                />
                                <h6
                                    className={`text-base dark:text-white ${
                                        url === "/"
                                            ? "text-primary dark:text-primaryDark font-bold"
                                            : null
                                    }`}
                                >
                                    Spielen
                                </h6>
                                {url === "/" ? (
                                    <div className="bg-primary dark:bg-primaryDark h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                                ) : null}
                            </div>
                        </Link>
                        <Link to="/rangliste">
                            <div className="flex gap-3 items-center relative px-4 py-6 hover:bg-bgWhite dark:hover:bg-bgDark transition-all">
                                <img
                                    src={rankIcon}
                                    alt="Ranglist"
                                    className={`h-1.25 ${
                                        url === "/rangliste"
                                            ? `${
                                                  !isDarkmode
                                                      ? "primarySVG"
                                                      : "primaryDarkSVG"
                                              }`
                                            : `${
                                                  isDarkmode ? "whiteSVG" : null
                                              }`
                                    }`}
                                />
                                <h6
                                    className={`text-base dark:text-white ${
                                        url === "/rangliste"
                                            ? "text-primary dark:text-primaryDark font-bold"
                                            : "dark:text-white "
                                    }`}
                                >
                                    Rangliste
                                </h6>
                                {url === "/rangliste" ? (
                                    <div className="bg-primary dark:bg-primaryDark h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                                ) : null}
                            </div>
                        </Link>
                        <Link to={`/profile/${username}`}>
                            <div className="flex gap-3 items-center relative px-4 py-6 hover:bg-bgWhite dark:hover:bg-bgDark">
                                <img
                                    src={profileIcon}
                                    alt="Profil"
                                    className={`h-1.25 ${
                                        url === "/profile"
                                            ? `${
                                                  !isDarkmode
                                                      ? "primarySVG"
                                                      : "primaryDarkSVG"
                                              }`
                                            : `${
                                                  isDarkmode ? "whiteSVG" : null
                                              }`
                                    }`}
                                />
                                <h6
                                    className={`text-base dark:text-white ${
                                        url === "/profile"
                                            ? "text-primary dark:text-primaryDark font-bold"
                                            : null
                                    }`}
                                >
                                    Profile
                                </h6>
                                {url === "/profile" ? (
                                    <div className="bg-primary dark:bg-primaryDark h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st"></div>
                                ) : null}
                            </div>
                        </Link>
                    </div>
                )}
                <div className="hidden lg:flex lg:gap-8 lg:items-center">
                    <img
                        src={isDarkmode ? LightMode : DarkMode}
                        alt="Nachtmodus"
                        className={`cursor-pointer ${
                            isDarkmode ? "whiteSVG" : null
                        }`}
                        onClick={clickDarkmodeHandler}
                    />
                    {url !== "Anmelden" && username === "" ? (
                        <Link
                            to="/anmelden"
                            className={`${
                                url === "Registrieren" ? "py-4.5" : "px-6"
                            }`}
                        >
                            <h6
                                className={`text-base  ${
                                    url === "Registrieren"
                                        ? "btn btnPrimary text-white dark:text-black bg-primary dark:bg-primaryDark"
                                        : "dark:text-white hover:text-primary dark:hover:text-primaryDark transition-all duration-300"
                                }`}
                            >
                                Anmelden
                            </h6>
                        </Link>
                    ) : null}
                    {url !== "Registrieren" && username === "" ? (
                        <Link to="/registrieren" className="py-4.5">
                            <button className="btn btnPrimary text-base text-white dark:text-black bg-primary dark:bg-primaryDark">
                                Registrieren
                            </button>
                        </Link>
                    ) : null}
                    {username !== "" ? (
                        <div className="flex items-center gap-2">
                            <LevelBadge
                                level={level}
                                isDarkmode={isDarkmode}
                                size="2.2rem"
                            />
                            <p className="font-bold dark:text-white">
                                {username}
                            </p>
                            <button
                                onClick={logoutHandler}
                                className="btn btnPrimary text-base ml-4 text-white dark:text-black bg-primary dark:bg-primaryDark"
                            >
                                Abmelden
                            </button>
                        </div>
                    ) : null}
                </div>
                <div className="py-6 lg:hidden">
                    <img
                        src={isSidebarOpen ? Cancel : Menu}
                        onClick={clickSidebarHandler}
                        alt="Menue"
                        className={`block h-5 lg:hidden cursor-pointer ${
                            isDarkmode ? "whiteSVG" : null
                        }`}
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
