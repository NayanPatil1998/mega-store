import { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import "./signup.css";

const SignUp: React.FunctionComponent = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = (e: any) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((rootUser) => {
        var user = firebase.auth().currentUser;

        user
          ?.updateProfile({
            displayName: name,
          })
          .then(() => {})
          .catch(function (error) {});

        if (auth) {
          history.push("/");
        }
      })
      .catch((errr) => alert(errr.message));
  };

  return (
    <div className="text-center LoginPageContainer">
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
          {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p> */}
        </form>
      </main>
    </div>
  );
};

export default SignUp;
