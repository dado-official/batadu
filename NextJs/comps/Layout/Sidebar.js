import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
    HeartIcon,
    LoginIcon,
    LogoutIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
import { signIn, signOut } from "next-auth/client";
import SidebarElement from "./SidebarElement";
import { BiDice5 } from "@react-icons/all-files/bi/BiDice5";
import { CgCardHearts } from "@react-icons/all-files/cg/CgCardHearts";
import { RiTrophyLine } from "@react-icons/all-files/ri/RiTrophyLine";
import ProfileElement from "./ProfileElement";

function Sidebar({
    isDarkmode,
    setIsDarkmode,
    isSidebarOpen,
    setIsSidebarOpen,
    session,
    spielen,
    rank,
    profil,
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
                <nav className="bg-white shadow-xl hover:shadow-2xl dark:bg-whiteDark z-1000 fixed w-20 flex flex-col h-screen top-0 hover:w-56">
                    <ul
                        className={`bg-white h-full dark:bg-whiteDark flex flex-col`}
                    >
                        <SidebarElement
                            href="/spielen"
                            title="Spielen"
                            active={spielen}
                        >
                            <BiDice5 className="mx-6" size="32" />
                        </SidebarElement>
                        <SidebarElement
                            href="/rangliste"
                            title="Rangliste"
                            active={rank}
                        >
                            <RiTrophyLine className="mx-6" size="32" />
                        </SidebarElement>
                        <SidebarElement
                            href="/profil"
                            title="Profil"
                            active={profil}
                        >
                            <UserIcon className="h-8 mx-6" />
                        </SidebarElement>
                        {session && <ProfileElement session={session} />}
                        <li
                            className={`flex h-20 cursor-pointer text-white bg-primary ${
                                !session && "mt-auto"
                            }`}
                        >
                            {session ? (
                                <div
                                    onClick={signOut}
                                    className="flex items-center"
                                >
                                    <LogoutIcon className="cursor-pointer h-8 mx-6" />
                                    <p className="hidden">Abmelden</p>
                                </div>
                            ) : (
                                <div
                                    onClick={signIn}
                                    className="flex items-center"
                                >
                                    <LoginIcon className="cursor-pointer h-8 mx-6" />
                                    <p className="hidden">Anmelden</p>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            ) : null}{" "}
        </Fragment>
    );
}

export default Sidebar;
