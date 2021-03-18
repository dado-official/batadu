import React from "react";
import SearchResultElement from "./SearchResultElement";

const SearchResults = () => {
    return (
        <div
            className="w-full absolute bottom-0 left-0 rounded-st max-h-52 bg-white z-10 px-4 overflow-auto"
            style={{ transform: "translateY(calc(100% + 0.5rem)" }}
        >
            <SearchResultElement level={3} username="Legendbenni" />
            <SearchResultElement level={3} username="Legendbenni" />
            <SearchResultElement level={3} username="Legendbenni" />
            <SearchResultElement level={3} username="Legendbenni" />
            <SearchResultElement level={3} username="Legendbenni" />
            <SearchResultElement level={3} username="Legendbenni" />
            <SearchResultElement level={3} username="Legendbenni" />
        </div>
    );
};

export default SearchResults;
