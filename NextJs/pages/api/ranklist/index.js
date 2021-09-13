import { getSession } from "next-auth/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const pageContent = 20;

export default async (req, res) => {
    if (req.method !== "GET") {
        res.status(400).send({ message: "Only GET requests allowed" });
        return;
    }

    const session = await getSession({ req });
    try {
        const hasSession = await prisma.sessions.findUnique({
            where: {
                access_token: session.accessToken,
            },
        });
        if (hasSession.length === 0) {
            res.status(401).json({
                message: "You are not allowed to use this method!",
            });
        } else {
            console.table(req.query);
            const { page } = req.query;

            const getGames =
                await prisma.$queryRaw`SELECT users.id, users.name AS "username", users.image AS "userPic", users.xp AS points, COUNT(CASE WHEN plays.won THEN 1 END) AS "gamesW", COUNT(plays.won) AS "games", rank() OVER(ORDER BY users.xp DESC) AS rank
FROM users JOIN playsin ON playsin.userId = users.id JOIN team ON team.id = playsin.teamId JOIN plays ON plays.teamId = team.id GROUP BY users.id
 LIMIT ${pageContent} OFFSET ${pageContent * page}`;
            console.log(getGames);

            res.status(200).json({ getGames });
            return;
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Database Error" });
        return;
    }
};
