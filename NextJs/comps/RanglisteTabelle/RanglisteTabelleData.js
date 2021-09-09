import Image from "next/image";

const RanglisteTabelleData = ({
    pos,
    username,
    userPic,
    points,
    winrate,
    gamesW,
    selected,
}) => {
    return (
        <tr
            className={`cursor-pointer hover:shadow transition-all ${
                selected && "text-white rounded-md select shadow-md"
            }`}
        >
            <td className={`${selected && "rounded-l-md"}`} data-label="Platz">
                {pos === 1 ? (
                    <div className="w-6 h-6 relative my-auto -ml-1">
                        <Image
                            src="/gold.svg"
                            alt="Goldmedallie"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ) : pos === 2 ? (
                    <div className="w-6 h-6 relative my-auto -ml-1">
                        <Image
                            src="/silver.svg"
                            alt="Silvermedallie"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ) : pos === 3 ? (
                    <div className="w-6 h-6 relative my-auto -ml-1">
                        <Image
                            src="/bronze.svg"
                            alt="Bronzemedallie"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ) : (
                    <p className={`${selected ? "text-white" : "text-gray"}`}>
                        {pos}.
                    </p>
                )}
            </td>
            <td data-label="Benutzer">
                <div className="flex gap-4 items-center">
                    <div className="relative h-7 w-7">
                        <Image
                            src={userPic}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                        />
                    </div>
                    <p>{username}</p>
                </div>
            </td>
            <td data-label="Winrate %">
                {winrate}%{" "}
                <span className={`${selected ? "text-white" : "text-gray"}`}>
                    Winrate
                </span>
            </td>
            <td data-label="Gewonnene Spiele">
                {gamesW}
                <span className={`${selected ? "text-white" : "text-gray"}`}>
                    {" "}
                    Gewonnene Spiele
                </span>
            </td>
            <td className={`${selected && "rounded-r-md"}`} data-label="Punkte">
                {points}{" "}
                <span className={`${selected ? "text-white" : "text-gray"}`}>
                    Punkte
                </span>
            </td>
        </tr>
    );
};

export default RanglisteTabelleData;
