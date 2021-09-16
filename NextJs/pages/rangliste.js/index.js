import { useState } from "react";
import { getSession } from "next-auth/client";
import Layout from "../../comps/Layout";
import RanglisteTabelle from "../../comps/RanglisteTabelle/RanglisteTabelle";
const { PrismaClient } = require("@prisma/client");
import axios from "axios";

const prisma = new PrismaClient();
const contentPerPage = 20;

function Rangliste({ isDarkmode, setIsDarkmode, session, rankList, level }) {
    const [filter, setFilter] = useState("Gesamt");

    const [pagination, setPagination] = useState({
        page: 0,
        data: rankList,
        lastPage: rankList.length < contentPerPage,
    });

    async function loadMore() {
        const res = await axios.get(`/api/ranklist`, {
            params: { page: pagination.page + 1 },
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
            title="Batadu - Rangliste"
            rank={true}
            level={level}
        >
            <div className="flex flex-col justify-center items-center mt-12 w-1450 max-w-1/9 mx-auto">
                <h3 className="font-medium">Rangliste</h3>
                {/*Small filter*/}
                <div className="mt-8">
                    <button
                        onClick={() => setFilter("Gesamt")}
                        className={`w-28 rounded-l-md py-2 text-center transition-all border-1 border-grayLight2 ${
                            filter === "Gesamt"
                                ? "bg-primary text-white shadow-lg border-r-0"
                                : "text-gray hover:text-text hover:shadow"
                        } `}
                    >
                        Gesamt
                    </button>
                    <button
                        onClick={() => setFilter("Woche")}
                        className={`w-28 rounded-r-md py-2 text-center transition-all border-1 border-grayLight2 ${
                            filter === "Woche"
                                ? "bg-primary text-white shadow-lg border-l-0"
                                : "text-gray hover:text-text hover:shadow"
                        } `}
                    >
                        Woche
                    </button>
                </div>

                <RanglisteTabelle
                    data={pagination.data}
                    userId={session.userId}
                    loadMore={loadMore}
                    lastPage={pagination.lastPage}
                />
            </div>
        </Layout>
    );
}

export default Rangliste;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        const rankList =
            await prisma.$queryRaw`SELECT users.id, users.name AS "username", users.image AS "userPic", users.xp AS points, COUNT(CASE WHEN plays.won THEN 1 END) AS "gamesW", COUNT(plays.won) AS "games", rank() OVER(ORDER BY users.xp DESC) AS rank
FROM users JOIN playsin ON playsin.userId = users.id JOIN team ON team.id = playsin.teamId JOIN plays ON plays.teamId = team.id GROUP BY users.id LIMIT ${contentPerPage}`;
        console.log(rankList);

        const [{ level }] =
            await prisma.$queryRaw`Select (Select level.nr FROM level WHERE xpreq <= users.xp ORDER BY xpreq DESC LIMIT 1) AS "level" FROM users Where id = ${parseInt(
                session.userId
            )}`;
        prisma.$disconnect();
        return {
            props: {
                session: session,
                rankList: rankList,
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
