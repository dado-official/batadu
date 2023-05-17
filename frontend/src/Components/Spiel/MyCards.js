import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function MyCards({
    seeCards,
    karten,
    hover,
    cardPhotos,
    selectCardHandler,
    setKarten,
}) {
    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(karten);
        const [reorderItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderItem);

        setKarten(items);
    }

    const getItemStyle = (draggableStyle, isDragging) => ({
        // styles we need to apply on draggables
        userSelect: "none",
        ...draggableStyle,
    });

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cards" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        className="flex justify-center myCards noselect "
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
                                          {(provided, snapshot) => (
                                              <div>
                                                  <div
                                                      {...provided.dragHandleProps}
                                                      {...provided.draggableProps}
                                                      ref={provided.innerRef}
                                                      key={element.name}
                                                      className="h-6.73625 mx-2 md:mx-3 lg:mx-6 md:h-8.421875 w-4.275rem md:w-4.75rem relative"
                                                      style={getItemStyle(
                                                          provided.draggableStyle,
                                                          snapshot.isDragging
                                                      )}
                                                  >
                                                      <img
                                                          className={`h-auto grab absolute top-0 left-0 rounded-st karte ${
                                                              hover &&
                                                              "selectCard cursor-pointer"
                                                          } `}
                                                          src={
                                                              cardPhotos[
                                                                  element.name
                                                              ]
                                                          }
                                                          alt={element.name}
                                                          onClick={
                                                              selectCardHandler
                                                          }
                                                          key={element.name}
                                                      />
                                                  </div>
                                                  {provided.placeholder}
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
