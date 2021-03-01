import React from 'react'
import Header from "../../Layout/Header/header.layout";
import Carousel from "../../Components/Carousel.component/Carousel.component";
import Footer from "../../Layout/Footer/Footer.layout";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import {baseUrl} from "../../axios/axios.services";
import IProduct from "../../Components/ProductContainer/Product/product.type";
import axios, {AxiosResponse} from "axios";






const Home : React.FunctionComponent = () => {

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
        <div>
            <Header />
            <Carousel />
            <ProductContainer productList={products} />
            <Footer />
        </div>
    )
}

export  default Home