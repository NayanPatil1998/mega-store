import React from 'react'
import Header from "../../Layout/Header/header.layout";
import Carousel from "../../Components/Carousel.component/Carousel.component";
import Footer from "../../Layout/Footer/Footer.layout";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import ProductCategoryContainer from "../../Components/ProductsByCategory/ProductCategoryContainer";


const Home : React.FunctionComponent = () => {




    return (
        <div>
            <Header />
            <Carousel />
            <ProductContainer />
            <ProductCategoryContainer category="women clothing" />
            <ProductCategoryContainer category="men clothing" />
            <ProductCategoryContainer category="jewelery" />
            <ProductCategoryContainer category="electronics" />
            <Footer />
        </div>
    )
}

export  default Home