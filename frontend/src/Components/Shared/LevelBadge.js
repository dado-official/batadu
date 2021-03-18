import React from "react";
import Badge from "../../assets/verified-24px.svg";

const LevelBadge = ({ level, size }) => {
    return (
        <div
            className="relative"
            style={{ height: `${size}`, fontSize: `${size}` }}
        >
            <img src={Badge} alt="Badge" className="h-full" />
            <p
                className={`text-white absolute top-1/2 left-1/2 `}
                d
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
