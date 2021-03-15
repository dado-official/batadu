import React from "react";

const PunkteSelector = ({ punkte, setSelectPunkte, selectPunkte }) => {
    function selectPunkteHandler() {
        setSelectPunkte(punkte);
    }
    return (
        <p
            className={`px-10 py-2 bg-white rounded-st w-min cursor-pointer ${
                selectPunkte === punkte ? "font-bold ring-4 ring-primary" : null
            }`}
            onClick={selectPunkteHandler}
        >
            {punkte}
        </p>
    );
};

export default PunkteSelector;
