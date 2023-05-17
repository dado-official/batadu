import React from "react";
import MyCards from "./MyCards";

export default function BottomContainer({
    bietenHandler,
    isBieten,
    gebotenDavor,
    pos,
    isSchlagtauschWindow,
    isSchönereWindows,
    geboten,
    isOneGestrichen,
    schönereHandler,
    isSchönere,
    hasSchönere,
    isHaltenWindow,
    schlagtauschHandler,
    isSchlagtausch,
    hasSchlagtausch,
    seeCards,
    karten,
    hover,
    cardPhotos,
    selectCardHandler,
    showSchlagTrumpf,
    schlag,
    trumpf,
    modus,
    getSchlag,
    getTrumpf,
    setKarten,
}) {
    return (
        <div className="flex justify-between mt-28 md:mt-28 mb-16 flex-wrap">
            <div className="flex justify-between md:flex-col gap-1 sm:gap-8 md:gap-2 w-full md:w-max mb-4 md:mb-0">
                <button
                    onClick={bietenHandler}
                    className={`btn bg-primary dark:bg-primaryDark text-white dark:text-black w-full ${
                        !isBieten ||
                        gebotenDavor === (pos % 2 === 0 ? 1 : 2) ||
                        isHaltenWindow ||
                        isSchlagtauschWindow ||
                        isSchönereWindows ||
                        (geboten === 2 && isOneGestrichen())
                            ? "opacity-20 cursor-not-allowed"
                            : "btnPrimary"
                    }`}
                >
                    Bieten
                </button>
                <button
                    onClick={schönereHandler}
                    className={`btn bg-secondary dark:text-black dark:bg-secondaryDark text-white dark:text-dark w-full ${
                        !isSchönere ||
                        hasSchönere ||
                        isSchlagtauschWindow ||
                        isHaltenWindow ||
                        isSchönereWindows
                            ? "opacity-20 cursor-not-allowed"
                            : "btnSecondary"
                    }`}
                >
                    Schönere
                </button>
                <button
                    onClick={schlagtauschHandler}
                    className={`btn bg-secondary dark:text-black dark:bg-secondaryDark text-white dark:text-dark w-full ${
                        !isSchlagtausch ||
                        hasSchlagtausch ||
                        isSchlagtauschWindow ||
                        isHaltenWindow ||
                        isSchönereWindows
                            ? "opacity-20 cursor-not-allowed"
                            : "btnSecondary"
                    }`}
                >
                    Schlagtausch
                </button>
            </div>
            {/*my cards*/}
            <MyCards
                seeCards={seeCards}
                karten={karten}
                hover={hover}
                cardPhotos={cardPhotos}
                selectCardHandler={selectCardHandler}
                setKarten={setKarten}
            />
            <div className="flex gap-4 font-bold flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static text-sm text-center justify-between md:justify-start w-full sm:w-min mt-4 md:mt-0">
                {showSchlagTrumpf && schlag !== "?" && modus !== "Offen" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1">Schlag</p>
                        {showSchlagTrumpf && schlag ? (
                            <img
                                src={cardPhotos[schlag]}
                                alt={schlag}
                                className="w-3.625rem"
                            />
                        ) : null}
                    </div>
                ) : null}
                {showSchlagTrumpf && schlag !== "?" && modus !== "Offen" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1">Trumpf</p>
                        {showSchlagTrumpf && trumpf ? (
                            <img
                                src={cardPhotos[trumpf]}
                                alt={trumpf}
                                className="w-3.625rem"
                            />
                        ) : null}
                    </div>
                ) : null}
                {modus === "Offen" && (
                    <div className="flex gap-4">
                        {schlag && schlag !== "?" && (
                            <div>
                                <p className="text-text dark:text-white">
                                    Schlag:
                                </p>
                                <p className="mt-2 text-primary dark:text-primaryDark font-medium text-base">
                                    {getSchlag(schlag)}
                                </p>
                            </div>
                        )}
                        {trumpf && trumpf !== "?" && (
                            <div>
                                <p className="text-text dark:text-white">
                                    Trumpf:
                                </p>
                                <p className="mt-2 text-primary dark:text-primaryDark font-medium text-base">
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
        </div>
    );
}
