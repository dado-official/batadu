import React from "react";
import Fix from "../../assets/construction-24px.svg";

const ServerDown = ({ isDarkmode }) => {
    return (
        <div
            style={{
                width: "100vw",
                height: "calc(100vh - 4.5rem)",
            }}
            className="bg-bgWhite dark:bg-bgDark fixed z-20 flex justify-center items-center"
        >
            <div className="max-w-1/9 text-center flex flex-col justify-center items-center dark:text-white">
                <img
                    src={Fix}
                    alt="Werkzeug"
                    className={`w-32 ${isDarkmode ? "whiteSVG" : null}`}
                />
                <h2 className="font-bold text-6xl mt-4">Der Server ist down</h2>
                <h4 className="font-bold text-3xl text-gray-500 dark:text-gray-400 mt-10">
                    Unser Team versucht das Problem zu lösen
                </h4>
            </div>
        </div>
    );
};

export default ServerDown;
