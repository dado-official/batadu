import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "../assets/search-24px.svg";
import SearchResults from "./SearchResults";

const Search = () => {
    const [search, setSearch] = useState("");
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    function searchHandler(e) {
        setSearch(e.target.value);
    }

    function openSearchHandler() {
        setIsOpenSearch(true);
    }

    const searchResultRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (
                searchResultRef.current &&
                !searchResultRef.current.contains(e.target)
            ) {
                setIsOpenSearch(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div
            className="bg-white rounded-st relative py-2 flex items-center"
            onClick={openSearchHandler}
        >
            <img src={SearchIcon} alt="Lupe" className="px-4" />
            <input
                type="text"
                className="focus:outline-none flex-1 mr-4"
                value={search}
                onChange={searchHandler}
                placeholder="Suchen"
            ></input>
            <div ref={searchResultRef}>
                {isOpenSearch && search !== "" ? <SearchResults /> : null}
            </div>
        </div>
    );
};

export default Search;
