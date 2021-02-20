import { useEffect, useState } from "react";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import { createUser } from "../../axios/axios.services";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/Actions/actionCreators";
import { IinitialState } from "../../Redux/Reducers";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

// CSS
import "./signup.css";
import "react-toastify/dist/ReactToastify.css";

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
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((rootUser) => {
        var user = firebase.auth().currentUser;

        user
          ?.updateProfile({
            displayName: name,
          })
          .then(() => {
            createUser(name, email, user?.uid);
            dispatch(setUser(user));
            toast.success("Hurray, Sign Up Successful");
            console.log(user);
            setLoading(false);
            history.push("/");
          })
          .catch(function (error) {
            toast.error("Oops!! " + error.message);
          });
      })
      .catch((errr) => toast.error("Oops!! " + errr.message));
  };

  return (
    <div className="text-center LoginPageContainer">
      {loading ? (
        <RingLoader loading={loading} css={override} size={150} />
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
              autoFocus
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
