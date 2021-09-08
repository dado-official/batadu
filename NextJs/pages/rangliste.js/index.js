import { useState } from "react";
import { getSession } from "next-auth/client";
import Layout from "../../comps/Layout";
import RanglisteTabelle from "./RanglisteTabelle";

function Rangliste({ isDarkmode, setIsDarkmode, session }) {
    const [userList, setUserList] = useState([
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "5689",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "5685",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "4685",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "585",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "61.2",
            points: "5685",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "5685",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "5685",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "5685",
            gamesW: "57",
            id: 2,
        },
        {
            username: "Legenbenni",
            userPic: "https://avatars.githubusercontent.com/u/63723690?v=4",
            winrate: "58",
            points: "5685",
            gamesW: "57",
            id: 2,
        },
    ]);

    return (
        <Layout
            session={session}
            isDarkmode={isDarkmode}
            setIsDarkmode={setIsDarkmode}
            title="Batadu - Rangliste"
            rank={true}
        >
            <div className="flex flex-col justify-center items-center mt-12 w-1450 max-w-1/9 mx-auto">
                <h4>Rangliste</h4>
                <RanglisteTabelle data={userList} />
            </div>
        </Layout>
    );
}

export default Rangliste;

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
