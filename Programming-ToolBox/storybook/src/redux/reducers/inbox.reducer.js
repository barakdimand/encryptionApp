import * as AT from "../action.types";

const INITIAL_STATE = [];
let id = 1;
const mockMessage = {
  id: id++,
  content: "test content",
};

const inboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AT.ADD_MESSAGE:
      return [...state, action.payload];
  }
  return state;
};

export default inboxReducer;
