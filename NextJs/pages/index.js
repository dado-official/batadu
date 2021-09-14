import Link from "next/link";
import { getSession, providers } from "next-auth/client";
import YouTube from "react-youtube";
import Image from "next/image";

export default function Home({
    isDarkmode,
    setIsDarkmode,
    session,
    providers,
}) {
    return (
        <main className="w-full">
            <Image
                src="/2844246.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                className="z-10"
                blurDataURL="/2844246.jpg"
                placeholder="blur"
            />
            <section className="w-1450 max-w-1/9 mx-auto flex items-center my-44">
                <div
                    className="absolute w-full h-full top-0 left-0 z-10 backdrop-filter backdrop-blur-md"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                ></div>
                <div className="z-10 w-full lg:w-1/2 flex-1">
                    <h1 className="font-medium pb-8 break-words dark:text-white">
                        Kostenlos <br /> Online
                        <span className="text-primary dark:text-primaryDark">
                            {" "}
                            Watten
                            <br />
                        </span>
                        wie nie zuvor.
                    </h1>
                    <p className="dark:text-gray-100 mr-24 text-text">
                        Batadù ist derzeitig die beste Website zum Online
                        Watten, denn Sie bietet eine wunderschöne Oberfläche und
                        noch vieles mehr...
                    </p>
                    <div className="flex gap-4 mt-16 font-bold">
                        <button className="py-3 hover:shadow-lg transition-all shadow font-medium bg-primary dark:bg-primaryDark w-12ch text-white dark:text-black text-xl rounded focus:outline-none">
                            <Link href="/registrieren">Jetzt spielen</Link>
                        </button>
                        <button className="py-3 w-12ch font-medium text-text hover:shadow-lg transition-all shadow bg-white dark:border-white dark:text-white text-xl rounded focus:outline-none">
                            Mehr erfahren
                        </button>
                    </div>
                </div>
                <div className="w-full flex-1 z-10">
                    <div
                        className="relative"
                        style={{ paddingBottom: "56.25%" }}
                    >
                        <YouTube
                            videoId="CEHG_Cfjg34"
                            className="w-full h-full absolute top-0 left-0 rounded"
                        />
                    </div>
                </div>
            </section>
            <section className="relative flex items-center bg-white">
                <div
                    className="absolute w-full h-full top-0 left-0 z-10  backdrop-filter backdrop-blur-lg"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                ></div>
                <div className="w-1450 max-w-1/9 mx-auto z-10 py-16">
                    <div className="flex justify-between">
                        {Object.values(providers).map((provider) => {
                            return (
                                <Image
                                    src={`/${provider.name}.svg`}
                                    height="54"
                                    width="54"
                                    alt={provider.name}
                                    className={`${
                                        isDarkmode && provider.name == "GitHub"
                                            ? "whiteSVG"
                                            : ""
                                    }`}
                                />
                            );
                        })}
                    </div>
                    <div className="mt-40">
                        <h4>Mehr als nur Watten</h4>
                    </div>
                </div>
            </section>
        </main>
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
        props: {
            session: null,

            providers: await providers(context),
        },
    };
}
