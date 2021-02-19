import firebase from "firebase";
import { SET_USER, USER_LOADING } from "./actionTypes";

export const setUser = (user: firebase.User | null) => {
  const action: Action = {
    type: SET_USER,
    payload: user,
  };
  return action;
};
export const userLoader = () => {
  const action: Action = {
    type: USER_LOADING,
    payload: null,
  };
  return action;
};
