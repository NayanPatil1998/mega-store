import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { baseUrl } from "../../axios/axios.services";
import "./category.css";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import { Link, useHistory } from "react-router-dom";

const CategoryComponent: React.FunctionComponent = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    "categories",
    () => fetch(`${baseUrl}/categories`).then((res) => res.json())
    //   axios
    //     .get<IProduct[]>(`${baseUrl}/featproducts`)
    //     .then((res: AxiosResponse) => {
    //       return res.data.json();
    //     });
  );
  const override = css`
    margin: 50% 50%;
    top: 50%;
    border-color: red;
  `;
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      {isLoading ? (
        <PropagateLoader css={override} />
      ) : (
        <div className="row">
          {data.map((item: any) => {
            return <Category key={item.category} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

const Category: React.FunctionComponent<{ item: any }> = ({ item }) => {
  const hystory = useHistory();
  let url = `/products/${item.category}`;
  const pushPage = () => {
    hystory.push(url);
  };
  return (
    <div onClick={pushPage} className="category card">
      <img src={item.imageUrl} alt="" />
      <h5 className=" text-center">{item.category}</h5>
    </div>
  );
};
export default CategoryComponent;
