import { ADD_CARD, ADD_LIST } from "./actions";
const initialState = [
  {
    title: "First day",
    id: 0,
    cards: [
      { id: 0, text: "Go shopping " },
      { id: 1, text: "Buy milk " },
    ],
  },
  {
    title: "Seconday day",
    id: 1,
    cards: [
      { id: 0, text: "Visit Gramma" },
      { id: 1, text: "Cook for her " },
      { id: 2, text: "Sleep at her " },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.payload,
        id: state.length,
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
                { id: list.cards.length, text: action.payload.text },
              ],
            }
          : list
      );
      return newListArray;
    default:
      return state;
  }
};
export default reducer;
