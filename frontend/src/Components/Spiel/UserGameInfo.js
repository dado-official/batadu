import React from "react";

const UserGameInfo = ({ team, stiche }) => {
    return (
        <div className="flex">
            <p className="bg-primaryLight dark:bg-primaryLightDark text-xxs sm:text-xs text-black dark:text-white py-1 sm:py-2 px-2 sm:px-3 border-gray-700 dark:border-gray-300 border-r-2 rounded-l-st">
                Team {team}
            </p>
            <p className="bg-primaryLight dark:bg-primaryLightDark text-xxs sm:text-xs text-black dark:text-white py-1 sm:py-2 px-2 sm:px-3 rounded-r-st">
                {stiche} Stiche
            </p>
        </div>
    );
};

export default UserGameInfo;
