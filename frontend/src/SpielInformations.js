import React, { useState, useEffect } from "react";
import PunkteTabelle from "./PunkteTabelle";
import Stich from "./Stich";
import SelectInformations from "./SelectInformations";

const SpielInformations = () => {
    const [selected, setSelected] = useState("Stich 1");

    function selectHandler(e) {
        setSelected(e.target.innerHTML);
    }

    return (
        <div>
            <div className="flex bg-roomGray rounded-t-st">
                <SelectInformations
                    selectHandler={selectHandler}
                    selected={selected}
                    name="Punkte"
                />
                <SelectInformations
                    selectHandler={selectHandler}
                    selected={selected}
                    name="Stich 1"
                />
                <SelectInformations
                    selectHandler={selectHandler}
                    selected={selected}
                    name="Stich 2"
                />
            </div>
            <div>
                {selected === "Punkte" ? (
                    <PunkteTabelle />
                ) : selected === "Stich 1" ? (
                    <Stich />
                ) : null}
            </div>
        </div>
    );
};

export default SpielInformations;
