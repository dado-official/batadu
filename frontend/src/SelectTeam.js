import React, { useEffect, useState } from "react";
import TeamIcon from "./assets/group-24px.svg";
import Team from "./Team";
import Arrow from "./assets/play_arrow-24px.svg";

const SelectTeam = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div
            className="flex justify-center items-center flex-col m-auto pb-8"
            style={{ width: "23rem" }}
        >
            <img src={TeamIcon} alt="Team" className="h-24" />
            <h3 className="font-bold text-4xl pt-4">Team aussuchen</h3>
            <p className="text-sm text-gray-600 pt-3 text-center mb-10">
                Clicken Sie auf das Team, den Sie betreten möchten und dann auf
                Teilnehmen
            </p>
            <Team
                spieler1="Danjo"
                spieler2=""
                team={1}
                punkte={0}
                selected={selected}
                setSelected={setSelected}
            />
            <Team
                spieler1=""
                spieler2="Frangio"
                team={2}
                punkte={0}
                selected={selected}
                setSelected={setSelected}
            />
            <div className="bg-primary text-white w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4">
                <img src={Arrow} alt="Spielen" className="whiteSVG" />
                <p>Teilnehmen</p>
            </div>
        </div>
    );
};

export default SelectTeam;
