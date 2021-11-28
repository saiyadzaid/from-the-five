import React, {useState, useEffect} from "react";
import { SmallCrossIcon } from "evergreen-ui";
import "./cart.scss";
const Cart = () => {
    const [cartProducts, setCartProducts] = useState(null);
    useEffect(()=>{
        let localCart = JSON.parse(localStorage.getItem('cart'));
        setCartProducts(localCart);
    }, []);
    const removeProductFromCart = (productId) => {
        let filteredProducts = cartProducts.filter(product => product.product !== productId);
        localStorage.setItem('cart', JSON.stringify(filteredProducts));
        setCartProducts(filteredProducts);
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
                        cartProducts && cartProducts.length ? cartProducts.map(product=> {
                            return (
                                <div className="product-item">
                                    <img src={product.image.url} />
                                    <div>
                                        <h3 className="product-title">
                                            {product.name}
                                        </h3>
                                        <p>{product.size}</p>
                                        <p>INR ${product.price}</p>
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
                        INR 0.00
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