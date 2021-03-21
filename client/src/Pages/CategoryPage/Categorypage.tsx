import React from 'react'
import Header from "../../Layout/Header/header.layout";
import {useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import IProduct from "../../Components/ProductContainer/Product/product.type";
import {baseUrl} from "../../axios/axios.services";
import {css} from "@emotion/react";
import {HashLoader} from "react-spinners";
import Product from "../../Components/ProductContainer/Product/product.component";
import {useQuery} from "react-query";

const CategoryPage: React.FunctionComponent = () => {

    const params: any = useParams()
    const category = params.category

    const [products, setProducts]: any = React.useState([])
    const [errorMessage, setError] = React.useState("")
    const [loading, setLoading] = React.useState(true)

    const {isLoading,} = useQuery("CategoryProducts", () => {
        axios.get<IProduct[]>(`${baseUrl}/products/${category}`)
            .then((res: AxiosResponse<IProduct[]>) => {
                setProducts(res.data);
                console.table(res.data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setError(err);
            })
    })


    const override = css`
    margin: 50% 50%;
      top: 50%;
    border-color: red;
  `;


    return(
        <div>
            <Header />
            <div className="container" style={{marginTop: "100px"}}>
                {
                    loading ? (
                        <HashLoader loading={isLoading} css={override} size={150}/>
                    ) : (
                        <div className="row">
                            {products.map((product : IProduct) => {
                                return <Product key={product._id} product={product} />
                            })}
                        </div>
                    )
                }
            </div>

        </div>
    )
}


export default CategoryPage