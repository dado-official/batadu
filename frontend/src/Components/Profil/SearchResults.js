import React from "react";
import SearchResultElement from "./SearchResultElement";

const SearchResults = ({ isDarkmode, searchResults }) => {
    return (
        <div
            className="w-full absolute bottom-0 left-0 rounded-st max-h-52 bg-white dark:bg-whiteDark z-10 px-4 overflow-auto"
            style={{ transform: "translateY(calc(100% + 0.5rem)" }}
        >
            {searchResults.map((element) => {
                return (
                    <SearchResultElement
                        username={element.username}
                        isDarkmode={isDarkmode}
                    />
                );
            })}
        </div>
    );
};

export default SearchResults;
