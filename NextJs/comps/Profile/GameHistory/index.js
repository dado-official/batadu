function GameHistory({
    date,
    team1,
    team2,
    stiche,
    punkte,
    percentage,
    win,
    border,
}) {
    return (
        <div
            className={`relative hover:shadow transition-all px-4 ${
                border && "border-b-1"
            } border-grayLight2 py-4 flex justify-between`}
        >
            <div
                className={`font-medium ${win ? " text-primary" : "text-red"}`}
            >
                {win ? "Gewonnen" : "Verloren"}
            </div>
            <div className="hidden sm:block"></div>
            <div className="flex items-end gap-3 m-auto absolute centerX">
                {" "}
                <p className="font-medium">
                    <span className="text-primary">{team1} </span>:{" "}
                    <span className="text-red dark:text-primaryDark">
                        {team2}
                    </span>
                </p>
            </div>
            <div className="flex items-end gap-3 m-auto"></div>
            <div className="">
                <p className="text-gray">
                    Datum:{" "}
                    <span className="text-black font-medium">{date}</span>
                </p>
            </div>
        </div>
    );
}

export default GameHistory;
