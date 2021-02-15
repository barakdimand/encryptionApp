import * as AT from "../action.types";

export const loginUser = (username, password) => ({
  type: AT.LOGIN_USER,
  payload: { username: username, password: password },
});
