import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";

import Login from "./Pages/Login.pages/Login.pages";
import SignUp from "./Pages/SignupPage/signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./Firebase/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./Redux/Actions/actionCreators";
import ProductDetail from "./Pages/ProductDetails/ProductDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User ----------->>> ", authUser);
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup"></Route>
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;