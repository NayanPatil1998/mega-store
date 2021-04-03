import React from "react";
import { CartItem } from "../../Redux/Reducers/type";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromCart,
} from "../../Redux/Actions/actionCreators";

const CartProduct: React.FunctionComponent<{
  cartItem: CartItem;
  index: number;
}> = ({ cartItem, index }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = React.useState(cartItem.quantity);
  const increment = () => {
    dispatch(incrementProductQuantity(index));
  };
  const decrement = () => {
    if (cartItem.quantity == 1) {
      removeProduct();
    } else {
      dispatch(decrementProductQuantity(index));
    }
  };

  const removeProduct = () => {
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      <div className="card m-3 p-3 " style={{}}>
        <div className="row g-0 px-2 justify-content-between">
          <div
            className="col-md-4"
            style={{ textAlign: "center", minWidth: "270px" }}
          >
            <img
              src={cartItem.product.image}
              style={{
                objectFit: "contain",
                width: "250px",
                height: "250px",
              }}
              alt="..."
            />
          </div>
          <div className="col-md-6" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <div className=" mb-auto justify-content-end">
                <h4 className="card-title mb-2 Product-title">
                  {cartItem.product.title}
                </h4>
                <NumberFormat
                  renderText={(value) => <h4 className="mb-3">{value}</h4>}
                  decimalScale={2}
                  value={cartItem.product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <div className="d-flex justify-content-between ">
                  <div className="row">
                    <button
                      onClick={increment}
                      style={{ width: "50px" }}
                      className="btn btn-dark"
                    >
                      <Add />{" "}
                    </button>
                    <button style={{ width: "50px" }} className="btn disabled">
                      {cartItem.quantity}{" "}
                    </button>
                    <button
                      onClick={decrement}
                      style={{ width: "50px" }}
                      className="btn btn-dark"
                    >
                      <Remove />{" "}
                    </button>
                  </div>
                  <button
                    style={{ width: "30%" }}
                    onClick={removeProduct}
                    className="btn btn-dark"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
