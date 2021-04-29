import React from "react";
import Badge from "../../assets/verified-24px.svg";

const LevelBadge = ({ level, size, className, isDarkmode }) => {
    return (
        <div
            className={`relative ${className !== undefined ? className : null}`}
            style={{
                height: `${size}`,
                fontSize: `${size}`,
            }}
        >
            <img
                src={Badge}
                alt="Badge"
                className={`h-full ${
                    isDarkmode ? "secondaryDarkSVG" : "secondarySVG"
                }`}
            />
            <p
                className={`text-white dark:text-black absolute top-1/2 left-1/2 `}
                style={{
                    transform: "translate(-50%, -50%)",
                    fontSize: `${
                        level > 90 ? "0.3em" : level > 9 ? "0.35em" : "0.4em"
                    }`,
                }}
            >
                {level}
            </p>
        </div>
    );
};

export default LevelBadge;
