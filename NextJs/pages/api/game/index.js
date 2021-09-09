import { getSession } from "next-auth/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
            const { userIds, team1Points, team2Points } = req.body;
            const { user_id } = hasSession;

            const create = await prisma.game.create({
                data: {
                    plays: {
                        create: [
                            createTeam(
                                team1Points,
                                team2Points,
                                userIds[0],
                                userIds[2]
                            ),
                            createTeam(
                                team2Points,
                                team1Points,
                                userIds[1],
                                userIds[3]
                            ),
                        ],
                    },
                },
            });

            function createTeam(myPoints, otherPoints, user1, user2) {
                return {
                    team: {
                        create: {
                            points: myPoints,
                            stiche1: 0,
                            stiche2: 0,
                            playsin: {
                                create: [
                                    {
                                        userid: user1,
                                    },
                                    {
                                        userid: user2,
                                    },
                                ],
                            },
                        },
                    },
                    won: myPoints > otherPoints,
                };
            }

            console.log(create);
            res.status(200).json({ massage: "Yes" });
            return;
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Database Error" });
        return;
    }
};
