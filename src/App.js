import "./App.css";
import { useSelector } from "react-redux";
import ChelloList from "./components/ChelloList";
import { selectLists } from "./store/lists/selectors";
import ActionButotn from "./components/ActionButton";
function App() {
  const lists = useSelector(selectLists);
  return (
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
  );
}
const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};
export default App;
