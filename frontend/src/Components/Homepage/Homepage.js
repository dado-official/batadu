import React, { useEffect, useState } from "react";
import Herz from "../../assets/herz.svg";
import Laub from "../../assets/laub.svg";
import { Link } from "react-router-dom";

const Homepage = ({ setUrl, isDarkmode }) => {
    const [yAxis, setYAxis] = useState(0);
    const [xAxis, setXAxis] = useState(0);

    useEffect(() => {
        setUrl("/");
        //Effekt für die Karte
        document.addEventListener("mousemove", function (e) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / -80;
            let yAxis = (window.innerHeight / 2 - e.pageY) / -40;
            setXAxis(xAxis);
            setYAxis(yAxis);
        });
    }, []);

    return (
        <div className="flex w-1450 max-w-1/9 mx-auto py-12 md:my-auto">
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
                    <button className="py-2 btnPrimary bg-primary dark:bg-primaryDark w-12ch text-white dark:text-black text-2xl rounded-st focus:outline-none">
                        <Link to="/registrieren">Registrieren</Link>
                    </button>
                    <button className="py-2 transition-all dark:hover:text-primaryDark dark:hover:border-primaryDark hover:text-primary border-4 hover:border-primary  w-12ch border-black dark:border-white dark:text-white text-2xl rounded-st focus:outline-none">
                        <Link to="/anmelden">Anmelden</Link>
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
                            <img src={Herz} alt="herz" className="h-16" />
                        </div>
                        <h4
                            className=" text-primary text-6xl tran text-center font-abril font-normal"
                            style={{
                                transform: "translateZ(100px)",
                            }}
                        >
                            Batadú
                        </h4>
                        <div className="flex justify-end">
                            <img src={Laub} alt="laub" className="h-16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
