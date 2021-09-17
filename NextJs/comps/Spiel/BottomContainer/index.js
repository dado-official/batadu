import MyCards from "./MyCards";
import Image from "next/image";

function BottomContainer({
    bietenHandler,
    isBieten,
    gebotenDavor,
    pos,
    isHaltenWindow,
    isSchlagtauschWindow,
    geboten,
    isOneGestrichen,
    schönereHandler,
    isSchönere,
    hasSchönere,
    isSchönereWindows,
    schlagtauschHandler,
    isSchlagtausch,
    hasSchlagtausch,
    seeCards,
    karten,
    setKarten,
    hover,
    cardPhotos,
    selectCardHandler,
    showSchlagTrumpf,
    schlag,
    trumpf,
    modus,
}) {
    function getSchlag(schlag) {
        if (schlag === "Weli") return schlag;
        return schlag.split(" ")[0];
    }

    function getTrumpf(trumpf) {
        if (trumpf === "Weli") return "Schell";
        if (trumpf === "?") return "?";
        return trumpf.split(" ")[1];
    }

    return (
        <div className="flex gap-4 justify-between fixed bottom-0 left-0 pl-20 bg-bgWhite shadow-2xl w-full pr-80 py-4 items-center">
            <div className="ml-8 flex gap-4 flex-1 flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static text-sm text-center justify-between md:justify-start md:mt-0">
                {showSchlagTrumpf && schlag !== "?" && modus !== "Offen" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1 text-text">Schlag</p>
                        {showSchlagTrumpf && schlag ? (
                            <div
                                className="relative w-3.625rem shadow"
                                style={{ height: "6.4273rem" }}
                            >
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src={cardPhotos[schlag]}
                                    alt={schlag}
                                    title={schlag}
                                    blurDataURL={cardPhotos[schlag]}
                                    placeholder="blur"
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}
                {showSchlagTrumpf && trumpf !== "?" && modus !== "Offen" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1 text-text">Trumpf</p>
                        {showSchlagTrumpf && trumpf ? (
                            <div
                                className="relative w-3.625rem shadow"
                                style={{ height: "6.4273rem" }}
                            >
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src={cardPhotos[trumpf]}
                                    alt={trumpf}
                                    title={trumpf}
                                    blurDataURL={cardPhotos[trumpf]}
                                    placeholder="blur"
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}
                {modus === "Offen" && (
                    <div className="flex gap-4">
                        {schlag && schlag !== "?" && (
                            <div>
                                <p className="text-text">Schlag:</p>
                                <p className="mt-2 text-primary font-medium text-base">
                                    {getSchlag(schlag)}
                                </p>
                            </div>
                        )}
                        {trumpf && trumpf !== "?" && (
                            <div>
                                <p className="text-text">Trumpf:</p>
                                <p className="mt-2 text-primary font-medium text-base">
                                    {getTrumpf(trumpf)}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                <p className="block sm:hidden dark:text-white">
                    Geboten: <span className={`font-bold`}>{geboten}</span>
                </p>
            </div>
            {/*my cards*/}
            <MyCards
                selectCardHandler={selectCardHandler}
                karten={karten}
                setKarten={setKarten}
                cardPhotos={cardPhotos}
                hover={hover}
                seeCards={seeCards}
            />
            <div className="mr-8 flex-1">
                <p className="text-gray text-center mb-2">
                    Geboten:{" "}
                    <span className="font-medium text-text text-lg">
                        {geboten}
                    </span>
                </p>
                <button
                    onClick={bietenHandler}
                    className={`bg-primary mb-4 py-2.5 text-lg text-white font-medium rounded-full shadow-lg dark:bg-transparent dark:text-white w-full hover:shadow-xl transition-all ${
                        !isBieten ||
                        gebotenDavor === (pos % 2 === 0 ? 1 : 2) ||
                        isHaltenWindow ||
                        isSchlagtauschWindow ||
                        isSchönereWindows ||
                        (geboten === 2 && isOneGestrichen())
                            ? "cursor-default opacity-50"
                            : null
                    }`}
                >
                    Bieten
                </button>
                <div className="flex gap-4">
                    <button
                        onClick={schönereHandler}
                        className={`rounded-full text-text text-lg font-medium px-6 py-2.5 shadow-lg bg-f1 w-full hover:shadow-xl transition-all ${
                            !isSchönere ||
                            hasSchönere ||
                            isSchlagtauschWindow ||
                            isHaltenWindow ||
                            isSchönereWindows
                                ? "cursor-default opacity-50"
                                : null
                        }`}
                    >
                        Schönere
                    </button>
                    <button
                        onClick={schlagtauschHandler}
                        className={`rounded-full text-text text-lg font-medium px-6 py-2.5 shadow-lg bg-f1 w-full hover:shadow-xl transition-all ${
                            !isSchlagtausch ||
                            hasSchlagtausch ||
                            isSchlagtauschWindow ||
                            isHaltenWindow ||
                            isSchönereWindows
                                ? "cursor-default opacity-50"
                                : null
                        }`}
                    >
                        Schlagtausch
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BottomContainer;
