import * as AT from "../action.types";

export const addMessage = (message) => ({
  type: AT.ADD_MESSAGE,
  payload: { message },
});

export const removeMessage = (id) => ({
  type: AT.REMOVE_MESSAGE,
  payload: { id },
});
