import React, { useState, useEffect, forwardRef } from "react";
import PunkteTabelle from "./PunkteTabelle";
import Stich from "./Stich";
import SelectInformations from "./SelectInformations";

const SpielInformations = forwardRef(
    (
        {
            isDarkmode,
            selected,
            setSelected,
            karten,
            gewinner,
            seeStiche,
            calcPos,
            pos,
            punkte,
            isTeam1Gestrichen,
            isTeam2Gestrichen,
            cardPhotos,
        },
        ref
    ) => {
        function selectHandler(e) {
            setSelected(e.target.innerHTML);
        }

        return (
            <div ref={ref} className="pt-20 -mt-28 xl:pt-0 xl:mt-0">
                <div className="flex bg-spielGray dark:bg-roomBlack dark:text-white rounded-t-st">
                    <SelectInformations
                        selectHandler={selectHandler}
                        selected={selected}
                        name="Punkte"
                    />
                    {seeStiche ? (
                        <SelectInformations
                            selectHandler={selectHandler}
                            selected={selected}
                            name="Stich 1"
                        />
                    ) : null}
                </div>
                <div>
                    {selected === "Punkte" ? (
                        <PunkteTabelle
                            punkte={punkte}
                            isDarkmode={isDarkmode}
                            isTeam1Gestrichen={isTeam1Gestrichen}
                            isTeam2Gestrichen={isTeam2Gestrichen}
                        />
                    ) : selected === "Stich 1" ? (
                        <Stich
                            karten={karten}
                            gewinner={gewinner}
                            seeStiche={seeStiche}
                            calcPos={calcPos}
                            pos={pos}
                            cardPhotos={cardPhotos}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
);

export default SpielInformations;
