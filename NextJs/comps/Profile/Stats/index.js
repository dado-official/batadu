function Stats({ gameW, winrate, rank }) {
    return (
        <div className=" border-t-1 border-b-1 border-grayLight2 mt-6 py-4 px-4 flex gap-8">
            <p className="text-gray">
                <span className="text-black font-medium">{gameW}</span> Siege
            </p>
            <p className="text-gray">
                <span className="text-black font-medium">{winrate}%</span>{" "}
                Winrate
            </p>
            <p className="text-gray">
                <span className="text-black font-medium">{rank}.</span> Rang
            </p>
        </div>
    );
}

export default Stats;
