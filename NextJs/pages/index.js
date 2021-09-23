import Link from "next/link";
import { getSession, providers } from "next-auth/client";
import YouTube from "react-youtube";
import Image from "next/image";
import Container from "../comps/HpContainer";
import Head from "next/head";
import { useRef } from "react";

export default function Home({
    isDarkmode,
    setIsDarkmode,
    session,
    providers,
}) {
    const ref = useRef();
    return (
        <main className="w-full">
            <Head>
                <title>Batadù - Online Watten</title>
                <meta
                    name="description"
                    content="Multiplayer Online watten mit Freunden"
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Image
                src="/bg.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                className="z-10"
                blurDataURL="/bg.jpg"
                placeholder="blur"
            />
            <section className="w-1450 max-w-1/9 mx-auto flex items-center my-44">
                <div
                    className="absolute w-full h-full top-0 left-0 z-10 backdrop-filter backdrop-blur-md"
                    style={{ backgroundColor: "rgba(0,0, 0, 0.2)" }}
                ></div>
                <div className="z-10 w-full lg:w-1/2 flex-1">
                    <h1 className="font-medium text-white pb-8 break-words dark:text-white">
                        Kostenlos <br /> Online
                        <span className=" dark:text-primaryDark">
                            {" "}
                            Watten
                            <br />
                        </span>
                        wie nie zuvor.
                    </h1>
                    <p className="dark:text-gray-100 mr-24 text-bgWhite">
                        Batadù ist derzeitig die beste Website zum Online
                        Watten, sie bietet eine wunderschöne Oberfläche und noch
                        vieles mehr an...
                    </p>
                    <div className="flex gap-4 mt-16 font-bold">
                        <button className="py-3 border-2 border-primaryLight px-10 hover:shadow-lg transition-all shadow font-medium bg-primary dark:bg-primaryDark  text-white dark:text-black text-xl rounded focus:outline-none w-max">
                            <Link href="/anmelden">Jetzt spielen</Link>
                        </button>
                        <button
                            onClick={() =>
                                ref.current.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="py-3 px-10 font-medium text-text hover:shadow-lg transition-all shadow bg-white dark:border-white dark:text-white text-xl rounded focus:outline-none w-max"
                        >
                            Mehr erfahren
                        </button>
                    </div>
                    <a
                        href="https://www.freepik.com/vectors/background"
                        className="absolute centerX top-2 text-xxs text-primary"
                    >
                        Background vector created by starline - www.freepik.com
                    </a>
                </div>
                <div className="w-full flex-1 z-10">
                    <div
                        className="relative"
                        style={{ paddingBottom: "50.41%" }}
                    >
                        <iframe
                            src="https://player.vimeo.com/video/612888761?background=1&autoplay=1&;title=0&;byline=0&;portrait=0&;loop=1&;autopause=0&;muted=1"
                            frameborder="0"
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            allowfullscreen=""
                            className="h-full w-full absolute"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section className="relative flex items-center bg-white">
                <div
                    className="absolute w-full h-full top-0 left-0 z-10  backdrop-filter backdrop-blur-2xl"
                    style={{ backgroundColor: "rgba(245, 245, 245, 0.6)" }}
                ></div>
                <div className="w-1450 max-w-1/9 mx-auto z-10 py-16 mt-2 pb-20">
                    <div className="flex justify-between">
                        {Object.values(providers).map((provider) => {
                            return (
                                <Link href="/anmelden" key={provider.name}>
                                    <Image
                                        src={`/${provider.name}.svg`}
                                        height="54"
                                        width="54"
                                        alt={provider.name}
                                        className={`cursor-pointer ${
                                            isDarkmode &&
                                            provider.name == "GitHub"
                                                ? "whiteSVG"
                                                : ""
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mt-44 text-center" ref={ref}>
                        <h4 className="font-medium">Mehr als nur Watten</h4>
                        <div className="mt-12 gap-8 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            <Container
                                img="/xp.svg"
                                title="XP Sammeln"
                                describtion="Sammle durchs spielen XP um somit auf einen höheren level zu sein."
                            />
                            <Container
                                img="/tpy.svg"
                                title="Rangliste"
                                describtion="Die Rangliste zeigt dei besten Spieler an. Sichere dir den 1. Platz"
                            />
                            <Container
                                img="/secure.svg"
                                title="Sehr Sicher"
                                describtion="Durch die Verwendung von HTTPS und OAuth brauchts du dir keine sorgen um deine Daten zu tun."
                            />
                            <Container
                                img="/discord2.svg"
                                title="Community Server"
                                describtion="Trete unserem Community Server bei und lerne neue Watter kennen."
                                link={{
                                    link: "https://discord.gg/4RX68WRXwg",
                                    title: "Beitreten",
                                }}
                            />
                            <Container
                                img="/github2.svg"
                                title="Open Source Projekt"
                                describtion="Du kannst selber für dieses Projekt etwas beitragen."
                                link={{
                                    link: "https://github.com/dado-official/batadu/pulls",
                                    title: "Repository",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="w-1450 max-w-1/9 mx-auto z-10 grid grid-flow-row lg:grid-cols-2 grid-cols-1 text-center py-20 gap-16 lg:gap-0">
                    <div className="lg:mr-8 flex justify-between flex-col">
                        <div>
                            <h4 className="font-medium">
                                Projekt unterstützen
                            </h4>
                            <p className="mt-4 text-text">
                                Sie können sehr gerne dieses Projekt
                                unterstützen, damit es in den naschten Jahren
                                leben wird und damit es regelmäßig neue Feature
                                gibt.
                            </p>
                        </div>

                        <a
                            href={"https://paypal.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-full shadow hover:shadow-lg transition-all bg-primary rounded text-white py-2 text-xl mt-8 flex items-center justify-center gap-4">
                                <div className="relative w-6 h-6">
                                    <Image
                                        src="/paypal.svg"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                Unterstützen
                            </button>
                        </a>
                    </div>
                    <div className="lg:ml-8 h-full flex flex-col justify-between">
                        <div>
                            <h4 className="font-medium">Sponsor werden</h4>
                            <p className="mt-4 text-text">
                                Willst du Sponsor dieses Projektes werden, wenn
                                ja dann kontaktiere uns an unserer Mail
                                (business@batadu.com).
                            </p>
                        </div>

                        <a
                            href={
                                "mailto:business@batadu.com?subject = Sponsor"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-full shadow hover:shadow-lg transition-all bg-primary rounded text-white py-2 text-xl mt-8 flex items-center justify-center gap-4">
                                <div className="relative w-6 h-6">
                                    <Image
                                        src="/mail.svg"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                Kontaktieren
                            </button>
                        </a>
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
