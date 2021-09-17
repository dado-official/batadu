import Head from "next/head";
import { signIn, getSession, providers } from "next-auth/client";
import Provider from "../../comps/Provider";

function index({ providers, isDarkmode }) {
    return (
        <div className="text-black w-full text-center">
            <Head>
                <title>Batadù - Anmelden</title>
                <meta
                    name="description"
                    content="Multiplayer Online watten mit Freunden"
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            {/*signin Container*/}
            <div className="p-12 bg-bgLight2 rounded-st fixed centerAbsolute w-96">
                <h2 className="dark:text-white">Wilkommen</h2>
                <p className="mt-6 mb-4 text-whiteDark dark:text-tableGray">
                    Anmelden mit:
                </p>

                {/*Google signin */}
                <div className="flex flex-col gap-6">
                    {Object.values(providers).map((provider) => {
                        return (
                            <Provider
                                provider={provider}
                                isDarkmode={isDarkmode}
                                key={provider.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default index;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session && session.accessToken) {
        return {
            redirect: {
                destination: "/spielen",
                permanent: false,
            },
        };
    }
    return {
        props: {
            providers: await providers(context),
        },
    };
}
