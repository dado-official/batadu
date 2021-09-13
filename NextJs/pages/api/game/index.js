import { getSession } from "next-auth/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const pageContent = 10;

export default async (req, res) => {
    if (req.method !== "GET") {
        res.status(400).send({ message: "Only POST requests allowed" });
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
            const { page, userId } = req.query;

            const getGames =
                await prisma.$queryRaw`Select game.id AS "gameId", game.datum as "date", plays.won AS "win", team.points AS "team1", otherteam.points AS "team2" from game JOIN plays ON plays.gameId = game.id JOIN team ON team.id = plays.teamId JOIN playsIn ON team.id = playsIn.teamId JOIN plays otherplays ON otherplays.gameId = game.id AND otherplays.teamId <> team.id JOIN team otherteam ON otherteam.id = otherplays.teamId WHERE playsIn.userId = ${parseInt(
                    userId
                )} ORDER BY game.datum ASC LIMIT ${pageContent} OFFSET ${
                    pageContent * page
                }`;
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
