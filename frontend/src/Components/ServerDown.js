import React from "react";
import Fix from "../assets/construction-24px.svg";

const ServerDown = () => {
    return (
        <div
            style={{ width: "100vw", height: "100vh", background: "#eeeff2" }}
            className="flex flex-col justify-center items-center fixed z-20"
        >
            <img src={Fix} alt="Werkzeug" className="w-32" />
            <h2 className="font-bold text-6xl mt-4">Der Server ist down</h2>
            <h4 className="font-bold text-3xl text-gray-500 mt-10">
                Unser Team versucht das Problem zu lösen
            </h4>
        </div>
    );
};

export default ServerDown;
