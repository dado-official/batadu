import React from "react";

const UserGameInfo = ({ team, stiche }) => {
    return (
        <div className="flex">
            <p className="bg-primaryLight text-xs text-black py-2 px-3 border-gray-700 border-r-2 rounded-l-st">
                Team {team}
            </p>
            <p className="bg-primaryLight text-xs text-black py-2 px-3 rounded-r-st">
                {stiche} Stiche
            </p>
        </div>
    );
};

export default UserGameInfo;
