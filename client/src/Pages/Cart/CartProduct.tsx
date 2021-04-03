import React from "react";
import { CartItem } from "../../Redux/Reducers/type";
import { Add, Remove } from "@material-ui/icons";

const CartProduct: React.FunctionComponent<{ cartItem: CartItem }> = ({
  cartItem,
}) => {
  const [quantity, setQuantity] = React.useState(cartItem.quantity);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
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
                <h4 className="mb-3">₹ {cartItem.product.price}</h4>
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
                      {quantity}{" "}
                    </button>
                    <button
                      onClick={decrement}
                      style={{ width: "50px" }}
                      className="btn btn-dark"
                    >
                      <Remove />{" "}
                    </button>
                  </div>
                  <button style={{ width: "30%" }} className="btn btn-dark">
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
