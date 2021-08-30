import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

function Layout({ children, title, session, isDarkmode, setIsDarkmode }) {
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
            <Header
                session={session}
                isDarkmode={isDarkmode}
                setIsDarkmode={setIsDarkmode}
            />
            {children}
            <Footer />
        </Fragment>
    );
}

export default Layout;
