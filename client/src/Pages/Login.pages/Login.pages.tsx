import { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import "./Login.page.css";

const Login: React.FunctionComponent = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();

    // console.warn(email + "  " + password);

    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user);
    //     history.push("/");
    //   })
    //   .catch((err: firebase.FirebaseError) => alert(err.message));
  };

  return (
    <div className="text-center LoginPageContainer">
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
      </main>
    </div>
  );
};

export default Login;
