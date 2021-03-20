import React, { useState, useEffect, forwardRef } from "react";
import PunkteTabelle from "./PunkteTabelle";
import Stich from "./Stich";
import SelectInformations from "./SelectInformations";

const SpielInformations = forwardRef(({}, ref) => {
    const [selected, setSelected] = useState("Stich 1");

    function selectHandler(e) {
        setSelected(e.target.innerHTML);
    }

    return (
        <div ref={ref} className="pt-20 -mt-28 xl:pt-0 xl:mt-0">
            <div className="flex bg-spielGray rounded-t-st">
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
});

export default SpielInformations;
