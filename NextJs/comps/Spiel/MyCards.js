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
                        className="flex"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {true
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
    );
}

export default MyCards;
