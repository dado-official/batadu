import React from "react";

const SelectElement = ({ value, setSelectValue, selectValue }) => {
    function selectValueHandler() {
        setSelectValue(value);
    }
    return (
        <p
            className={`text-center hover:bg-gray-200 dark:hover:bg-whiteDarkHover transition-all py-2 bg-white dark:bg-whiteDark dark:text-white rounded-st flex-1 cursor-pointer ${
                selectValue === value
                    ? "font-bold text-primary dark:text-primaryDark ring-4 ring-primary dark:ring-primaryDark"
                    : null
            }`}
            onClick={selectValueHandler}
        >
            {value}
        </p>
    );
};

export default SelectElement;
