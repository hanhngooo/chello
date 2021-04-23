import "./App.css";
import { useSelector } from "react-redux";
import ChelloList from "./components/ChelloList";
import { selectLists } from "./store/lists/selectors";
import { StylesProvider } from "@material-ui/core";

function App() {
  const lists = useSelector(selectLists);
  return (
    <div className="App">
      Chello
      <div style={styles.listContainer}>
        {lists.map((list) => (
          <ChelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
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
