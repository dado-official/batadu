import React from "react";
import SearchIcon from "../../assets/search-24px.svg";

const SearchInput = ({ search, setSearch }) => {
    function searchHandler(e) {
        setSearch(e.target.value);
    }
    return (
        <div className="bg-white rounded-st relative py-2 flex items-center">
            <img src={SearchIcon} alt="Lupe" className="px-4" />
            <input
                type="text"
                className="focus:outline-none flex-1 mr-4"
                value={search}
                onChange={searchHandler}
                placeholder="Suchen"
            ></input>
        </div>
    );
};

export default SearchInput;
