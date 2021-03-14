import React, { useEffect, useState } from "react";
import Tisch from "./Tisch";
import SpielInformations from "./SpielInformations";

const Spiel = ({ setUrl }) => {
    const [geboten, setGeboten] = useState(2);
    const [schlag, setSchlag] = useState("Laub 7");
    const [trumpf, setTrumpf] = useState("Schell X");

    useEffect(() => {
        setUrl("/");
    }, []);

    return (
        <div className="grid grid-cols-3 w-1450 max-w-1/9 mx-auto gap-12 mt-16">
            <div className="col-span-2 ">
                <div className="flex justify-center mt-8">
                    <Tisch geboten={geboten} />
                </div>
                <div className="flex justify-between mt-28 mb-16">
                    <div className="flex justify-between flex-col">
                        <button className="btn bg-white border-2 border-black">
                            Bieten
                        </button>
                        <button className="btn bg-white border-2 border-black opacity-20">
                            Schönere
                        </button>
                        <button className="btn bg-white border-2 border-black opacity-20">
                            Schlagtausch
                        </button>
                    </div>
                    {/*my cards*/}
                    <div className="h-8.8rem w-4.75rem bg-white"></div>
                    <div className="h-8.8rem w-4.75rem bg-white"></div>
                    <div className="h-8.8rem w-4.75rem bg-white"></div>
                    <div className="h-8.8rem w-4.75rem bg-white"></div>
                    <div className="h-8.8rem w-4.75rem bg-white"></div>
                    <div>
                        <p>
                            Schlag: <span className="font-bold">{schlag}</span>
                        </p>
                        <p>
                            Trumpf: <span className="font-bold">{trumpf}</span>
                        </p>
                    </div>
                </div>
            </div>
            {/*Rechte Seite */}
            <div className="col-span-1">
                <SpielInformations />
            </div>
        </div>
    );
};

export default Spiel;
