import * as AT from "../action.types";

const INITIAL_STATE = {};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AT.LOGIN_USER:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
  }
  return state;
};

export default sessionReducer;
