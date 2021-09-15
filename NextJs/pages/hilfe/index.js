import { getSession } from "next-auth/client";
import HilfeContainer from "../../comps/HilfeContainer";
import Layout from "../../comps/Layout";

function Hilfe({ session, setIsDarkmode, isDarkmode }) {
    return (
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            help={true}
        >
            <div className="w-1450 max-w-1/9 mx-auto mt-12 mb-16 text-center">
                <h3 className="font-medium">Hilfe</h3>
                <div className="mt-8 grid grid-cols-2 grid-flow-row gap-8">
                    <HilfeContainer
                        img="/paypal.svg"
                        title="Projekt unterstützen"
                        description="Sie können sehr gerne dieses Projekt unterstützen, damit es in den naschten Jahren leben wird und damit es regelmäßig neue Feature gibt."
                        buttonName="Unterstützen"
                    />
                    <HilfeContainer
                        img="/mail.svg"
                        title="Sponser werden"
                        description="Willst du Sponsor dieses Projektes werden, wenn ja dann kontaktiere uns an unserer Mail. "
                        buttonName="Kontakieren"
                        link="mailto: support@info.batadu"
                    />
                    <HilfeContainer
                        img="/discordWhite.svg"
                        title="Community Server"
                        description="Trete unserem Community Server bei und lerne neue leidenschaftliche Watter kennen."
                        buttonName="Beitreten"
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
