import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])



  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>

    

    {
      loading ?

      <div className="dx">
        <h1>Welcome To <span>Super Bike Hub🏍️</span></h1>
      <PacmanLoader size={30}  color={"white"} loading={loading} speedMultiplier={1.5} />
      </div>


      :
    
    



      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/"><span>Super Bike Hub🏍️</span></Link>
            
          </div>
          <div className="header-links">
            <a href="cart/cart.html">Cart🛒</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In👋</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categories🔥</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Bikes">Bikes🏍</Link>
            </li>

            <li>
              <Link to="/category/Helmets">Helmets⛑</Link>
            </li>

            <li>
              <Link to="/category/Gloves">Gloves🧤</Link>
            </li>

            <li>
              <Link to="/category/Suits">Suits🧥</Link>
            </li>
          </ul>
          
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved to @zahangir.</footer>
      </div>
}

    </BrowserRouter>
  );
}


export default App;
