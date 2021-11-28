import React, { useEffect, useState } from "react";
import Remove from "../../assets/icons/remove.svg";
import Add from "../../assets/icons/add.svg";
import Heart from "../../assets/icons/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRecordById, getRecords } from "../../redux/services/common";
import { GET_CATEGORIES } from "../../redux/services/category/categories.action";
import { GET_PRODUCT } from "../../redux/services/product/product.actions";
import { GET_COLORS } from "../../redux/services/color/color.actions";
import { Alert } from "evergreen-ui";
import "./productDetails.scss";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const [isOpenProductInfo, setIsOpenProductInfo] = useState(true);
  const { product, loading } = useSelector((state) => state.products);
  //const { colors } = useSelector((state) => state.colors);
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [cartProduct, setQty] = useState({qty: 1});
  const [cart, setCart] = useState({product: null, qty: 1, color: null, size: null, price: 0, name: "", image: null });
  useEffect(() => {
    dispatch(getRecords("/categories", GET_CATEGORIES));
    dispatch(getRecords("/colors", GET_COLORS));
    // addToCart();
  }, []);
  useEffect(() => {
    if (props.match.params.id) {
      dispatch(
        getRecordById("/products/" + props.match.params.id, GET_PRODUCT)
      );
    }
  }, [props.location]);
  useEffect(() => {
    if (product) {
      setImages(product.productItems[0].images);
      setActiveImage(product.productItems[0].images[0]);
      setColors(getAvailableProductColors(product.productItems));
      setCart({ ...cart, product: product._id, price: product.price, name: product.name, image: product.productItems[0].images[0]});
    }
  }, [product]);
  const getAvailableProductColors = (productItems) => {
    const avaiilableColors = productItems.map(item=> item.color);
    return avaiilableColors || []
  }
  const addToCart = (newProductToBeAdd = null) => {
    let localCart = JSON.parse(localStorage.getItem('cart'));
    if (!newProductToBeAdd) {
      newProductToBeAdd = {
        product: '61a203beaff8590ee8c384ee',
        color: '61a2033eaff8590ee8c384eb',
        size: 'XL',
        qty: 2,
        price: 0,
        name: "",
        image: null
      };
    }
    if (!localCart) {
      localStorage.setItem('cart', JSON.stringify([newProductToBeAdd]));
    } else {
      const isProductAlreadyExistsInTheCart = localCart.find(prdct=> prdct.product === newProductToBeAdd.product);
      if (isProductAlreadyExistsInTheCart) {
        console.log("ProductAlready in the cart");
        return;
      }
      localCart.push(newProductToBeAdd);
      localStorage.setItem('cart', JSON.stringify(localCart));
    }
    console.log("localCart = ", localCart);
  }
  if (loading || !product) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="product-detail-section container">
      {/* <Alert title="Item added to the cart" /> */}
      <div className="product-detail-wrapper">
        <div className="product-meta">
          <div className="bread-crumb text-muted">
            <span>Home / </span>
            <span>Category / </span>
            <span>Jackets</span>
          </div>
          <div className="product-title">
            <h1>{product.name}</h1>
            <h2>{`$${product.price}`}</h2>
          </div>
          <div className="product-meta-section">
            <div className="product-info">
              <div className="product-info-wrap">
                <p>Product Info</p>
                <button
                  onClick={() => setIsOpenProductInfo(!isOpenProductInfo)}
                >
                  {isOpenProductInfo ? (
                    <img src={Remove} alt="" />
                  ) : (
                    <img src={Add} alt="" />
                  )}
                </button>
              </div>
              <hr />
              {isOpenProductInfo && (
                <>
                  <p>{product.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="product-image-slider">
          <div className="product-images">
            <div className="img-grid">
              {images.map((value, index) => {
                return (
                  <img
                    src={value.url}
                    alt={"img1" + index}
                    style={{ order: 1 }}
                    onClick={() => setActiveImage(value)}
                  />
                );
              })}
            </div>
            <div className="thumb-img">
              {activeImage && (
                <img src={activeImage.url} alt="img1" style={{ order: 1 }} />
              )}
            </div>
          </div>
        </div>
        <div className="product-options">
          <div className="size-color">
            <div className="size size-color-item">
              <p className="size-color-title">Choose Size</p>
              <div className="sizes">
                {product.size.map(sz=> {
                  return (
                    <button key={sz} style={{background: sz===cart.size && "var(--black)",
                  color: sz===cart.size && "var(--light)"}}  onClick={()=>setCart({...cart, size: sz})}>{sz}</button>
                  )
                })}
              </div>
            </div>
            <div className="color size-color-item">
              <p className="size-color-title">Choose Color</p>
              <div className="colors">
                {colors.map((color, index) => {
                  return (
                    <button
                      style={{ backgroundColor: color.hexcode }}
                      key={index}
                      onClick={()=> setCart({...cart, color: color._id})}
                    />
                  );
                })}
              </div>
            </div>
            <div className="color size-color-item">
              <p className="size-color-title"></p>
              <div className="qty">
                <div className="product-qty">
                  <div id="sub" className="remove-qty" onClick={()=> {
                    cartProduct.qty !== 1 && (setQty({...cartProduct, qty: cartProduct.qty - 1}))
                  }
                  }
                    >-</div>
                  <div className="qty"> {cartProduct.qty} </div>
                  <div id="add" className="add-qty" onClick={
                    ()=> {
                      cartProduct.qty !== 10 && (setQty({...cartProduct, qty: cartProduct.qty + 1}))
                    }
                    }>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-fvrt-btn">
              <img src={Heart} alt="" />
            </button>
            <button className="add-cart-btn" onClick={()=>addToCart(cart)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
