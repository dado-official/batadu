import React, { useEffect, useState } from "react";

const Homepage = () => {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);

    useEffect(() => {
        document.addEventListener("mousemove", function (e) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            setXAxis(xAxis);
            let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            setYAxis(yAxis);
        });
    }, []);

    return (
        <div className="flex w-1450 max-w-1/9 mx-auto pt-20">
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
            <div
                className="flex-1 flex items-center justify-center"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="bg-white card rounded-3xl border-8 border-gray-500 w-72  h-110rem">
                    <div
                        className="text-center"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        Hallo
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
