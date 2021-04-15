import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/Actions/actionCreators";
import { IinitialState } from "../../Redux/Reducers";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

// CSS
import "./signup.css";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../axios/axios.services";
import { auth } from "../../Firebase/firebase";

const SignUp: React.FunctionComponent = () => {
  toast.configure();
  const state = useSelector((state: IinitialState) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (state.user != null) {
    history.push("/");
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const register = (e: any) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`${baseUrl}/adduser`, {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response: AxiosResponse) {
        if (response.status == 500) {
          setLoading(false);
          toast.error("Oops!! " + response.data.message);
        } else if (response.status == 200) {
          auth.signInWithCustomToken(response.data).then((user) => {
            console.log(user);
            history.push("/");

            setLoading(false);
          });
        }
      })
      .catch(function (error: AxiosError) {
        setLoading(false);
        toast.error("Oops!! " + error.message);
        console.log(error);
      });
  };

  return (
    <div className="text-center LoginPageContainer">
      {loading ? (
        <SyncLoader loading={loading} css={override} size={30} />
      ) : (
        <main className="form-signin">
          <form onSubmit={register}>
            <p className="h1">Mega Store</p>
            <h1 className="h4 mb-3 fw-normal">Please sign up</h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="inputName"
              value={name}
              className="form-control"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              value={email}
              className="form-control"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
              required
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
            {/* <p className="">&copy; 2017-2021</p> */}
          </form>
          <p className="mt-5 mb-3 text-muted">
            Don't have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              <span style={{ color: "#0095f6" }}> Sign in</span>
            </Link>
          </p>
        </main>
      )}
    </div>
  );
};

export default SignUp;
