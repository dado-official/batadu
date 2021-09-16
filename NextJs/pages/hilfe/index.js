import { getSession } from "next-auth/client";
import HilfeContainer from "../../comps/HilfeContainer";
import Layout from "../../comps/Layout";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function Hilfe({ session, setIsDarkmode, isDarkmode, level }) {
    return (
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            help={true}
            level={level}
        >
            <div className="w-1450 max-w-1/9 mx-auto mt-12 mb-16 text-center">
                <h3 className="font-medium">Hilfe</h3>
                <div className="mt-8 grid grid-cols-2 grid-flow-row gap-8">
                    <HilfeContainer
                        title="Bugs Melden"
                        description="Haben Sie Bugs(Fehler) auf dieser Webseite gefunden? Wenn ja dann können sie diese auf unserer Repo melden."
                        buttonName="Melden"
                        img="/githubWhite.svg"
                        link="https://github.com/dado-official/batadu/issues"
                    />
                    <HilfeContainer
                        title="Feedback"
                        description="Wir würden uns sehr über Ihr Feedback freuen, damit wir uns verbessern können."
                        buttonName="Feedback geben"
                        img="/mail.svg"
                        link="mailto: support@batadu.com? subject = Feedback"
                    />
                    <HilfeContainer
                        img="/paypal.svg"
                        title="Projekt unterstützen"
                        description="Sie können sehr gerne dieses Projekt unterstützen, damit es in den naschten Jahren leben wird und damit es regelmäßig neue Feature gibt."
                        buttonName="Unterstützen"
                    />
                    <HilfeContainer
                        img="/mail.svg"
                        title="Sponser werden"
                        description="Willst du Sponsor dieses Projektes werden, wenn ja dann kontaktiere uns an unserer Mail (business@batadu.com). "
                        buttonName="Kontakieren"
                        link="mailto: business@batadu.com? subject = Sponsor"
                    />
                    <HilfeContainer
                        img="/discordWhite.svg"
                        title="Community Server"
                        description="Trete unserem Community Server bei und lerne neue leidenschaftliche Watter kennen."
                        buttonName="Beitreten"
                        link="https://discord.gg/4RX68WRXwg"
                    />
                    <HilfeContainer
                        img="/githubWhite.svg"
                        title="Open Source Projekt"
                        description="Bist du ein Entwickler und hast lust etwas zu diesem Projekt beizutragen? Kontakiere uns auf unserer Repo."
                        buttonName="Beitragen"
                        link="https://github.com/dado-official/batadu/pulls"
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Hilfe;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        const [{ level }] =
            await prisma.$queryRaw`Select (Select level.nr FROM level WHERE xpreq <= users.xp ORDER BY xpreq DESC LIMIT 1) AS "level" FROM users Where id = ${parseInt(
                session.userId
            )}`;
        prisma.$disconnect();

        console.log(level);
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
