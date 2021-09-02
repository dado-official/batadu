import Layout from "../../comps/Layout";
import { getSession } from "next-auth/client";
import SearchInput from "../../comps/SearchInput";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";
import Room from "../../comps/Room";
import SpielErstellen from "../../comps/Spiel Erstellen";
import SelectElement from "../../comps/SelectElement";
import SelectTeam from "../../comps/SelectTeam";

function Spielen({
    session,
    setIsDarkmode,
    isDarkmode,
    socket,
    setTeam,
    team,
}) {
    const [search, setSearch] = useState("");
    const [rooms, setRooms] = useState([]);
    const [showRooms, setShowRooms] = useState([]);
    const [showSpielErstellen, setShowSpielErstellen] = useState(false);
    const [selectTeam, setSelectTeam] = useState({ show: false });

    useEffect(() => {
        socket.emit("getRooms");
        socket.on("rooms", (data) => {
            setRooms(data);
        });
        //setTeam(0);
    }, []);

    useEffect(() => {
        if (search === "" || search === " ") {
            setShowRooms(rooms);
        } else {
            setShowRooms(
                rooms.filter((element) =>
                    element.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [rooms, search]);

    return (
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            spielen={true}
        >
            <div className="w-1450 max-w-1/9 mx-auto mt-8 mb-16">
                <div className="flex justify-between md:mt-8 flex-col-reverse md:flex-row">
                    <h3 className="mb-6 dark:text-white">Spiele</h3>
                    <div className="mb-6 w-full md:w-max ">
                        <SearchInput
                            search={search}
                            setSearch={setSearch}
                            isDarkmode={isDarkmode}
                        />
                    </div>
                    <button
                        className="w-full md:w-max py-1.5 gap-2 rounded-st bg-primary dark:bg-primaryDark text-white dark:text-black mb-6 flex justify-center items-center px-8"
                        onClick={() => setShowSpielErstellen(true)}
                    >
                        <PlusIcon className="h-5" />
                        Spiel erstellen
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    {showRooms.map((element) => {
                        return (
                            <Room
                                roomName={element.name}
                                score1={element.team1}
                                score2={element.team2}
                                users={element.users}
                                isDarkmode={isDarkmode}
                                config={element.config}
                                key={element.name}
                                setSelectTeam={setSelectTeam}
                            />
                        );
                    })}
                </div>
                {showRooms.length === 0 ? (
                    <p className="mt-4 dark:text-white text-whiteDark">
                        Keine Spiele gefunden, Sie können selbst ein Spiel
                        erstellen indem Sie auf{" "}
                        <span className="font-bold">Spiel erstellen</span>{" "}
                        drücken
                    </p>
                ) : null}
            </div>
            {showSpielErstellen && (
                <SpielErstellen
                    setShow={setShowSpielErstellen}
                    socket={socket}
                />
            )}
            {selectTeam.show && (
                <SelectTeam
                    selectTeam={selectTeam}
                    setSelectTeam={setSelectTeam}
                    setTeam={setTeam}
                    team={team}
                />
            )}
        </Layout>
    );
}

export default Spielen;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        return {
            props: {
                session: session,
            },
        };
    }
    return {
        redirect: {
            destination: "/anmelden",
            permanent: false,
        },
    };
}
