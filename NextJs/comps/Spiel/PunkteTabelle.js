import React from "react";

const PunkteTabelle = ({
    isDarkmode,
    punkte,
    isTeam1Gestrichen,
    isTeam2Gestrichen,
}) => {
    return (
        <div
            className={`bg-white resize-y dark:bg-whiteDark text-xs text-center h-96 xl:h-64 overflow-auto stiche ${
                isDarkmode ? "scrollDark" : "scrollWhite"
            }`}
        >
            <table className="mx-auto my-6 dark:text-white relative text-sm text-center">
                <div
                    className={`bg-gray-500 absolute ${
                        isTeam1Gestrichen ? "left-1/4" : "hidden"
                    } top-5`}
                    style={{
                        height: "calc(100% - 2rem)",
                        width: "1px",
                    }}
                ></div>
                <div
                    className={`bg-gray-500 absolute ${
                        isTeam2Gestrichen ? "right-1/4" : "hidden"
                    } top-5`}
                    style={{
                        height: "calc(100% - 2rem)",
                        width: "1px",
                    }}
                ></div>
                <thead>
                    <tr className=" font-normal">
                        <th>Team 1</th>
                        <th>Team 2</th>
                    </tr>
                </thead>
                <tbody>
                    {punkte.map((element) => {
                        return (
                            <tr>
                                <td>{element.team1}</td>
                                <td>{element.team2}</td>
                            </tr>
                        );
                    })}
                    <tr className="text-primary dark:text-primaryDark">
                        <td>
                            {punkte.reduce(
                                (sum, value) =>
                                    typeof value.team1 == "number"
                                        ? sum + value.team1
                                        : sum,
                                0
                            )}
                        </td>
                        <td>
                            {punkte.reduce(
                                (sum, value) =>
                                    typeof value.team2 == "number"
                                        ? sum + value.team2
                                        : sum,
                                0
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PunkteTabelle;
