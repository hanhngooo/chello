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

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
