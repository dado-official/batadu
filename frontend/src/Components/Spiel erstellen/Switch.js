import React from "react";

const Switch = ({ isPasswordHandler }) => {
    return (
        <div className="container">
            <label className="switch">
                <input type="checkbox" onClick={isPasswordHandler} />{" "}
                <div></div>
            </label>
        </div>
    );
};

export default Switch;
