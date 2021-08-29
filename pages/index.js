import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../comps/Layout";
import { getSession } from "next-auth/client";

export default function Home({ isDarkmode, session }) {
    const [yAxis, setYAxis] = useState(0);
    const [xAxis, setXAxis] = useState(0);

    useEffect(() => {
        //Card Effect
        document.addEventListener("mousemove", function (e) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / -80;
            let yAxis = (window.innerHeight / 2 - e.pageY) / -40;
            setXAxis(xAxis);
            setYAxis(yAxis);
        });
    }, []);

    return (
        <Layout session={session} isDarkmode={isDarkmode}>
            <main className="flex w-1450 max-w-1/9 mx-auto py-12 md:my-auto">
                <div className="w-full lg:w-1/2">
                    <h6 className="pb-2 font-bold text-xl text-gray-600 dark:text-gray-200 break-words">
                        Sammle Punkte und erhöhe dein Level
                    </h6>
                    <h1 className="text-7xl lg:text-7.5xl font-bold pb-8 break-words dark:text-white">
                        Kostenlos Online{" "}
                        <span className="text-primary dark:text-primaryDark">
                            Watten{" "}
                        </span>
                        wie nie zuvor.
                    </h1>
                    <h5 className="text-7.5 text-gray-600 dark:text-gray-100">
                        Watten mit einer modernen Grafischen Oberfläche
                    </h5>
                    <div className="flex gap-4 mt-16">
                        <button className="py-2 bg-primary dark:bg-primaryDark w-12ch text-white dark:text-black text-2xl rounded-st focus:outline-none">
                            <Link href="/registrieren">Registrieren</Link>
                        </button>
                        <button className="py-2 border-4 w-12ch border-black dark:border-white dark:text-white text-2xl rounded-st focus:outline-none">
                            <Link href="/anmelden">Anmelden</Link>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:flex w-1/2 items-center justify-center card-container">
                    <div
                        className={`bg-white rounded-3xl border-8 border-gray-500 w-80  h-110rem relative card ${
                            isDarkmode ? "cardDark" : "cardWhite"
                        }`}
                        style={{
                            transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
                        }}
                    >
                        <div className="card-content">
                            <div className="flex justify-start">
                                <img
                                    src="/herz.svg"
                                    alt="herz"
                                    className="h-16"
                                />
                            </div>
                            <h4
                                className=" text-logoGray text-6xl tran text-center font-abril font-normal"
                                style={{
                                    transform: "translateZ(100px)",
                                }}
                            >
                                Batadú
                            </h4>
                            <div className="flex justify-end">
                                <img
                                    src="/laub.svg"
                                    alt="laub"
                                    className="h-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

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
        props: { session: null },
    };
}
