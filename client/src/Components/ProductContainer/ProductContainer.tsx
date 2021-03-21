import React from 'react';
import IProduct from "./Product/product.type";
import Product from "./Product/product.component";
import "./productContainer.css"
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../axios/axios.services";


const ProductContainer: React.FunctionComponent = () => {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("")
    React.useEffect(() => {
        axios.get<IProduct[]>(`${baseUrl}/featproducts`)
            .then((res: AxiosResponse) => {
                setProducts(res.data);
            }).catch(err => {
            console.log(err)
            setError(err)

        })
    }, [])
    return (
        <div className="ProductContainer">
            <div className="d-flex justify-content-between">
                <h2 className="h2">Featured Products</h2>
                <button type="button" className="btn btn-dark">See more</button>
            </div>
            <div className="row">
            {products.slice(0,4).map((product : IProduct) => {
               return <Product key={product._id} product={product} />
            })}
            </div>
        </div>
    )
}

export default  ProductContainer