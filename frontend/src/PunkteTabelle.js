import React from "react";

const PunkteTabelle = () => {
    return (
        <div className="bg-white flex flex-center text-xs text-center rounded-b-st">
            <table className="mx-auto my-8">
                <tr>
                    <th>Team 1</th>
                    <th>Team 2</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>2</td>
                </tr>
                <tr className="text-primary">
                    <td></td>
                    <td>2</td>
                </tr>
            </table>
        </div>
    );
};

export default PunkteTabelle;
