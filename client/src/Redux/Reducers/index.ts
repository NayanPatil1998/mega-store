import firebase from "firebase";
import {
  ADD_TO_CART,
  DECREMENT_PRODUCT_QUAN,
  INCREMENT_PRODUCT_QUAN,
  REMOVE_FROM_CART,
  SET_USER,
} from "../Actions/actionTypes";
import { Action, CartItem } from "./type";
import IProduct from "../../Components/ProductContainer/Product/product.type";

export interface IinitialState {
  isUserLoading: boolean;
  user: firebase.User | null;
  cart: CartItem[];
}

const initialState: IinitialState = {
  isUserLoading: false,
  user: null,
  cart: [],
};

export const totalFun = (total: number, cartItem: CartItem) => {
  return total + cartItem.quantity * cartItem.product.price;
};

const reducer = (
  state: IinitialState = initialState,
  action: Action
): IinitialState => {
  let newCart = [...state.cart];
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_TO_CART:
      let isExist = false;
      newCart.forEach((item, index) => {
        if (item.product._id === action.payload._id) {
          isExist = true;
          item.quantity++;
          return false;
        } else {
          isExist = false;
        }
      });
      console.debug(newCart);
      return isExist
        ? {
            ...state,
            cart: newCart,
          }
        : {
            ...state,
            cart: [...state.cart, { product: action.payload, quantity: 1 }],
          };
    case INCREMENT_PRODUCT_QUAN:
      newCart[action.payload].quantity++;
      return {
        ...state,
        cart: newCart,
      };

    case DECREMENT_PRODUCT_QUAN:
      let newCarts = [...state.cart];

      newCarts[action.payload].quantity--;
      return {
        ...state,
        cart: newCarts,
      };

    case REMOVE_FROM_CART:
      newCart.splice(action.payload, 1);
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
