import React, { useEffect } from "react";

const Stich = ({ gewinner, karten, pos, calcPos }) => {
    useEffect(() => {
        console.log("poooooosss: " + calcPos(gewinner + pos));
    }, [gewinner]);
    return (
        <div className="bg-white dark:bg-whiteDark relative flex justify-center items-center w-full h-96 xl:h-64 rounded-b-st">
            <div className="h-56 w-56 relative">
                <div
                    className={`h-5.3125rem w-2.875rem bg-spielGray absolute top-0 left-1/2 border-2 ${
                        calcPos(2 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                >
                    {karten[calcPos(2 + pos)]}
                </div>
                <div
                    className={`h-5.3125rem w-2.875rem bg-spielGray absolute top-1/2 left-0 border-2 ${
                        calcPos(3 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateY(-50%)" }}
                >
                    {karten[calcPos(3 + pos)]}
                </div>
                <div
                    className={`h-5.3125rem w-2.875rem bg-spielGray absolute top-1/2 right-0 border-2 ${
                        calcPos(1 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateY(-50%)" }}
                >
                    {karten[calcPos(1 + pos)]}
                </div>
                <div
                    className={`h-5.3125rem w-2.875rem bg-spielGray absolute bottom-0 left-1/2 border-2 ${
                        calcPos(0 + pos) === gewinner
                            ? "border-secondary dark:border-secondaryDark"
                            : null
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                >
                    {karten[calcPos(0 + pos)]}
                </div>
            </div>
        </div>
    );
};

export default Stich;
