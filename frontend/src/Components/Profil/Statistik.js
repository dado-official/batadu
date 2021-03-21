import React from "react";

const Statistik = ({ typ, data, percentage, extra }) => {
    return (
        <div className="rounded-st bg-gray-200 dark:bg-statistikGray dark:text-white w-full py-4 px-8 flex  justify-between">
            <div>
                <p className="text-sm">{typ}</p>
                <div className="flex items-end">
                    <h6 className="text-2xl font-bold">{data}</h6>
                    <p className="text-sm pl-2">{extra}</p>
                </div>
            </div>
            {percentage !== undefined ? (
                <div className="h-full w-2 relative">
                    <div className="h-full w-full rounded-st bg-secondary dark:bg-secondaryDark opacity-20"></div>
                    <div
                        className="w-full rounded-st bg-secondary dark:bg-secondaryDark absolute bottom-0 left-0"
                        style={{ height: `${percentage}%` }}
                    ></div>
                </div>
            ) : null}
        </div>
    );
};

export default Statistik;
