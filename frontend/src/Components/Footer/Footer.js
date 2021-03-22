import React from "react";
import Copyright from "../../assets/copyright-24px.svg";
import Info from "../../assets/info-24px.svg";
import Mail from "../../assets/contact_mail-24px.svg";
import Bugs from "../../assets/bug_report-24px.svg";

const Footer = ({ isDarkmode }) => {
    return (
        <footer className="bg-white dark:bg-whiteDark mt-auto  dark:text-white">
            <div className="max-w-1/9 w-1450 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 m-auto">
                <div className="flex py-6 items-center gap-3 m-auto">
                    <img
                        src={Copyright}
                        alt="Copyright"
                        className={`h-1.25 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <p>2021, Fallmerayer, Batadú</p>
                </div>
                <div className="flex py-6 items-center gap-3 m-auto">
                    <img
                        src={Info}
                        alt="Info"
                        className={`h-1.25 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <p>About</p>
                </div>
                <div className="flex py-6 items-center gap-3 m-auto">
                    <img
                        src={Bugs}
                        alt="Bugs"
                        className={`h-1.25 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <p>Bugs reporten</p>
                </div>
                <div className="flex py-6 items-center gap-3 m-auto">
                    <img
                        src={Mail}
                        alt="Email"
                        className={`h-1.25 ${isDarkmode ? "whiteSVG" : null}`}
                    />
                    <p>Email: batadu@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
