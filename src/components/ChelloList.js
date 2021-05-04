import React from "react";
import ChelloCard from "./ChelloCard";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
const styles = {
  container: {
    backgroundColor: "#e5e5e5",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: "100%",
  },
};
const ChelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)} index={listId} type="LIST">
      {(provided) => {
        return (
          <div
            {...provided.droppableProps}
            style={styles.container}
            ref={provided.innerRef}
          >
            <h4>{title}</h4>
            {cards.map((card, index) => (
              <ChelloCard
                key={card.id}
                text={card.text}
                id={card.id}
                index={index}
              />
            ))}
            <ActionButton list={false} listId={listId} />
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
export default ChelloList;
