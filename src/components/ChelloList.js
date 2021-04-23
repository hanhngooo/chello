import React from "react";
import ChelloCard from "./ChelloCard";
import ActionButton from "./ActionButton";
const styles = {
  container: {
    backgroundColor: "#e5e5e5",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  },
};
export default function ChelloList({ title, cards }) {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => (
        <ChelloCard key={card.id} text={card.text} />
      ))}
      <ActionButton list={false} />
    </div>
  );
}
