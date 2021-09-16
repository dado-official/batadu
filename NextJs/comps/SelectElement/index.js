const SelectElement = ({ value, setSelectValue, selectValue }) => {
    function selectValueHandler() {
        setSelectValue(value);
    }
    return (
        <p
            className={`text-center text-black py-1.5 dark:bg-whiteDark border border-gray transition-all rounded flex-1 cursor-pointer ${
                selectValue === value
                    ? "dark:text-primaryDark ring-2 ring-primaryLight border-primary dark:ring-primaryDark"
                    : null
            }`}
            onClick={selectValueHandler}
        >
            {value}
        </p>
    );
};

export default SelectElement;
