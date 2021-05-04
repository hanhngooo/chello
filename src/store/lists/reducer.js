import { ADD_CARD, ADD_LIST } from "./actions";
let cardId = 5;
const initialState = [
  {
    title: "First day",
    id: "list-0",
    cards: [
      { id: "card-0", text: "Go shopping " },
      { id: "card-1", text: "Buy milk " },
    ],
  },
  {
    title: "Seconday day",
    id: "list-1",
    cards: [
      { id: "card-2", text: "Visit Gramma" },
      { id: "card-3", text: "Cook for her " },
      { id: "card-4", text: "Sleep at her " },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.payload,
        id: `list-${state.length}`,
        cards: [],
      };
      return [...state, newList];
    case ADD_CARD:
      const newListArray = state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              cards: [
                ...list.cards,
                { id: `card-${cardId}`, text: action.payload.text },
              ],
            }
          : list
      );
      cardId += 1;
      return newListArray;
    default:
      return state;
  }
};
export default reducer;
