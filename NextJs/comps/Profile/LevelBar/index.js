function LevelBar({ xp, xpReq, xpReqBefore, level }) {
    return (
        <div className="mt-8 w-full">
            <p className="text-center">
                {xp}/{xpReq} XP
            </p>
            <div className="relative mt-2 w-full bg-primaryLight h-7 rounded-full shadow">
                <div
                    className="absolute h-full left-0 top-0 transition-all"
                    style={{
                        width: `${
                            (100 / (xpReq - xpReqBefore)) * (xp - xpReqBefore)
                        }%`,
                    }}
                >
                    <div className="progress bg-primary h-full rounded-l-full "></div>
                </div>
                <p className="absolute text-white centerY left-6">{level}</p>
                <p className="absolute text-text centerY right-6">
                    {level + 1}
                </p>
            </div>
        </div>
    );
}

export default LevelBar;
