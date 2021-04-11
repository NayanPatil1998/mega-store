import React from "react";
import Header from "../../Layout/Header/header.layout";
import Footer from "../../Layout/Footer/Footer.layout";
import { useSelector } from "react-redux";
import { IinitialState, totalFun } from "../../Redux/Reducers";
import CartProduct from "./CartProduct";
import "./cartpage.css";
import FlipMove from "react-flip-move";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
const CartPage: React.FunctionComponent = () => {
  const state = useSelector((state: IinitialState) => state);

  const getTotal = () => state.cart.reduce(totalFun, 0);

  return (
    <div>
      <Header />
      <div style={{ margin: "80px 50px " }}>
        <div className="row justify-content-evenly">
          <div className="col">
            <h1 className="mb-4">SHOPPING BAG</h1>
            <hr />
            <FlipMove>
              {state.cart.map((product, index) => {
                return (
                  <div>
                    <CartProduct key={index} cartItem={product} index={index} />
                  </div>
                );
              })}
            </FlipMove>
          </div>
          <div
            className="col-md-3 subtotal"
            style={{ textAlign: "center", minWidth: "400px" }}
          >
            <div className="my-2">
              <h2 className="mb-4">CART SUMMARY </h2>
              <hr />
              <div className="d-flex justify-content-between summary">
                <div>
                  <p className="h4">SubTotal</p>
                </div>
                <div>
                  <NumberFormat
                    renderText={(value) => <h4 className="mb-3">{value}</h4>}
                    decimalScale={2}
                    value={getTotal()}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between summary">
                <div>
                  <p className="h4">Delivery charge</p>
                </div>
                <div>
                  <p className="h4"> ₹ 0</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between summary">
                <div>
                  <p className="h4">Total</p>
                </div>
                <div>
                  <NumberFormat
                    renderText={(value) => <h4>{value}</h4>}
                    decimalScale={2}
                    value={getTotal()}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </div>
              </div>
            </div>
            {state.cart.length != 0 ? (
              <Link to="/checkout">
                <button
                  style={{ width: "100%", height: "50px" }}
                  className="btn btn-dark my-3"
                >
                  <h5>Proceed</h5>
                </button>
              </Link>
            ) : (
              <button
                style={{ width: "100%", height: "50px" }}
                className="btn btn-dark my-3 disabled"
              >
                <h5>Cart is Empty</h5>
              </button>
            )}
            {/* <img
              className="img-fluid"
              width="30%"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fe%2Feb%2FStripe_logo%252C_revised_2016.png&f=1&nofb=1"
              alt=""
            /> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
