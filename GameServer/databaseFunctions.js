const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    addGame: async function (userIds, team1Points, team2Points, maxPoints) {
        console.log(userIds);

        const createGame = await prisma.game.create({
            data: {
                plays: {
                    create: [
                        createTeamObj(
                            team1Points,
                            team2Points,
                            userIds[0],
                            userIds[2]
                        ),
                        createTeamObj(
                            team2Points,
                            team1Points,
                            userIds[1],
                            userIds[3]
                        ),
                    ],
                },
            },
        });

        const incrementXp = await prisma.users.updateMany(
            createIncrementObj(
                team1Points,
                team2Points,
                userIds[0],
                userIds[2],
                maxPoints
            )
        );
        const incrementXp2 = await prisma.users.updateMany(
            createIncrementObj(
                team2Points,
                team1Points,
                userIds[1],
                userIds[3],
                maxPoints
            )
        );

        console.log(incrementXp);
        console.log(incrementXp2);

        function createIncrementObj(
            myPoints,
            otherPoints,
            user1,
            user2,
            maxPoints
        ) {
            return {
                where: {
                    OR: [
                        {
                            id: user1,
                        },
                        {
                            id: user2,
                        },
                    ],
                },
                data: {
                    xp: {
                        increment: maxPoints * (myPoints > otherPoints ? 2 : 1),
                    },
                },
            };
        }

        function createTeamObj(myPoints, otherPoints, user1, user2) {
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
    },
};
