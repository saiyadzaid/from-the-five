import React, { useEffect, useState } from "react";
import Remove from "../../assets/icons/remove.svg";
import Add from "../../assets/icons/add.svg";
import Heart from "../../assets/icons/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRecordById, getRecords } from "../../redux/services/common";
import { GET_CATEGORIES } from "../../redux/services/category/categories.action";
import { GET_PRODUCT } from "../../redux/services/product/product.actions";
import { GET_COLORS } from "../../redux/services/color/color.actions";
import "./productDetails.scss";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const [isOpenProductInfo, setIsOpenProductInfo] = useState(true);
  const { product, loading } = useSelector((state) => state.products);
  const { colors } = useSelector((state) => state.colors);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [cartProduct, setQty] = useState({qty: 1});
    useEffect(() => {
    dispatch(getRecords("/categories", GET_CATEGORIES));
    dispatch(getRecords("/colors", GET_COLORS));
  }, []);

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(
        getRecordById("/products/" + props.match.params.id, GET_PRODUCT)
      );
    }
  }, props.location);
  useEffect(() => {
    if (product) {
      setImages(product.productItems[0].images);
      setActiveImage(product.productItems[0].images[0]);
    }
  }, product);
  if (loading || !product) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="product-detail-section container">
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
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
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
            <button className="add-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
