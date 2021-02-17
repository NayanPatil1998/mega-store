import React from "react";
import "./App.css";
import Header from "./Layout/Header/header.layout";
import Carousel from "./Components/Carousel.component/Carousel.component";
import Footer from "./Layout/Footer/Footer.layout";
import Login from "./Pages/Login.pages/Login.pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
  );
}

export default App;
