import React from 'react'
import IProduct from "../../Components/ProductContainer/Product/product.type";
import axios, {AxiosResponse} from "axios"
import {baseUrl} from "../../axios/axios.services";
import {BrowserRouterProps} from "react-router-dom";
import {useParams} from "react-router-dom";
import {css} from "@emotion/react";
import {toast} from "react-toastify";
import {HashLoader} from "react-spinners";
import RingLoader from "react-spinners/RingLoader";

import "./ProductDetail.css"
import {Add, Remove, ShoppingCart, Star, StarBorder} from "@material-ui/icons";
import Header from "../../Layout/Header/header.layout";


const ProductDetail : React.FunctionComponent = (props) => {

    toast.configure();
    const params: any = useParams()
    const id = params.id;

    const [product, setProduct] : any= React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [imageLoading, setImageLoading] = React.useState(true);
    const [quantity, setQuantity] = React.useState(1)
    const [error, setError] = React.useState("")

    const override = css`
    display: block;
    margin: auto;
    border-color: red;
  `;


    React.useEffect(() => {

        axios.get<IProduct>(`${baseUrl}/product/${id}`)
            .then((res: AxiosResponse<IProduct>) => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setError(err);
            })
    }, [id])

    return(
        <div>
            <Header />
        <div className="ProductDetails">
            {
                loading ? (
                    <HashLoader loading={loading} css={override} size={150} />
                ) : (
                    <div className="container" id="product-section">
                        <div className="row">
                            <div className="col-md-5 mb-4">
                                <img src={product.image} className="img-fluid productImage" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <p className="h2 mb-3">{product.title}</p>
                                    <h5><span className="badge bg-secondary mb-3">{product.category}</span></h5>
                                    <div className="col-md-3 mb-3">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <StarBorder />
                                    </div>
                                    <p className="h3 mb-3">₹ {product.price}</p>
                                    <p className="lead mb-3" >
                                        {product.description}
                                    </p>
                                    <div className="col-md-8 mb-3">
                                        <button className="btn btn-light me-3"> <Add /> </button>
                                        <button className="btn btn-white disabled" > <h5>5</h5> </button>
                                        <button className="btn btn-light mx-3"> <Remove /> </button>
                                    </div>
                                    <div className="col-md-8 mb-3">
                                        <button className="btn btn-dark cartbutton me-3">Buy Now</button>
                                        <button className="btn btn-light cartbutton"><ShoppingCart />  Add to cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
        </div>
    )
}

export default ProductDetail