import React, { useState, useEffect, useRef } from "react";
import SearchResults from "./SearchResults";
import SearchInput from "../Shared/SearchInput";

const Search = () => {
    const [search, setSearch] = useState("");
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    useEffect(() => {
        if (!isOpenSearch) setIsOpenSearch(true);
    }, [search]);

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
            ref={searchResultRef}
            className="relative"
            onClick={openSearchHandler}
        >
            <SearchInput search={search} setSearch={setSearch} />
            <div>
                {isOpenSearch && search !== "" ? <SearchResults /> : null}
            </div>
        </div>
    );
};

export default Search;
