import Layout from "../../comps/Layout";
import { getSession } from "next-auth/client";
import SearchInput from "../../comps/SearchInput";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";
import Room from "../../comps/Room";

function Spielen({ session, setIsDarkmode, isDarkmode, socket, setTeam }) {
    const [search, setSearch] = useState("");
    const [rooms, setRooms] = useState([]);
    const [showRooms, setShowRooms] = useState([]);

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
            setIsDarkmode={setIsDarkmode}
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
                    <Link href="/spielen/erstellen" className="w-full md:w-max">
                        <button className="w-full md:w-max py-1.5 gap-2 rounded-st bg-primary dark:bg-primaryDark text-white dark:text-black mb-6 flex justify-center items-center px-8">
                            <PlusIcon className="h-5" />
                            Spiel erstellen
                        </button>
                    </Link>
                </div>
                <div className="grid gap-x-16 gap-y-8 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {showRooms.map((element) => {
                        return (
                            <Room
                                roomName={element.name}
                                score1={element.team1}
                                score2={element.team2}
                                team1_0={element.users[0]}
                                team1_1={element.users[2]}
                                team2_0={element.users[1]}
                                team2_1={element.users[3]}
                                isDarkmode={isDarkmode}
                                key={Math.random() * 1000}
                                setTeam={setTeam}
                            />
                        );
                    })}
                    <Room
                        roomName={"Test"}
                        score1={0}
                        score2={0}
                        team1_0={"hirte"}
                        team1_1={"Bee"}
                        team2_0={"beee"}
                        team2_1={"ui8"}
                        isDarkmode={isDarkmode}
                        setTeam={setTeam}
                    />
                </div>
                {showRooms.length === 0 ? (
                    <p className="mt-4 dark:text-white text-whiteDark">
                        Keine Spiele gefunden, Sie können selbts ein Spiel
                        erstellen indem Sie auf{" "}
                        <span className="font-bold">Spiel erstellen</span>{" "}
                        drücken
                    </p>
                ) : null}
            </div>
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
