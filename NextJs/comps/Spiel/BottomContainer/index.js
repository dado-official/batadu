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
}) {
    return (
        <div className="flex gap-4 justify-between fixed bottom-0 left-0 pl-20 bg-bgWhite shadow-2xl w-full pr-80 py-4">
            <div className="ml-8 flex gap-4 flex-1 flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static text-sm text-center justify-between md:justify-start md:mt-0">
                {showSchlagTrumpf && schlag !== "?" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1">Schlag</p>
                        {showSchlagTrumpf ? (
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
                {showSchlagTrumpf && trumpf !== "?" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1">Trumpf</p>
                        {showSchlagTrumpf ? (
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
                <button
                    onClick={bietenHandler}
                    className={`bg-primary mb-4 py-2.5 text-lg text-white font-medium rounded-full shadow-lg dark:bg-transparent dark:text-white w-full ${
                        !isBieten ||
                        gebotenDavor === (pos % 2 === 0 ? 1 : 2) ||
                        isHaltenWindow ||
                        isSchlagtauschWindow ||
                        isSchönereWindows ||
                        (geboten === 2 && isOneGestrichen())
                            ? "cursor-default"
                            : null
                    }`}
                >
                    Bieten
                </button>
                <div className="flex gap-4">
                    <button
                        onClick={schönereHandler}
                        className={`rounded-full text-text text-lg font-medium px-6 py-2.5 shadow-lg bg-f1 w-full ${
                            !isSchönere ||
                            hasSchönere ||
                            isSchlagtauschWindow ||
                            isHaltenWindow ||
                            isSchönereWindows
                                ? "cursor-not-allowed"
                                : null
                        }`}
                    >
                        Schönere
                    </button>
                    <button
                        onClick={schlagtauschHandler}
                        className={`rounded-full text-text text-lg font-medium px-6 py-2.5 shadow-lg bg-f1 w-full ${
                            !isSchlagtausch ||
                            hasSchlagtausch ||
                            isSchlagtauschWindow ||
                            isHaltenWindow ||
                            isSchönereWindows
                                ? "cursor-not-allowed"
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
