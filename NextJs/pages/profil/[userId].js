import { useState } from "react";
import { getSession } from "next-auth/client";
import Layout from "../../comps/Layout";
import Image from "next/image";
import Stats from "../../comps/Profile/Stats";
import LevelBar from "../../comps/Profile/LevelBar";
import GameHistory from "../../comps/Profile/GameHistory";
const { PrismaClient } = require("@prisma/client");
import axios from "axios";

const prisma = new PrismaClient();
const contentPerPage = 10;

function Profil({
    isDarkmode,
    setIsDarkmode,
    session,
    user,
    level,
    stats,
    gameHistory,
    userId,
}) {
    const [pagination, setPagination] = useState({
        page: 0,
        data: gameHistory,
        lastPage: gameHistory.length < contentPerPage,
    });

    async function loadMore() {
        const res = await axios.get(`/api/game`, {
            params: { page: pagination.page + 1, userId: userId },
        });
        console.log(res.data);

        setPagination((prev) => ({
            page: prev.page + 1,
            data: [...prev.data, ...res.data.getGames],
            lastPage: res.data.getGames.length < contentPerPage,
        }));
    }

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
                {!stats && (
                    <Stats
                        rank={stats.rank}
                        winrate={stats.winrate}
                        gameW={stats.gameW}
                    />
                )}
                <LevelBar
                    xp={level.xp}
                    xpReq={level.xpReq}
                    xpReqBefore={level.xpReqBefore}
                    level={user.level}
                />
                <div className="w-full mb-16">
                    <h4 className="mt-10 text-center mb-4">Verlauf</h4>
                    {pagination.data.length === 0 && (
                        <p className="text-center text-gray">
                            Dieser Spieler hat noch keine Spiele gespielt.
                        </p>
                    )}
                    {pagination.data.map((element, index) => (
                        <GameHistory
                            team1={element.team1}
                            team2={element.team2}
                            win={element.win}
                            date={element.date}
                            border={index !== pagination.data.length - 1}
                            key={element.gameId}
                        />
                    ))}
                    {!pagination.lastPage && (
                        <button
                            onClick={loadMore}
                            className="mt-4 border-1 border-grayLight2 rounded-md py-2.5 w-full text-text shadow hover:shadow-md transition-all"
                        >
                            Mehr Laden
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Profil;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        const { userId } = context.query;

        const user =
            await prisma.$queryRaw`Select users.id AS "userId", users.name AS "username", users.image AS "userPic", users.xp, (Select level.nr FROM level WHERE xpreq <= users.xp ORDER BY xpreq DESC LIMIT 1) AS "level", (Select level.xpReq FROM level WHERE xpreq <= users.xp ORDER BY xpreq DESC LIMIT 1) AS "xpReqBefore", (Select level.xpReq FROM level WHERE xpreq > users.xp ORDER BY xpreq ASC LIMIT 1) AS "xpReq" FROM users Where id = ${parseInt(
                userId
            )}`;

        const gameHistory =
            await prisma.$queryRaw`Select game.id AS "gameId", game.datum as "date", plays.won AS "win", team.points AS "team1", otherteam.points AS "team2" from game JOIN plays ON plays.gameId = game.id JOIN team ON team.id = plays.teamId JOIN playsIn ON team.id = playsIn.teamId JOIN plays otherplays ON otherplays.gameId = game.id AND otherplays.teamId <> team.id JOIN team otherteam ON otherteam.id = otherplays.teamId WHERE playsIn.userId = ${parseInt(
                userId
            )} ORDER BY game.datum ASC LIMIT 10`;

        const stats =
            await prisma.$queryRaw`Select r.* from (SELECT users.id,rank() OVER(ORDER BY COUNT(CASE WHEN plays.won THEN 1 END) DESC) AS rank,  COUNT(CASE WHEN plays.won THEN 1 END) AS "gameW", COUNT(plays.won) AS "played"
FROM users JOIN playsin ON playsin.userId = users.id JOIN team ON team.id = playsin.teamId JOIN plays ON plays.teamId = team.id GROUP BY users.id
) r WHERE r.id = ${parseInt(userId)}`;
        console.table(stats);

        let statsProps;
        if (stats[0]) {
            statsProps = {
                gameW: stats[0]?.gameW,
                rank: stats[0]?.rank,
                winrate: ((100 / stats[0]?.played) * stats[0]?.gameW).toFixed(
                    2
                ),
            };
        } else {
            statsProps = null;
        }

        return {
            props: {
                session: session,
                user: {
                    userId: userId,
                    username: user[0]?.username,
                    userPic: user[0]?.userPic,
                    level: user[0].level,
                },
                level: {
                    xp: user[0]?.xp,
                    xpReq: user[0]?.xpReq,
                    xpReqBefore: user[0]?.xpReqBefore,
                },
                stats: { statsProps },
                gameHistory: gameHistory,
                userId: userId,
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
