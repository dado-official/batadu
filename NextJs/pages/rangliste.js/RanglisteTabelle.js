import RanglisteTabelleData from "./RanglisteTabelleData";

const RanglisteTabelle = ({ data }) => {
    return (
        <table className="rangliste mt-2 border-separate mb-16">
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
        </table>
    );
};

export default RanglisteTabelle;
