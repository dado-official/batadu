import { Fragment } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Head from "next/head";

function Layout({
    children,
    title,
    session,
    isDarkmode,
    setIsDarkmode,
    spielen,
    rank,
    profil,
}) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Multiplayer Online watten mit Freunden"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar
                session={session}
                isDarkmode={isDarkmode}
                setIsDarkmode={setIsDarkmode}
                spielen={spielen}
                rank={rank}
                profil={profil}
            />
            <main className="ml-20">{children}</main>
            <Footer />
        </Fragment>
    );
}

export default Layout;