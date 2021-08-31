import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { LogoutIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { signIn, signOut } from "next-auth/client";
import Image from "next/image";
import logo from "../../public/logo.svg";

function Header({
    isDarkmode,
    setIsDarkmode,
    isSidebarOpen,
    setIsSidebarOpen,
    session,
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
                <header className="bg-white dark:bg-whiteDark z-1000 w-full">
                    <div className="bg-white dark:bg-whiteDark flex justify-between items-center lg:w-1450 mx-auto max-w-1/9 h-auto">
                        <Link href="/">
                            <div className="flex gap-2 cursor-pointer">
                                <Image
                                    src="/logo.svg"
                                    width="50"
                                    height="40"
                                    alt="4 Wattkarten"
                                />
                                <h4 className=" text-logoGray dark:text-gray-100 text-7.5 font-abril font-normal">
                                    Batadú
                                </h4>
                            </div>
                        </Link>
                        <div className="hidden lg:flex lg:gap-12">
                            <Link href="/">
                                <div className="flex gap-3 cursor-pointer items-center relative py-6">
                                    <p
                                        className={`dark:text-white ${
                                            asPath === "/spielen"
                                                ? "text-primary dark:text-primaryDark font-bold"
                                                : null
                                        }`}
                                    >
                                        Spielen
                                    </p>
                                </div>
                            </Link>
                            <Link href="/rangliste">
                                <div className="flex cursor-pointer gap-3 items-center relative py-6">
                                    <p
                                        className={`dark:text-white ${
                                            asPath === "/rangliste"
                                                ? "text-primary dark:text-primaryDark font-bold"
                                                : "dark:text-white"
                                        }`}
                                    >
                                        Rangliste
                                    </p>
                                </div>
                            </Link>
                            <Link href={`/profile/${session?.user.name}`}>
                                <div className="flex cursor-pointer gap-3 items-center relative py-6">
                                    <p
                                        className={`dark:text-white ${
                                            asPath === "/profile"
                                                ? "text-primary dark:text-primaryDark font-bold"
                                                : null
                                        }`}
                                    >
                                        Profile
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:gap-8 lg:items-center">
                            {isDarkmode ? (
                                <SunIcon
                                    onClick={clickDarkmodeHandler}
                                    className="h-6 cursor-pointer text-white"
                                />
                            ) : (
                                <MoonIcon
                                    onClick={clickDarkmodeHandler}
                                    className="h-6 cursor-pointer"
                                />
                            )}
                            {session ? (
                                <div className="flex relative items-center gap-4 ml-4">
                                    <Image
                                        src={session.user.image}
                                        width="25"
                                        height="25"
                                        className="rounded-full"
                                        objectFit="contain"
                                    />
                                    <p className="dark:text-white">
                                        {session.user.name}
                                    </p>
                                    <LogoutIcon
                                        onClick={signOut}
                                        className="cursor-pointer h-5 ml-4 text-statistikGray"
                                    />
                                </div>
                            ) : (
                                <Link href="/anmelden">
                                    <button className="ml-4 btn text-white dark:text-black bg-primary dark:bg-primaryDark">
                                        Anmelden
                                    </button>
                                </Link>
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
