import Logo from "./logo.svg";
import Cart from "./assets/icons/cart.svg";
import Heart from "./assets/icons/heart.svg";
import Expand from "./assets/icons/expand.svg";
import SearchIcon from "./assets/icons/search.svg";
import TestIMG from "./assets/Images/test.jpg";
function App() {
  return (
    <>
      <Header />
      <Search />
      <SearchResult />
      <ProductContent />
    </>
  );
}

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
                Category <img src={Expand} alt="" className="dropbtn" />
              </a>
              <div class="dropdown-content">
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
              <a href="#">Contacts</a>
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

const Search = () => {
  return (
    <section className="container search-box">
      <h1>FT5 Search</h1>
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
  return (
    <section className="container search-result-section">
      <div className="search-item-found">
        <span className="text-muted">2481 Items Found</span>
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
            <a href="#">Newest</a>
            <a href="#">Oldest</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductContent = () => {
  return (
    <section className="container product-containt">
      <div className="filters">
        <div className="filter-item">
          <div className="filter-title">
            <h4>Categories</h4>
            <img src={Expand} alt="" />
          </div>
          <div className="filter-items">
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>Coats</span>
            </div>
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>Denim</span>
            </div>
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>Jackets</span>
            </div>
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>Pants</span>
            </div>
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>T-Shirts</span>
            </div>
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>Suits</span>
            </div>
          </div>
        </div>
        <div className="filter-item">
          <div className="filter-title">
            <h4>Size</h4>
            <img src={Expand} alt="" />
          </div>
          <div className="filter-items">
            <div className="filter">
              <input type="checkbox" name="" id="" />
              <span>XL</span>
            </div>
          </div>
        </div>
      </div>
      <div className="products-list">
        <div className="product-item">
          <img src={TestIMG} alt="" />
          <h3 className="product-name text-muted">T-SHIRTS FOR MEN</h3>
          <p className="product-price">$12500</p>
        </div>
        <div className="product-item">
          <img src={TestIMG} alt="" />
          <h3 className="product-name text-muted">T-SHIRTS FOR MEN</h3>
          <p className="product-price">$12500</p>
        </div>
        <div className="product-item">
          <img src={TestIMG} alt="" />
          <h3 className="product-name text-muted">T-SHIRTS FOR MEN</h3>
          <p className="product-price">$12500</p>
        </div>
      </div>
    </section>
  );
};

export default App;
