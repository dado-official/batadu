import React from "react";

export default function StatusContainer({ status }) {
    return (
        <div className="bg-secondary dark:bg-secondaryDark text-white dark:text-black text-xs sm:text-base py-1 sm:py-1.5 px-2 sm:px-3 rounded-st">
            <p>{status}</p>
        </div>
    );
}
