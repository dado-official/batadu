import React from "react";

const PunkteTabelle = ({ isDarkmode }) => {
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
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>2</td>
                </tr>
                <tr className="text-primary dark:text-primaryDark">
                    <td>2</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
    );
};

export default PunkteTabelle;
