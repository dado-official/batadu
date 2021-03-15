import React from "react";

const NameContainer = ({ name }) => {
    return (
        <div className="bg-primary text-white btn">
            <p>{name}</p>
        </div>
    );
};

export default NameContainer;
