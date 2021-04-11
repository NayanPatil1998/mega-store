import React from "react";
import IProduct from "./product.type";
// import {AddShoppingCartOutlined, Star} from "@material-ui/icons";
import { ScaleLoader } from "react-spinners";
import { ShoppingCart, Star } from "@material-ui/icons";
import "./product.css";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Product: React.FunctionComponent<{ product: IProduct }> = ({
  product,
}) => {
  const [loading, setLoading] = React.useState(true);
  const setLoad = () => {
    setLoading(false);
  };

  return (
    <div className="card m-3 p-3 " style={{ width: "18rem" }}>
      <div style={{ margin: "auto" }}>
        <ScaleLoader loading={loading} />
      </div>
      {product.feat ? (
        <div className="row justify-content-end">
          <span
            style={{ width: "100px", margin: "10px", position: "absolute" }}
            className="badge rounded-pill bg-danger w-2"
          >
            Featured
          </span>
        </div>
      ) : (
        <div></div>
      )}

      <img
        onLoad={setLoad}
        src={product.image}
        style={{ objectFit: "contain", width: "240px", height: "270px" }}
        className="card-img-top "
        alt=""
      />

      <div className="card-body">
        <h5 className="card-title Product-title">{product.title}</h5>
        {/*<Star style={{color:"yellow"}}/> 4*/}
        <div
          className="buy d-flex justify-content-between align-items-center m-2"
          style={{ verticalAlign: "text-bottom", bottom: "0px" }}
        >
          <div className="price text-success">
            <NumberFormat
              renderText={(value) => <h4 className="mt-4">{value}</h4>}
              decimalScale={2}
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </div>
          <Link to={`/product/${product._id}`}>
            <button className="btn btn-dark mt-3"> View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
