import React from "react";
import { Link } from "react-router-dom";
import LevelBadge from "../Shared/LevelBadge";

const SearchResultElement = ({ level, username, isDarkmode }) => {
    return (
        <Link to={`/profile/${username}`}>
            <div className="bg-white dark:bg-whiteDark dark:text-white relative py-2 flex items-center">
                <div className="pr-4">
                    <LevelBadge
                        level={level}
                        size="1.7rem"
                        isDarkmode={isDarkmode}
                    />
                </div>
                <p className="flex-1 mr-4">{username}</p>
            </div>
        </Link>
    );
};

export default SearchResultElement;
