import React, { useEffect, useState } from "react";
import Herz from "./assets/herz.svg";
import Laub from "./assets/laub.svg";

const Homepage = () => {
    const [yAxis, setYAxis] = useState(0);
    const [xAxis, setXAxis] = useState(0);

    useEffect(() => {
        document.addEventListener("mousemove", function (e) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / -80;
            console.log(xAxis);
            let yAxis = (window.innerHeight / 2 - e.pageY) / -40;
            setXAxis(xAxis);
            setYAxis(yAxis);
        });
    }, []);

    return (
        <div className="flex w-1450 max-w-1/9 mx-auto pt-28">
            <div className="flex-1">
                <h6 className="pb-2 font-bold text-xl text-gray-600">
                    Sammle Punkte und erhöhe dein Level
                </h6>
                <h1 className="text-7.5xl font-bold  pr-40 pb-8">
                    Kostenlos Online{" "}
                    <span className="text-primary">Watten</span> wie nie zuvor.
                </h1>
                <h5 className="text-7.5 text-gray-600 pr-40">
                    Watten mit einer modernen Grafischen Oberfläche
                </h5>
                <div className="flex gap-4 mt-16">
                    <button className="py-2 bg-primary w-12ch text-white text-2xl rounded-st focus:outline-none">
                        Registrieren
                    </button>
                    <button className="py-2 border-4 w-12ch border-black text-2xl rounded-st focus:outline-none">
                        Anmelden
                    </button>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center card-container">
                <div
                    className="bg-white card rounded-3xl border-8 border-gray-500 w-80  h-110rem relative card"
                    style={{
                        transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
                    }}
                >
                    <div className="card-content">
                        <div className="flex justify-start">
                            <img src={Herz} alt="herz" className="h-16" />
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
                            <img src={Laub} alt="laub" className="h-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
