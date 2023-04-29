import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AppBar, Badge, Button, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Foods from "./components/Foods";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import './App.css';
import { useSelector } from "react-redux";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import OrderSuccess from "./components/OrderSuccess";

function App() {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="App">
      <AppBar position='static' color='error'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigate(`/home`)}>Home</Button>
          <Button color='inherit' onClick={() => navigate(`/foods`)}>Food</Button>
          <Button color='inherit' sx={{ marginLeft: 'auto' }} onClick={() => navigate(`/cart`)}><Badge color="primary" badgeContent={cartItems.length}>
            <ShoppingCartIcon />
          </Badge></Button>
        </Toolbar>
      </AppBar>

      {/* route setup */}
      <Routes>
     
      <Route exact path='/' element={<Login />} />
      <Route exact path='/register' element={<SignUp />} />
      <Route path="/home" element={<ProductedRoute><Home /></ProductedRoute>} />
        <Route path="/foods" element={<ProductedRoute><Foods /></ProductedRoute>} />
        <Route path="/cart" element={<ProductedRoute><Cart /></ProductedRoute>} />
        <Route path="/cart/checkout" element={<ProductedRoute><CheckOut /></ProductedRoute>} />
        <Route path="/cart/checkout/ordersuccess" element={<ProductedRoute><OrderSuccess /></ProductedRoute>} />
        
      </Routes>
      <Toaster />
    </div>
  );
}



// function Home() {

//   const navigate = useNavigate();

//   return (
//     <div className="food-home">
//       <h1>Welcome To Food App</h1>
//       <Button onClick={() => navigate('/foods')} variant='contained' color='error'>Enjoy Your Food</Button>
//     </div>
//   )
// }

function ProductedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  // console.log(isAuth);
  return isAuth ? children : <Navigate replace to={'/'} />;
}

export default App;