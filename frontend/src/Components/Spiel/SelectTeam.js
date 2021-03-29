import React, { useEffect, useState } from "react";
import TeamIcon from "../../assets/group-24px.svg";
import Team from "./Team";
import Arrow from "../../assets/play_arrow-24px.svg";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const SelectTeam = ({ setUrl, isDarkmode, setTeam, team }) => {
    const [selected, setSelected] = useState(1);
    const [data, setData] = useState({ users: [] });
    const [clicked, setClicked] = useState(false);
    const { room } = useParams();
    const history = useHistory();

    useEffect(() => {
        setUrl("/");
        axios.get(`http://localhost:3003/room/${room}`).then((res) => {
            setData(res.data);
        });
    }, []);

    const handlenOnClick = () => {
        setClicked(true);
        setTeam(selected);
    };

    useEffect(() => {
        if (team !== 0) {
            history.push(`/spielen/${data.name}/ronaldinhio`);
        }
    }, [team]);

    return (
        <div className="flex justify-center items-center flex-col m-auto w-96 max-w-1/9">
            <img
                src={TeamIcon}
                alt="Team"
                className={`h-24 mt-4 ${isDarkmode ? "whiteSVG" : null}`}
            />
            <h3 className="font-bold text-4xl pt-4 dark:text-white">
                Team aussuchen
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 pt-3 text-center mb-10">
                Clicken Sie auf das Team, den Sie betreten möchten und dann auf
                Teilnehmen
            </p>
            <Team
                spieler1={data.users[0]}
                spieler2={data.users[2]}
                team={1}
                punkte={data.team1}
                selected={selected}
                setSelected={setSelected}
            />
            <Team
                spieler1={data.users[1]}
                spieler2={data.users[3]}
                team={2}
                punkte={data.team2}
                selected={selected}
                setSelected={setSelected}
            />
            <div
                onClick={handlenOnClick}
                className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4"
            >
                <img
                    src={Arrow}
                    alt="Spielen"
                    className={`${!isDarkmode ? "whiteSVG" : null}`}
                />
                <p>Teilnehmen</p>
            </div>
            <p className="text-sm pt-8 text-gray-600 dark:text-gray-400  mb-4">
                Möchten Sie ein anderes Spiel beitreten?{" "}
                <Link to="/spielen">
                    <span className="font-bold underline text-black dark:text-white">
                        Zurück
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default SelectTeam;
