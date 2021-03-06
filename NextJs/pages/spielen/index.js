import Layout from "../../comps/Layout";
import { getSession } from "next-auth/client";
import SearchInput from "../../comps/SearchInput";
import React, { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Room from "../../comps/Room";
import SpielErstellen from "../../comps/Spiel Erstellen";
import SelectTeam from "../../comps/SelectTeam";
import HilfeContainer from "../../comps/HilfeContainer";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function Spielen({
    session,
    setIsDarkmode,
    isDarkmode,
    socket,
    setTeam,
    team,
    level,
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
            title={`Batadù - ${rooms.length} Spiele`}
            level={level}
        >
            <div className="max-w-1/9 mx-auto mt-8 mb-16">
                <div className="flex justify-between md:mt-8 flex-col-reverse md:flex-row gap-8">
                    <h3 className="mb-6 dark:text-white font-medium">Spiele</h3>
                    <div className="flex gap-4">
                        <div className="mb-6 w-full md:w-80 ">
                            <SearchInput
                                search={search}
                                setSearch={setSearch}
                                isDarkmode={isDarkmode}
                            />
                        </div>
                        <button
                            className="hover:shadow-md transition-all py-1.5 gap-2 rounded  text-primary border-1 border-primary dark:text-black mb-6 flex justify-center items-center px-8"
                            onClick={() => setShowSpielErstellen(true)}
                        >
                            Spiel erstellen
                        </button>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-3 gap-8">
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
        const [{ level }] =
            await prisma.$queryRaw`Select (Select level.nr FROM level WHERE xpreq <= users.xp ORDER BY xpreq DESC LIMIT 1) AS "level" FROM users Where id = ${parseInt(
                session.userId
            )}`;
        prisma.$disconnect();
        return {
            props: {
                session: session,
                level: level,
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
