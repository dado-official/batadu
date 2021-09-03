import { useState } from "react";
import Image from "next/image";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
    hover,
    cardPhotos,
    selectCardHandler,
    showSchlagTrumpf,
    schlag,
    trumpf,
}) {
    const [cardsSorted, setCardsSorted] = useState(karten);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(cardsSorted);
        const [reorderItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderItem);

        setCardsSorted(items);
    }

    return (
        <div className="flex justify-between mt-28 md:mt-28 flex-wrap fixed bottom-0 left-20 bg-bgWhite shadow-2xl w-full pr-80 py-10">
            <div className="flex justify-between md:flex-col gap-1 sm:gap-8 md:gap-2 w-full md:w-max mb-4 md:mb-0">
                <button
                    onClick={bietenHandler}
                    className={`btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ${
                        !isBieten ||
                        gebotenDavor === (pos % 2 === 0 ? 1 : 2) ||
                        isHaltenWindow ||
                        isSchlagtauschWindow ||
                        isSchönereWindows ||
                        (geboten === 2 && isOneGestrichen())
                            ? "opacity-20 cursor-not-allowed"
                            : null
                    }`}
                >
                    Bieten
                </button>
                <button
                    onClick={schönereHandler}
                    className={`btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ${
                        !isSchönere ||
                        hasSchönere ||
                        isSchlagtauschWindow ||
                        isHaltenWindow ||
                        isSchönereWindows
                            ? "opacity-20 cursor-not-allowed"
                            : null
                    }`}
                >
                    Schönere
                </button>
                <button
                    onClick={schlagtauschHandler}
                    className={`btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ${
                        !isSchlagtausch ||
                        hasSchlagtausch ||
                        isSchlagtauschWindow ||
                        isHaltenWindow ||
                        isSchönereWindows
                            ? "opacity-20 cursor-not-allowed"
                            : null
                    }`}
                >
                    Schlagtausch
                </button>
            </div>
            {/*my cards*/}
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="cards" direction="horizontal">
                    {(provided) => (
                        <div
                            className="flex"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {true
                                ? cardsSorted.map((element, index) => {
                                      return (
                                          <Draggable
                                              key={element.name}
                                              draggableId={element.name}
                                              index={index}
                                          >
                                              {(provided) => (
                                                  <div
                                                      {...provided.dragHandleProps}
                                                      {...provided.draggableProps}
                                                      ref={provided.innerRef}
                                                      key={element.name}
                                                      className="focus:outline-none rounded focus:ring-4 focus:ring-primary h-6.73625 mx-2 shadow-md md:h-8.421875 w-4.275rem md:w-4.75rem relative"
                                                  >
                                                      <Image
                                                          src={
                                                              cardPhotos[
                                                                  element.name
                                                              ]
                                                          }
                                                          layout="fill"
                                                          objectFit="contain"
                                                          alt={element.name}
                                                          onClick={
                                                              selectCardHandler
                                                          }
                                                          placeholder="blur"
                                                          blurDataURL={
                                                              cardPhotos[
                                                                  element.name
                                                              ]
                                                          }
                                                      />
                                                  </div>
                                              )}
                                          </Draggable>
                                      );
                                  })
                                : null}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="flex gap-4 font-bold flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static text-sm text-center justify-between md:justify-start w-full sm:w-min mt-4 md:mt-0">
                {showSchlagTrumpf && schlag !== "?" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1">Schlag</p>
                        {showSchlagTrumpf ? (
                            <img
                                src={cardPhotos[schlag]}
                                alt={schlag}
                                className="w-3.625rem"
                            />
                        ) : null}
                    </div>
                ) : null}
                {showSchlagTrumpf && schlag !== "?" ? (
                    <div className="w-3.625rem">
                        <p className="dark:text-white mb-1">Trumpf</p>
                        {showSchlagTrumpf ? (
                            <img
                                src={cardPhotos[trumpf]}
                                alt={trumpf}
                                className="w-3.625rem"
                            />
                        ) : null}
                    </div>
                ) : null}
                <p className="block sm:hidden dark:text-white">
                    Geboten: <span className={`font-bold`}>{geboten}</span>
                </p>
            </div>
        </div>
    );
}

export default BottomContainer;
