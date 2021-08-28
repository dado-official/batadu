import "../styles/app.css";
import "tailwindcss/tailwind.css";
import Layout from "../comps/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
