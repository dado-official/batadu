import React, { useState, useEffect, useRef } from "react";
import SearchResults from "./SearchResults";
import SearchInput from "../Shared/SearchInput";
import axios from "axios";

const Search = ({ isDarkmode }) => {
    const [search, setSearch] = useState("");
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

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

    useEffect(() => {
        if (search != "") {
            axios
                .get("http://10.10.30.218:42069/users/search", {
                    params: {
                        username: search.toLocaleLowerCase(),
                    },
                })
                .then((res) => {
                    setSearchResults(res.data);
                });
        }
    }, [search]);

    return (
        <div
            ref={searchResultRef}
            className="relative"
            onClick={openSearchHandler}
        >
            <SearchInput
                search={search}
                setSearch={setSearch}
                isDarkmode={isDarkmode}
            />
            <div>
                {isOpenSearch && search !== "" ? (
                    <SearchResults
                        isDarkmode={isDarkmode}
                        searchResults={searchResults}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default Search;
