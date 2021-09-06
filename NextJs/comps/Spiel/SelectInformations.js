import React from "react";

const SelectInformations = ({ selectHandler, selected, name }) => {
    return (
        <div className="flex-1 relative">
            <p
                className={`transition-all text-center py-3 cursor-pointer ${
                    selected === name
                        ? "text-primary shadow font-medium dark:text-primaryDark bg-white"
                        : "text-gray hover:text-logoGray"
                }`}
                onClick={selectHandler}
            >
                {name}
            </p>
            {selected === name ? (
                <div className="bg-primary dark:bg-primaryDark z-10 h-1 w-full absolute -bottom-0" />
            ) : null}
        </div>
    );
};

export default SelectInformations;
