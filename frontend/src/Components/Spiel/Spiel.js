import React, { useEffect, useState } from "react";
import Tisch from "./Tisch";
import SpielInformations from "./SpielInformations";
import Chat from "./Chat";

const Spiel = ({ setUrl }) => {
    const [geboten, setGeboten] = useState(2);
    const [schlag, setSchlag] = useState("Laub 7");
    const [trumpf, setTrumpf] = useState("Schell X");

    useEffect(() => {
        setUrl("/");
    }, []);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 w-1450 max-w-1/9 mx-auto gap-12 mt-16">
            <div className="xl:col-span-2 relative">
                <div className="flex justify-center mt-8">
                    <Tisch geboten={geboten} />
                </div>
                <div className="flex justify-between mt-28 md:mt-28 mb-16 flex-wrap">
                    <div className="flex justify-between md:flex-col gap-1 sm:gap-8 md:gap-2 w-full md:w-max mb-4 md:mb-0">
                        <button className="btn bg-white border-2 border-black w-full">
                            Bieten
                        </button>
                        <button className="btn bg-white border-2 border-black opacity-20 w-full">
                            Schönere
                        </button>
                        <button className="btn bg-white border-2 border-black opacity-20 w-full">
                            Schlagtausch
                        </button>
                    </div>
                    {/*my cards*/}
                    <div className=" h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white"></div>
                    <div className=" h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white"></div>
                    <div className=" h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white"></div>
                    <div className=" h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white"></div>
                    <div className=" h-7.92rem md:h-8.8rem w-4.275rem md:w-4.75rem bg-white"></div>
                    <div className="flex flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static sm:flex-col justify-between md:justify-start w-full sm:w-max mt-4 md:mt-0">
                        <p>
                            Schlag: <span className="font-bold">{schlag}</span>
                        </p>
                        <p>
                            Trumpf: <span className="font-bold">{trumpf}</span>
                        </p>
                        <p className="block sm:hidden">
                            Geboten:{" "}
                            <span className="font-bold">{geboten}</span>
                        </p>
                    </div>
                </div>
            </div>
            {/*Rechte Seite */}
            <div className="xl:col-span-1 mb-16 flex flex-col">
                <SpielInformations />
                <Chat />
            </div>
        </div>
    );
};

export default Spiel;
