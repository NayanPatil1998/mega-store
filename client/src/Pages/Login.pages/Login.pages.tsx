import { useEffect, useState } from "react";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import "./Login.page.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { IinitialState } from "../../Redux/Reducers";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
const Login: React.FunctionComponent = () => {
  toast.configure();
  const state = useSelector((state: IinitialState) => state);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (state.user != null) {
    history.push("/");
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const signIn = (e: any) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        toast.success("Yay, Login Successful");
        console.log(user);
        setLoading(false);
        history.push("/");
      })
      .catch((err: firebase.FirebaseError) => {
        toast.error("Oops!! " + err.message);
      });
  };

  return (
    <div className="text-center LoginPageContainer">
      {loading ? (
        <SyncLoader loading={loading} css={override} size={30} />
      ) : (
        <main className="form-signin">
          <form onSubmit={signIn}>
            <p className="h1">Mega Store</p>
            <h1 className="h4 mb-3 fw-normal">Please sign in</h1>
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
              Sign in
            </button>
            {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p> */}
          </form>
          <p className="mt-5 mb-3 text-muted">
            Don't have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/signup">
              <span style={{ color: "#0095f6" }}> Sign up</span>
            </Link>
          </p>
        </main>
      )}
    </div>
  );
};

export default Login;
