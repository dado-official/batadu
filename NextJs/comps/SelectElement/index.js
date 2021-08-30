const SelectElement = ({ value, setSelectValue, selectValue }) => {
    function selectValueHandler() {
        setSelectValue(value);
    }
    return (
        <p
            className={`text-center text-black py-2 bg-bgWhite dark:bg-whiteDark border-2 border-gray transition-all dark:text-white rounded-st flex-1 cursor-pointer ${
                selectValue === value
                    ? "font-bold dark:text-primaryDark ring-4 ring-primaryLight border-primary dark:ring-primaryDark"
                    : null
            }`}
            onClick={selectValueHandler}
        >
            {value}
        </p>
    );
};

export default SelectElement;
