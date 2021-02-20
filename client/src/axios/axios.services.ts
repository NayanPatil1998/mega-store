import axios from "axios";
import { auth } from "../Firebase/firebase";

const baseUrl: string = "http://localhost:8080/api";

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
