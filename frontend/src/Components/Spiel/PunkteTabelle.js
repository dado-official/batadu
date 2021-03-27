import React from "react";

const PunkteTabelle = ({ isDarkmode, punkte }) => {
    return (
        <div
            className={`bg-white dark:bg-whiteDark flex flex-center text-xs text-center rounded-b-st h-96 xl:h-64 overflow-auto stiche ${
                isDarkmode ? "scrollDark" : "scrollWhite"
            }`}
        >
            <table className="mx-auto my-4 dark:text-white">
                <tr>
                    <th>Team 1</th>
                    <th>Team 2</th>
                </tr>
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
            </table>
        </div>
    );
};

export default PunkteTabelle;
