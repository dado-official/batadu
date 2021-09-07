import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "next/image";

function MyCards({
    selectCardHandler,
    karten,
    setKarten,
    cardPhotos,
    hover,
    seeCards,
}) {
    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(karten);
        const [reorderItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderItem);

        setKarten(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cards" direction="horizontal">
                {(provided) => (
                    <div
                        className="flex justify-center myCards noselect"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ width: "35rem" }}
                    >
                        {seeCards
                            ? karten.map((element, index) => {
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
                                                  className={`focus:outline-none mx-2 rounded focus:ring-4 focus:ring-primary h-6.73625 shadow-md md:h-8.421875 w-4.275rem md:w-4.75rem relative ${
                                                      hover &&
                                                      "hover:ring-4 hover:ring-primary"
                                                  }`}
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
                                                      className={`${
                                                          hover && "click"
                                                      }`}
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
    );
}

export default MyCards;
