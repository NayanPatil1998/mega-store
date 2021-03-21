import IProduct from "../../Components/ProductContainer/Product/product.type";

export type Action = {
    type: string,
    payload: any;
}

export type CartItem = {
    product: IProduct,
    quantity: number
}