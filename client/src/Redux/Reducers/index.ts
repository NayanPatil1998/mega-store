import firebase from "firebase";
import {ADD_TO_CART, SET_USER} from "../Actions/actionTypes";
import {Action, CartItem} from "./type";
import IProduct from "../../Components/ProductContainer/Product/product.type";

export interface IinitialState {
  isUserLoading: boolean;
  user: firebase.User | null;
  cart: CartItem[]
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
    case ADD_TO_CART:
      let isExist = false
      let newCart = [...state.cart]
          newCart.forEach((item, index) => {
        if(item.product._id === action.payload._id) {
          isExist = true;
          item.quantity++;
          return false
        }else{
          isExist = false;
        }
      })
      console.debug(newCart)
      return isExist ? {
            ...state,
            cart: newCart
          } :
          {
            ...state,
            cart: [...state.cart, {product: action.payload, quantity: 1}]
          }


    default:
      return state;
  }
};

export default reducer;