import React, { useEffect } from "react";
import "./App.css";
import Header from "./Layout/Header/header.layout";
import Carousel from "./Components/Carousel.component/Carousel.component";
import Footer from "./Layout/Footer/Footer.layout";
import Login from "./Pages/Login.pages/Login.pages";
import SignUp from "./Pages/SignupPage/signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./Firebase/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./Redux/Actions/actionCreators";

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
            <Route path="/">
              <Header />
              <Carousel />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
