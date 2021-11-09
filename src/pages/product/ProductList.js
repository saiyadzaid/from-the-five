import React, { useState, useEffect } from "react";
import TestIMG from "../../assets/Images/test1.jpg";
import SearchIcon from "../../assets/icons/search.svg";
import Expand from "../../assets/icons/expand.svg";
import { Link } from "react-router-dom";
import history from "../../common/history";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES } from "../../redux/services/category/categories.action";
import { getRecords } from "../../redux/services/common";
import { GET_PRODUCTS } from "../../redux/services/product/product.actions";
const ProductList = (props) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getRecords("/categories", GET_CATEGORIES));
  }, []);
  useEffect(() => {
    if (filters.category) {
      dispatch(
        getRecords("/products?category=" + filters.category, GET_PRODUCTS)
      );
    } else {
      dispatch(getRecords("/products", GET_PRODUCTS));
    }
  }, [filters]);
  return (
    <>
      <Search />
      <SearchResult />
      <ProductContent />
    </>
  );
};
export default ProductList;
const Search = () => {
  return (
    <section className="container search-box">
      <h1>From The Five</h1>
      <div className="search-area flex justify-center align-center">
        <div className="search-section flex">
          <input type="text" name="" id="" placeholder="Write something..." />
          <div className="search-category">
            <span>All fields</span>
            <span>Clothing</span>
            <span>Footwear</span>
            <span>Accessories</span>
          </div>
        </div>
        <div className="search-icon flex">
          <img src={SearchIcon} alt="" />
        </div>
      </div>
    </section>
  );
};
const SearchResult = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <section className="container search-result-section">
      <div className="search-item-found">
        <span className="text-muted">{products.length} Items Found</span>
      </div>
      <div className="view-types">
        <span>Grid View</span>
        <span className="text-muted">List View</span>
      </div>
      <div className="sort-and-view">
        <div className="sort-types dropdown">
          <span className="dropbtn">
            Sort <img src={Expand} alt="" className="dropbtn" />
          </span>
          <div className="dropdown-content">
            <Link href="#">Newest</Link>
            <Link href="#">Oldest</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
const ProductContent = () => {
  const [filterAccordian, setFilterAccordian] = useState({
    isCategoryFilterOpen: false,
    isSizeFilterOpen: false,
  });
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  return (
    <section className="container product-containt">
      {/* <div className="filters">
        <div className="filter-item">
          <div className="filter-title">
            <h4>Categories</h4>
            <img
              src={Expand}
              alt=""
              onClick={() =>
                setFilterAccordian({
                  ...filterAccordian,
                  isCategoryFilterOpen: !filterAccordian.isCategoryFilterOpen,
                })
              }
            />
          </div>
          <div
            className={`filter-items ${
              filterAccordian.isCategoryFilterOpen ? "isActive" : "isNotActive"
            }`}
          >
            {categories.map((category) => {
              return (
                <div className="filter" key={category._id}>
                  <input type="checkbox" name="" id="" />
                  <span>{category.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter-item">
          <div className="filter-title">
            <h4>Size</h4>
            <img
              src={Expand}
              alt=""
              onClick={() =>
                setFilterAccordian({
                  ...filterAccordian,
                  isSizeFilterOpen: !filterAccordian.isSizeFilterOpen,
                })
              }
            />
          </div>
          <div
            className={`filter-items ${
              filterAccordian.isSizeFilterOpen ? "isActive" : "isNotActive"
            }`}
          >
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>XL</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="products-list">
        {products.map((product, index) => {
          return (
            <div
              className="product-item"
              key={index}
              onClick={() => history.push("/product/" + product._id)}
            >
              <div>
                <img src={product.productItems[0].images[0].url} alt="" />
              </div>
              <h3 className="product-name text-muted">{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
