import { useRouter } from "next/router";
import axios from "axios";

const Room = ({
    roomName,
    score1,
    score2,
    team1_0,
    team1_1,
    team2_0,
    team2_1,
    setSelectTeam,
}) => {
    const router = useRouter();

    const handleOnClick = () => {
        console.log(`${process.env.GAMEAPI_URL}/room/select/${roomName}`);
        axios
            .get(`${process.env.GAMEAPI_URL}/room/select/${roomName}`)
            .then((res) => {
                if (res.data) {
                    //router.push(`/team/${roomName}`);
                    setSelectTeam({ show: true, room: roomName });
                } else {
                    router.push(`/spielen/${roomName}`);
                }
            });
    };

    return (
        <div className="w-full">
            <p className="bg-roomGray dark:bg-roomBlack dark:text-white text-center py-2 rounded-t-st border-gray-400 border-b-2 dark:border-black">
                {roomName}
            </p>
            <div className="flex bg-white dark:bg-whiteDark justify-center dark:text-white text-whiteDark">
                <div className="flex flex-1 flex-col py-3 px-2 border-gray-400 dark:border-black border-r-2">
                    <p
                        className={`w-12ch text_small text-center ${
                            team1_0 === undefined || team1_0 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team1_0 === undefined || team1_0 === null
                            ? "offen"
                            : team1_0}
                    </p>
                    <h5 className="text-right mr-2 font-medium text-primary dark:text-primaryDark">
                        {score1}
                    </h5>
                    <p
                        className={`w-12ch text_small text-center ${
                            team1_1 === undefined || team1_1 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team1_1 === undefined || team1_1 === null
                            ? "offen"
                            : team1_1}
                    </p>
                </div>
                <div className="flex flex-1 flex-col py-3 px-2">
                    <p
                        className={`w-12ch text_small text-center ml-auto ${
                            team2_0 === undefined || team2_0 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team2_0 === undefined || team2_0 === null
                            ? "offen"
                            : team2_0}
                    </p>
                    <h5 className="text-left ml-2 font-medium text-primary dark:text-primaryDark">
                        {score2}
                    </h5>
                    <p
                        className={`w-12ch text_small text-center ml-auto ${
                            team2_1 === undefined || team2_1 === null
                                ? "text-secondary dark:text-secondaryDark underline"
                                : null
                        }`}
                    >
                        {team2_1 === undefined || team2_1 === null
                            ? "offen"
                            : team2_1}
                    </p>
                </div>
            </div>
            <button
                onClick={handleOnClick}
                className="bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-b-st flex justify-center gap-2 cursor-pointer"
            >
                <p>Teilnehmen</p>
            </button>
        </div>
    );
};

export default Room;
