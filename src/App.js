import "./App.css";
import { useSelector } from "react-redux";
import ChelloList from "./components/ChelloList";
import { selectLists } from "./store/lists/selectors";
import ActionButotn from "./components/ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  const lists = useSelector(selectLists);
  console.log("lists", lists);
  const handleDropEnd = () => {
    console.log("dropend");
  };
  return (
    <DragDropContext onDropEnd={handleDropEnd}>
      <div className="App">
        Chello
        <div style={styles.listContainer}>
          {lists.map((list) => (
            <ChelloList
              listId={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <ActionButotn list={true} />
        </div>
      </div>
    </DragDropContext>
  );
}
const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};
export default App;
