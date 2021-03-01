import React from 'react'
import IProduct from "./product.type";
// import {AddShoppingCartOutlined, Star} from "@material-ui/icons";
import {ScaleLoader} from "react-spinners";
import {ShoppingCart, Star} from "@material-ui/icons";

const Product : React.FunctionComponent<{ product: IProduct }> = ({product}) => {

    const [loading, setLoading] = React.useState(true)
    const setLoad= () =>{
        setLoading(false)
    }

    return (
            <div className="card m-2 p-2 " style={{width: "18rem"}}>
                <div style={{margin:"auto"}}>
                    <ScaleLoader loading={loading} />
                </div>
                <img onLoad={setLoad} src={product.image}
                                                    style={{objectFit: "contain", width: "250px", height: "280px"}}
                                                    className="card-img-top " alt=""/>

                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        {/*<Star style={{color:"yellow"}}/> 4*/}
                        <div className="buy d-flex justify-content-between align-items-center m-2" style={{ verticalAlign: "text-bottom",  bottom: "0px"}}>
                            <div className="price text-success"><h5 className="mt-4">₹ {product.price}</h5></div>
                            <a href="#" className="btn btn-danger mt-3"><ShoppingCart /> Add to cart</a>
                        </div>
                    </div>
            </div>
    )
}

export default Product