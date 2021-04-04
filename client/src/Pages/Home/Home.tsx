import React from "react";
import Header from "../../Layout/Header/header.layout";
import Carousel from "../../Components/Carousel.component/Carousel.component";
import Footer from "../../Layout/Footer/Footer.layout";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import ProductCategoryContainer from "../../Components/ProductsByCategory/ProductCategoryContainer";
import CategoryComponent from "../../Components/Category/categoryComponent";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <CategoryComponent />
      <ProductContainer />

      <Footer />
    </div>
  );
};

export default Home;
