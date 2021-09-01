import React from 'react';
import Logo from "../../logo.svg";
import Cart from "../../assets/icons/cart.svg";
import Heart from "../../assets/icons/heart.svg";
import Expand from "../../assets/icons/expand.svg";
const Header = () => {
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
              <a href="#">
                Shop <img src={Expand} alt="" className="dropbtn" />
              </a>
              <div className="dropdown-content">
                <a href="#">Shirts</a>
                <a href="#">Hoodie</a>
                <a href="#">Shorts</a>
              </div>
            </li>
            <li className="flex align-center">
              <a href="#">
                Collections <img src={Expand} alt="" />
              </a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">About us</a>
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