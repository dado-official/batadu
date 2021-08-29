import "../styles/app.css";
import { Provider } from "next-auth/client";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const [isDarkmode, setIsDarkmode] = useState(true);

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
            />
        </Provider>
    );
}

export default MyApp;
