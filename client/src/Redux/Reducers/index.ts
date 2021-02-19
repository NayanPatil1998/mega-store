import firebase from "firebase";
import { SET_USER } from "../Actions/actionTypes";

export interface IinitialState {
  isUserLoading: boolean;
  user: firebase.User | null;
  cart: Array<any>;
}

const initialState: IinitialState = {
  isUserLoading: false,
  user: null,
  cart: [],
};

const reducer = (
  state: IinitialState = initialState,
  action: Action
): IinitialState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
