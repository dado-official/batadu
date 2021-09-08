import RanglisteTabelleData from "./RanglisteTabelleData";

const RanglisteTabelle = ({ data }) => {
    return (
        <table className="rangliste mt-8 border-separate mb-16 relative">
            <tbody>
                {data.map((element, index) => {
                    return (
                        <RanglisteTabelleData
                            pos={index + 1}
                            username={element.username}
                            userPic={element.userPic}
                            points={element.points}
                            winrate={element.winrate}
                            gamesW={element.gamesW}
                            selected={index === 4}
                            key={element.id}
                        />
                    );
                })}
            </tbody>
            <button className="mt-4 border-1 border-grayLight2 rounded-md py-2.5 w-full absolute text-text shadow hover:shadow-md transition-all">
                Mehr Laden
            </button>
        </table>
    );
};

export default RanglisteTabelle;
