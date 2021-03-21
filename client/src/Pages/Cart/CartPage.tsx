import React from 'react'
import Header from "../../Layout/Header/header.layout";
import Footer from "../../Layout/Footer/Footer.layout";
import {useSelector} from "react-redux";
import {IinitialState} from "../../Redux/Reducers";
import CartProduct from "./CartProduct";

const CartPage: React.FunctionComponent = () => {
    const state = useSelector((state: IinitialState) => state);



    return (
        <div>
            <Header />
            <div className="container" style={{marginTop: "80px"}}>
                <h1 className="mb-4">Hello {state.user?.displayName}, Here is your cart</h1>
                {state.cart.map(product => {
                    return (
                        <div>
                            <CartProduct cartItem={product}/>
                        </div>
                    )
                })}
            </div>

            <Footer />
        </div>
    )
}


export default CartPage