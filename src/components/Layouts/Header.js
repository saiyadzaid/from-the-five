import React from "react";
import Logo from "../../logo.svg";
import Cart from "../../assets/icons/cart.svg";
import Heart from "../../assets/icons/heart.svg";
import Expand from "../../assets/icons/expand.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <header className="top-header">
      <div className="container flex justify-between align-center">
        <section className="main-nav flex">
          <section className="logo">
            <img src={Logo} alt="logo" />
            {/* <span>FT</span>
                <span style={{ color: "#f3e73e" }}>5</span> */}
          </section>
          <ul className="flex align-center category-menu">
            <li className="flex align-center dropdown">
              <Link href="#">
                Shop <img src={Expand} alt="" className="dropbtn" />
              </Link>
              <div className="dropdown-content">
                {categories.map((category) => {
                  return <Link href="#" key={category._id}>{category.name}</Link>;
                })}
              </div>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
          </ul>
        </section>
        <section className="user-auth">
          <ul className="flex">
            <li>
              <img src={Heart} alt="heart" />
            </li>
            <li>
              <img src={Cart} alt="cart" />
            </li>
            <li>Zaid</li>
          </ul>
        </section>
      </div>
    </header>
  );
};
export default Header;
