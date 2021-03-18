import React from "react";
import { Link } from "react-router-dom";
import LevelBadge from "./LevelBadge";

const SearchResultElement = ({ level, username }) => {
    return (
        <Link to={`/profile/${username}`}>
            <div className="bg-white relative py-2 flex items-center">
                <div className="pr-4">
                    <LevelBadge level={level} size="1.7rem" />
                </div>
                <p className="flex-1 mr-4">{username}</p>
            </div>
        </Link>
    );
};

export default SearchResultElement;
