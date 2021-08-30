import "../styles/app.css";
import { Provider } from "next-auth/client";
import { useState, useEffect } from "react";
import io from "socket.io-client";
let socket = io("http://localhost:8080");

function MyApp({ Component, pageProps }) {
    const [isDarkmode, setIsDarkmode] = useState(false);
    const [reconnect, setReconnect] = useState(false);
    const [team, setTeam] = useState(0);

    useEffect(() => {
        //enable or disable darkmode
        if (isDarkmode) {
            document.getElementsByTagName("html")[0].classList.add("dark");
            document.body.classList.remove("scrollWhite");
            document.body.classList.add("scrollDark");
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark");
            document.body.classList.add("scrollWhite");
            document.body.classList.remove("scrollDark");
        }
        localStorage.setItem("darkmode", isDarkmode);
    }, [isDarkmode]);

    return (
        <Provider session={pageProps.session}>
            <Component
                {...pageProps}
                setIsDarkmode={setIsDarkmode}
                isDarkmode={isDarkmode}
                socket={socket}
                setReconnect={setReconnect}
                team={team}
                setTeam={setTeam}
            />
        </Provider>
    );
}

export default MyApp;
