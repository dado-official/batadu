import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

function Header({
    session,
    username,
    isDarkmode,
    isSidebarOpen,
    setIsSidebarOpen,
}) {
    const { asPath } = useRouter();

    function clickDarkmodeHandler() {
        setIsDarkmode((prev) => {
            localStorage.setItem("darkmode", !prev);
            return !prev;
        });
    }

    function clickSidebarHandler() {
        setIsSidebarOpen((prev) => !prev);
    }

    return (
        <Fragment>
            {asPath !== "anmelden" ? (
                <header className="bg-white dark:bg-whiteDark z-50 w-full">
                    <div className="bg-white dark:bg-whiteDark flex justify-between items-center lg:w-1450 mx-auto max-w-1/9 h-auto">
                        <Link href="/">
                            <div className="flex gap-2 cursor-pointer">
                                <img src="./logo.svg" alt="4 Wattkarten" />
                                <h4 className=" text-logoGray dark:text-gray-100 text-7.5 font-abril font-normal">
                                    Batadú
                                </h4>
                            </div>
                        </Link>
                        <div className="hidden lg:flex lg:gap-12">
                            <Link href="/">
                                <div className="flex gap-3 cursor-pointer items-center relative py-6">
                                    <h6
                                        className={`text-base dark:text-white ${
                                            asPath === "/"
                                                ? "text-primary dark:text-primaryDark font-bold"
                                                : null
                                        }`}
                                    >
                                        Spielen
                                    </h6>
                                </div>
                            </Link>
                            <Link href="/rangliste">
                                <div className="flex cursor-pointer gap-3 items-center relative py-6">
                                    <h6
                                        className={`text-base dark:text-white ${
                                            asPath === "/rangliste"
                                                ? "text-primary dark:text-primaryDark font-bold"
                                                : "dark:text-white"
                                        }`}
                                    >
                                        Rangliste
                                    </h6>
                                </div>
                            </Link>
                            <Link href={`/profile/${username}`}>
                                <div className="flex cursor-pointer gap-3 items-center relative py-6">
                                    <h6
                                        className={`text-base dark:text-white ${
                                            asPath === "/profile"
                                                ? "text-primary dark:text-primaryDark font-bold"
                                                : null
                                        }`}
                                    >
                                        Profile
                                    </h6>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:gap-8 lg:items-center">
                            {isDarkmode ? (
                                <SunIcon
                                    onClick={clickDarkmodeHandler}
                                    className="h-6 cursor-pointer"
                                />
                            ) : (
                                <MoonIcon
                                    onClick={clickDarkmodeHandler}
                                    className="h-6 cursor-pointer"
                                />
                            )}
                            <Link href="/anmelden">
                                <h6 className="text-base ml-4 btn text-white dark:text-black bg-primary dark:bg-primaryDark">
                                    Anmelden
                                </h6>
                            </Link>
                            {session && (
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
                                        className="btn text-base ml-4 text-white dark:text-black bg-primary dark:bg-primaryDark"
                                    >
                                        Abmelden
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="py-6 lg:hidden">
                            <img
                                src={
                                    isSidebarOpen ? "/Cancel.svg" : "/Menu.svg"
                                }
                                onClick={clickSidebarHandler}
                                alt="Menue"
                                className={`block h-5 lg:hidden cursor-pointer ${
                                    isDarkmode ? "whiteSVG" : null
                                }`}
                            />
                        </div>
                    </div>
                </header>
            ) : null}{" "}
        </Fragment>
    );
}

export default Header;
