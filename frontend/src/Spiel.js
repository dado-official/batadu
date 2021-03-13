import React, { useEffect, useState } from "react";
import Tisch from "./Tisch";

const Spiel = () => {
    const [geboten, setGeboten] = useState(2);

    return (
        <div className="grid grid-cols-3 w-1450 max-w-1/9 mx-auto gap-8">
            <div className="col-span-2 ">
                <div className="flex  bg-yellow-100 justify-center mt-16">
                    <Tisch geboten={geboten} />
                </div>
                <div>hirte</div>
            </div>
            <div className="bg-red-300 col-span-1">//chat und so</div>
        </div>
    );
};

export default Spiel;
