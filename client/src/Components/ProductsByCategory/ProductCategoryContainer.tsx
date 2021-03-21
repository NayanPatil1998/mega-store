import React from "react";
import IProduct from "../ProductContainer/Product/product.type";
import Product from "../ProductContainer/Product/product.component";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../axios/axios.services";
import "../ProductContainer/productContainer.css"
import {Link} from "react-router-dom"

const ProductCategoryContainer: React.FunctionComponent<{category : string }> = ({category}) => {
    const [products, setProducts] = React.useState([])
    const [error, setError] = React.useState("")

    React.useEffect(() => {
        axios.get<IProduct[]>(`${baseUrl}/products/${category}`)
            .then((res: AxiosResponse) => {
                setProducts(res.data);
            }).catch(err => {
            console.log(err)
            setError(err)

        })
    }, [])
    return (
        <div className="ProductContainer my-4">
            <div className="d-flex justify-content-between">
                <h2 className="h2">{category}</h2>
                <Link to={`/products/${category}`}>
                    <button type="button" className="btn btn-dark">See more</button>
                </Link>

            </div>
            <div className="row">
                {products.slice(0,4).map((product : IProduct) => {
                    return <Product key={product._id} product={product} />
                })}
            </div>
        </div>
    )
}

export default  ProductCategoryContainer