import React, { useEffect, useState } from "react";
import Test1 from "../../assets/Images/test1.jpg";
import Test2 from "../../assets/Images/test2.jpg";
import Test3 from "../../assets/Images/test3.jpg";
import Test4 from "../../assets/Images/test4.jpg";
import Remove from "../../assets/icons/remove.svg";
import Add from "../../assets/icons/add.svg";
import Heart from "../../assets/icons/heart.svg";
import { useDispatch } from "react-redux";
import { getRecords } from "../../redux/services/common";
import { GET_CATEGORIES } from "../../redux/services/category/categories.action";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [isOpenProductInfo, setIsOpenProductInfo] = useState(true);
  const [images, setImages] = useState([
    { src: Test1, active: true },
    { src: Test2, active: false },
    { src: Test3, active: false },
    { src: Test4, active: false },
  ]);
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
      dispatch(getRecords('/categories', GET_CATEGORIES));
  }, []);
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
            <h1>Suilven Quilted Jacket</h1>
            <h2>$1,192.00</h2>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, voluptatibus?
                  </p>
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
                    src={value.src}
                    alt={"img1" + index}
                    style={{ order: 1 }}
                    onClick={() => setActiveImage(value)}
                  />
                );
              })}
            </div>
            <div className="thumb-img">
              <img src={activeImage.src} alt="img1" style={{ order: 1 }} />
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
                <button style={{ backgroundColor: "#75543E" }}></button>
                <button style={{ backgroundColor: "#443226" }}></button>
                <button style={{ backgroundColor: "tomato" }}></button>
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
