import { auth } from "../Firebase/firebase";
import { CartItem } from "../Redux/Reducers/type";
import axios, { AxiosError, AxiosResponse } from "axios";

export const baseUrl: string = "http://0.0.0.0:8080/api";

// export const createUser = async (
//   name: string,
//   email: string,
//   password: string
// ) => {

// };

// export const getProducts = async ()=> {
//     await
//
//
// }

export const addOrder = (
  orderId: string,
  status: string,
  products: CartItem[],
  address: string,
  date: number,
  amount: string,
  uid: string
): any => {
  const token = auth.currentUser?.getIdToken;
  console.log(token, orderId);
  axios
    .post(
      `${baseUrl}/orders`,
      {
        orderId: orderId,
        status: status,
        products: products,
        address: address,
        date: date,
        amount: amount,
        uid: uid,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res);
};
