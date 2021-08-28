import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default Layout;
