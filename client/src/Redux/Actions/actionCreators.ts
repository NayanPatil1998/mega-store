import firebase from "firebase";
import {
  ADD_TO_CART,
  DECREMENT_PRODUCT_QUAN,
  INCREMENT_PRODUCT_QUAN,
  REMOVE_FROM_CART,
  SET_USER,
  USER_LOADING,
} from "./actionTypes";
import { Action } from "../Reducers/type";
import IProduct from "../../Components/ProductContainer/Product/product.type";

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

export const addToCart = (product: IProduct | undefined) => {
  const action: Action = {
    type: ADD_TO_CART,
    payload: product,
  };
  return action;
};

export const incrementProductQuantity = (index: number) => {
  const action: Action = {
    type: INCREMENT_PRODUCT_QUAN,
    payload: index,
  };
  return action;
};
export const decrementProductQuantity = (index: number) => {
  const action: Action = {
    type: DECREMENT_PRODUCT_QUAN,
    payload: index,
  };
  return action;
};

export const removeFromCart = (index: number) => {
  const action: Action = {
    type: REMOVE_FROM_CART,
    payload: index,
  };
  return action;
};
