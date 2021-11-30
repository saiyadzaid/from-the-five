import React from "react";
import { SmallCrossIcon } from "evergreen-ui";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART } from "../../redux/services/cart/cart.actions";
const Cart = () => {
    const { cart: cartProducts } = useSelector(state=> state.cart);
    const dispatch = useDispatch();
    const removeProductFromCart = (productId) => {
        dispatch(REMOVE_FROM_CART('success', productId));
    }
    return (
        <section className="container">
            <div className="cart">
                <h1>CART</h1>
                <p className="cart-number-products">
                        {cartProducts && cartProducts.length ? cartProducts.length : 0} products in your cart
                </p>

                <div className="cart-product-items">
                    {
                        cartProducts && cartProducts.length ? cartProducts.map((product)=> {
                            return (
                                <div className="product-item" key={product.product}>
                                    <img src={product.image.url} />
                                    <div>
                                        <h3 className="product-title">
                                            {product.name}
                                        </h3>
                                        <p>{product.size}</p>
                                        <p>{product.qty} x INR {product.price.toFixed(2)}</p>
                                    </div>
                                    <span onClick={()=> removeProductFromCart(product.product)}>
                                        <SmallCrossIcon />
                                    </span>
                                </div>
                            )
                        }) : <></>
                    }
                </div>

                <div className="inr-instruction">
                    <h1>
                        <span>Total: </span>
                        INR { cartProducts && cartProducts.length ? 
                            cartProducts.map(product=> product.price* product.qty).reduce((pre, cur) => pre+ cur, 0).toFixed(2) :
                            0 }
                    </h1>
                    <p>Shipping & taxes calculated at checkout

                    </p>
                </div>
                <div className="cart-message">
                    <textarea type="text" placeholder="Write your message here." maxLength="150">
                    </textarea>
                </div>
                <div className="cart-action-buttons">
                    <button id="edit-cart-btn">EDIT CART</button>
                    <button id="checkout-btn">CHECKOUT</button>
                </div>
                </div>
        </section>
    )
}
export default  Cart;