export const ADD_CARD = "ADD_CARD";
export const addCardSuccess = (text, listId) => {
  return {
    type: "ADD_CARD",
    payload: { text, listId },
  };
};

export const ADD_LIST = "ADD_LIST";
export const addListSuccess = (listTitle) => {
  return {
    type: "ADD_LIST",
    payload: listTitle,
  };
};
