import { useState } from "react";
import { getSession } from "next-auth/client";
import Layout from "../../comps/Layout";
import Image from "next/image";
import Stats from "../../comps/Profile/Stats";
import LevelBar from "../../comps/Profile/LevelBar";
import GameHistory from "../../comps/Profile/GameHistory";

function Profil({
    isDarkmode,
    setIsDarkmode,
    session,
    user,
    level,
    stats,
    gameHistory,
}) {
    return (
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            title={`Batadu - ${user.username} Profil`}
            profil={true}
        >
            <div className="flex flex-col justify-center items-center mt-12 w-1450 max-w-1/9 mx-auto">
                <div className="relative w-28 h-28 rounded-full border-4 border-white">
                    <Image
                        src={user.userPic}
                        layout="fill"
                        objectFit="contain"
                        blurDataURL={user.userPic}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <h3 className="mt-4">{user.username}</h3>
                <h5 className="text-gray mt-2">Level {user.level}</h5>
                <Stats
                    rank={stats.rank}
                    winrate={stats.winrate}
                    gameW={stats.gameW}
                />
                <LevelBar
                    xp={level.xp}
                    xpReq={level.xpReq}
                    xpReqBefore={level.xpReqBefore}
                    level={user.level}
                />
                <h4 className="mt-10">Skins</h4>
                <p className="text-gray mt-2">Kommt bald...</p>
                <div className="w-full mb-16">
                    <h4 className="mt-10 text-center mb-4">Verlauf</h4>
                    {gameHistory.map((element, index) => (
                        <GameHistory
                            team1={element.team1}
                            team2={element.team2}
                            win={element.win}
                            date={element.date}
                            border={index !== gameHistory.length - 1}
                        />
                    ))}
                    <button className="mt-4 border-1 border-grayLight2 rounded-md py-2.5 w-full text-text shadow hover:shadow-md transition-all">
                        Mehr Laden
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default Profil;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        return {
            props: {
                session: session,
                user: {
                    userId: 5,
                    username: "Elon Musk",
                    userPic:
                        "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
                    level: 2,
                },
                level: {
                    xp: 140,
                    xpReq: 160,
                    xpReqBefore: 100,
                },
                stats: {
                    gameW: 76,
                    rank: 3,
                    winrate: 62,
                },
                gameHistory: [
                    {
                        team1: 18,
                        team2: 14,
                        date: "10.10.10",
                        win: true,
                    },
                    {
                        team1: 18,
                        team2: 14,
                        date: "10.10.10",
                        win: false,
                    },
                    {
                        team1: 18,
                        team2: 14,
                        date: "10.10.10",
                        win: true,
                    },
                ],
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
