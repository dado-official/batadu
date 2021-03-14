import React from "react";

const Stich = () => {
    return (
        <div className="bg-white relative flex justify-center items-center w-full h-64 rounded-b-st">
            <div className="h-56 w-56 relative">
                <div
                    className="h-5.3125rem w-2.875rem bg-roomGray absolute top-0 left-1/2 border-2 border-secondary"
                    style={{ transform: "translateX(-50%)" }}
                ></div>
                <div
                    className="h-5.3125rem w-2.875rem bg-roomGray absolute top-1/2 left-0"
                    style={{ transform: "translateY(-50%)" }}
                ></div>
                <div
                    className="h-5.3125rem w-2.875rem bg-roomGray absolute top-1/2 right-0"
                    style={{ transform: "translateY(-50%)" }}
                ></div>
                <div
                    className="h-5.3125rem w-2.875rem bg-roomGray absolute bottom-0 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                ></div>
            </div>
        </div>
    );
};

export default Stich;
