import Layout from "../../comps/Layout";
import { getSession } from "next-auth/client";

function Spielen({ session, setIsDarkmode, isDarkmode }) {
    return (
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            setIsDarkmode={setIsDarkmode}
        >
            Mensch
        </Layout>
    );
}

export default Spielen;

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
