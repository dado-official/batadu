import React, { useEffect, useState } from "react";
import TeamIcon from "../../assets/group-24px.svg";
import Team from "./Team";
import Arrow from "../../assets/play_arrow-24px.svg";
import { Link } from "react-router-dom";

const SelectTeam = ({ setUrl }) => {
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        setUrl("/");
    }, []);

    return (
        <div
            className="flex justify-center items-center flex-col m-auto"
            style={{ width: "23rem" }}
        >
            <img src={TeamIcon} alt="Team" className="h-24 mt-16" />
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
            <p className="text-sm pt-8 text-gray-600 mb-16">
                Möchten Sie ein anderes Spiel beitreten?{" "}
                <Link to="/spielen">
                    <span className="font-bold underline text-black">
                        Zurück
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default SelectTeam;
