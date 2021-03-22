import React from "react";
import SearchIcon from "../../assets/search-24px.svg";

const SearchInput = ({ search, setSearch, isDarkmode }) => {
    function searchHandler(e) {
        setSearch(e.target.value);
    }
    return (
        <div className="bg-white dark:bg-whiteDark rounded-st relative py-2 flex items-center">
            <img
                src={SearchIcon}
                alt="Lupe"
                className={`px-4 ${isDarkmode ? "whiteSVG" : null}`}
            />
            <input
                type="text"
                className="focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white"
                value={search}
                onChange={searchHandler}
                placeholder="Suchen"
            ></input>
        </div>
    );
};

export default SearchInput;
