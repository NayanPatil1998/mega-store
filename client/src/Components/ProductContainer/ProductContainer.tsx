import React from 'react';
import IProduct from "./Product/product.type";
import Product from "./Product/product.component";
import "./productContainer.css"


const ProductContainer: React.FunctionComponent<{productList : IProduct[] }> = ({productList}) => {
    return (
        <div className="ProductContainer">
            <div className="d-flex justify-content-between">
                <h2 className="h2">Featured Products</h2>
                <button type="button" className="btn btn-dark">See more</button>
            </div>
            <div className="row">
            {productList.slice(0,4).map((product) => {
               return <Product key={product._id} product={product} />
            })}
            </div>
        </div>
    )
}

export default  ProductContainer