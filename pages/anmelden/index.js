import Head from "next/head";
import { signIn, getSession, providers } from "next-auth/client";

function index({ providers }) {
    return (
        <div className="text-white w-full">
            <Head>
                <title>Batadù - Anmelden</title>
                <meta
                    name="description"
                    content="Multiplayer Online watten mit Freunden"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*signin Container*/}
            <div className="p-12 bg-bgLight2 rounded-st fixed centerAbsolute w-96">
                <h6 className="text-2xl text-white font-semibold">Welcome</h6>

                <p className="text-sm mt-2 mb-10 text-grayLight">
                    By logging in you accept our{" "}
                    <a
                        href="/Privacy"
                        className="text-blue1 font-semibold hover:underline"
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="/terms"
                        className="text-blue1 font-semibold hover:underline"
                    >
                        Terms of Service
                    </a>
                    .
                </p>
                {/*Google signin */}
                <div className="flex flex-col gap-6">
                    <button
                        className="signinBtn"
                        onClick={() => signIn(providers.github.id)}
                    >
                        <div
                            className="absolute h-max left-8 centerY"
                            style={{ marginTop: "3px" }}
                        ></div>
                        <p>Continue with GitHub</p>
                    </button>

                    <button
                        className="signinBtn"
                        onClick={() => signIn(providers.facebook.id)}
                    >
                        <p>Continue with Facebook</p>
                        <div
                            className="absolute ml-1 left-7 centerY"
                            style={{ marginTop: "3px" }}
                        ></div>
                    </button>
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
