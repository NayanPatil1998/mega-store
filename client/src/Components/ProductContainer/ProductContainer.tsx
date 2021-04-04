import React from "react";
import IProduct from "./Product/product.type";
import Product from "./Product/product.component";
import "./productContainer.css";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../axios/axios.services";
import { useQuery, useQueryClient } from "react-query";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";

const ProductContainer: React.FunctionComponent = () => {
  //   const [products, setProducts] = React.useState([]);
  //   const [loading, setLoading] = React.useState(false);
  //   const [error, setError] = React.useState("");
  //   React.useEffect(() => {
  //     axios
  //       .get<IProduct[]>(`${baseUrl}/featproducts`)
  //       .then((res: AxiosResponse) => {
  //         setProducts(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setError(err);
  //       });
  //   }, []);

  const override = css`
    margin: 50% 50%;
    top: 50%;
    border-color: red;
  `;

  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery(
    "FeaturedProducts",
    () => fetch(`${baseUrl}/featproducts`).then((res) => res.json())
    //   axios
    //     .get<IProduct[]>(`${baseUrl}/featproducts`)
    //     .then((res: AxiosResponse) => {
    //       return res.data.json();
    //     });
  );

  return (
    <div className="ProductContainer">
      <h2 className="h2 text-center">Featured Products</h2>
      {isLoading ? (
        <PropagateLoader css={override} />
      ) : (
        <div className="row">
          {data.map((product: IProduct) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
