import React from "react";
import Logo from "../../logo.svg";
import Cart from "../../assets/icons/cart.svg";
import Heart from "../../assets/icons/heart.svg";
import Expand from "../../assets/icons/expand.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILTERS } from "../../redux/services/product/product.actions";
import history from "../../common/history";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SideSheet, Pane, Heading, Card, Button, MenuIcon, CrossIcon } from "evergreen-ui";
const Header = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width: 600px)");
  const [isShown, setIsShown] = React.useState(false);
  return (
    <header className="top-header">
      {isShown && <SlideSheet isShown={isShown} setIsShown={setIsShown} />}
      <div className="container flex justify-between align-center">
        <section className="main-nav flex">
          <section className="logo">
            <img src={Logo} alt="logo" />
          </section>
          {!matches && (
            <ul className="flex align-center category-menu">
              <li className="flex align-center dropdown">
                <Link to="#">
                  Shop <img src={Expand} alt="" className="dropbtn" />
                </Link>
                <div className="dropdown-content">
                  {categories.map((category) => {
                    return (
                      <button
                        key={category._id}
                        onClick={() => {
                          dispatch(
                            SET_FILTERS("success", {
                              filter: { category: category._id },
                            })
                          );
                          history.push("/");
                        }}
                      >
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
            </ul>
          )}
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
            {matches && (
              <li>
                <MenuIcon onClick={() => setIsShown(true)} />
              </li>
            )}
          </ul>
        </section>
      </div>
    </header>
  );
};

const SlideSheet = ({ isShown, setIsShown }) => {
  return (
    <React.Fragment>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            {/* <Heading size={600}>Title</Heading> */}
            <CrossIcon onClick={() => setIsShown(false)} />
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>Some content</Heading>
          </Card>
        </Pane>
      </SideSheet>
    </React.Fragment>
  );
};
export default Header;
