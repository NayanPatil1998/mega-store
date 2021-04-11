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
import CategoryPage from "./Pages/CategoryPage/Categorypage";
import { QueryClient, QueryClientProvider } from "react-query";

import CartPage from "./Pages/Cart/CartPage";
import Checkout from "./Pages/checkout/checkout";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Pages/Loading/loading";
function App() {
  const dispatch = useDispatch();
  const queryClient = new QueryClient();

  const [user, loading, error] = useAuthState(auth);
  if (user) {
    dispatch(setUser(user));
  } else {
    dispatch(setUser(null));
  }

  // auth.onAuthStateChanged((authUser) => {
  //   console.log("User ----------->>> ", authUser);
  //   if (authUser) {
  //     dispatch(setUser(authUser));
  //   } else {
  //     dispatch(setUser(null));
  //   }
  // });

  return loading ? (
    <Loading />
  ) : (
    <QueryClientProvider client={queryClient}>
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
              <Route path="/products/:category" component={CategoryPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/checkout" component={Checkout} />

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
