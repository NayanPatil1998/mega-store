import axios, {AxiosResponse} from "axios";
import { auth } from "../Firebase/firebase";
import IProduct from "../Components/ProductContainer/Product/product.type";

export const baseUrl: string = "http://0.0.0.0:8080/api";

export const createUser = async (
  name: string,
  email: string,
  uid: string | undefined
) => {
  const token = await auth.currentUser?.getIdToken();
  console.log("Token ========>>>>" + token);
  axios
    .post(
      `${baseUrl}/adduser`,
      {
        name: name,
        email: email,
        uid: uid,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const getProducts = async ()=> {
//     await
//
//
// }