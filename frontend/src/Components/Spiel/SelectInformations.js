import React from "react";

const SelectInformations = ({
    selectHandler,
    selected,
    name,
    roundedCorner,
}) => {
    return (
        <div className={`flex-1 relative`}>
            <p
                className={`rounded-${roundedCorner}-st text-center font-bold py-3 cursor-pointer ${
                    selected === name
                        ? "text-primary dark:text-primaryDark"
                        : "hover:bg-gray-100 dark:hover:bg-hoverSpielDark transition-all"
                }`}
                onClick={selectHandler}
            >
                {name}
            </p>
            {selected === name ? (
                <div className="bg-primary dark:bg-primaryDark z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5" />
            ) : null}
        </div>
    );
};

export default SelectInformations;
