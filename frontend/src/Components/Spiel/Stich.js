import React, { useEffect } from "react";

const Stich = ({ gewinner, karten, pos, calcPos }) => {
    useEffect(() => {}, [gewinner]);
    return (
        <div className="bg-white dark:bg-whiteDark relative flex justify-center items-center w-full h-96 xl:h-64 rounded-b-st">
            <div className="h-56 w-56 relative">
                <img
                    className={`h-auto w-2.875rem absolute top-0 left-1/2 border-4 ${
                        calcPos(2 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(2 + pos)]
                    )}.png`}
                    alt={karten[calcPos(2 + pos)]}
                />
                <img
                    className={`h-auto w-2.875rem absolute top-1/2 left-0 border-4 ${
                        calcPos(3 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateY(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(3 + pos)]
                    )}.png`}
                    alt={karten[calcPos(3 + pos)]}
                />
                <img
                    className={`h-auto w-2.875rem absolute top-1/2 right-0 border-4 ${
                        calcPos(1 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateY(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(1 + pos)]
                    )}.png`}
                    alt={karten[calcPos(1 + pos)]}
                />
                <img
                    className={`h-auto w-2.875rem absolute bottom-0 left-1/2 border-4 ${
                        calcPos(0 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                    src={`http://10.10.30.218/${decodeURI(
                        karten[calcPos(0 + pos)]
                    )}.png`}
                    alt={karten[calcPos(0 + pos)]}
                />
            </div>
        </div>
    );
};

export default Stich;
