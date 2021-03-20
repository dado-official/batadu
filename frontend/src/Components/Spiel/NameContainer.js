import React from "react";

const NameContainer = ({ name }) => {
    return (
        <div className="bg-primary text-white text-xs sm:text-base py-1 sm:py-1.5 px-2 sm:px-3 rounded-st">
            <p>{name}</p>
        </div>
    );
};

export default NameContainer;
