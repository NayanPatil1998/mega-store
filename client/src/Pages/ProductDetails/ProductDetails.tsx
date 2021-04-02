import React from "react";
import IProduct from "../../Components/ProductContainer/Product/product.type";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../axios/axios.services";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import { toast } from "react-toastify";
import { HashLoader, PulseLoader } from "react-spinners";

import "./ProductDetail.css";
import {
  Add,
  Remove,
  ShoppingCart,
  Star,
  StarBorder,
} from "@material-ui/icons";
import Header from "../../Layout/Header/header.layout";
import ProductReview from "../../Components/ProductContainer/Product/Review/ProductReviews";
import Footer from "../../Layout/Footer/Footer.layout";
import { addToCart } from "../../Redux/Actions/actionCreators";
import { useDispatch } from "react-redux";

const ProductDetail: React.FunctionComponent = (props) => {
  toast.configure();

  const dispatch = useDispatch();
  const params: any = useParams();
  const id = params.id;

  const [product, setProduct] = React.useState<IProduct>();
  const [loading, setLoading] = React.useState(true);
  const [imageLoading, setImageLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const override = css`
    margin: 50% 50%;
    top: 50%;
    border-color: red;
  `;

  function addCart() {
    dispatch(addToCart(product));
    toast.success("Added to cart successfully");
  }

  React.useEffect(() => {
    axios
      .get<IProduct>(`${baseUrl}/product/${id}`)
      .then((res: AxiosResponse<IProduct>) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [id]);
  const setLoad = () => {
    setLoading(false);
  };
  return (
    <div>
      <Header />
      <div className="ProductDetails">
        {loading ? (
          <HashLoader loading={loading} css={override} size={150} />
        ) : (
          <div className="container mb-2" id="product-section">
            <div className="row">
              <div className="col-md-5" style={{ textAlign: "center" }}>
                <img
                  onLoad={setLoad}
                  src={product?.image}
                  className="img-fluid productImage"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="col-md-12">
                  <p className="h2 mb-3">{product?.title}</p>
                  <h5>
                    <span className="badge bg-secondary mb-3">
                      {product?.category}
                    </span>
                  </h5>
                  <div className="col-md-3 mb-3">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorder />
                  </div>
                  <p className="h3 mb-3">₹ {product?.price}</p>

                  <div className="col-md-8 mb-3">
                    <button className="btn btn-dark cartbutton me-3">
                      Buy Now
                    </button>
                    <button
                      onClick={addCart}
                      className="btn btn-light cartbutton"
                    >
                      <ShoppingCart /> Add to cart{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mb-3">Description :</h2>
            <ul>
              {product?.description.map((element, index) => (
                <li className="blockquote">
                  <p key={index} className="mb-3">
                    {element}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
