import React from "react";
import Copyright from "../../assets/copyright-24px.svg";
import Info from "../../assets/info-24px.svg";
import Mail from "../../assets/contact_mail-24px.svg";
import Bugs from "../../assets/bug_report-24px.svg";

const Footer = () => {
    return (
        <footer className="bg-white mt-auto">
            <div className="flex justify-between items-center w-1450 mx-auto max-w-1/9">
                <div className="flex py-6 items-center gap-3">
                    <img src={Copyright} alt="Copyright" className="h-1.25" />
                    <p>2021, Fallmerayer, Batadú</p>
                </div>
                <div className="flex py-6 items-center gap-3">
                    <img src={Info} alt="Info" className="h-1.25" />
                    <p>About</p>
                </div>
                <div className="flex py-6 items-center gap-3">
                    <img src={Bugs} alt="Bugs" className="h-1.25" />
                    <p>Bugs reporten</p>
                </div>
                <div className="flex py-6 items-center gap-3">
                    <img src={Mail} alt="Email" className="h-1.25" />
                    <p>Email: batadu@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
