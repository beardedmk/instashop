// import { Routes, Route } from "react-router-dom";

// import "./App.css";

// import Home from "./pages/Home";
// import Layout from "./components/Layout";
// import ProductDetails from "./pages/productDetails/ProductDetails";
// import ShoppingCart from "./components/cart/ShoppingCart";
// import AllProductsByCategory from "./pages/AllProductsByCategory";
// import Search from "./pages/Search";
// import UserProfile from "./pages/UserProfile";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// function App() {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route exact path="/productdetail/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<ShoppingCart />} />
//         <Route
//           path="/category"
//           params={{ cat: `value` }}
//           element={<AllProductsByCategory />}
//         />
//         <Route path="/search" params={{ q: `search` }} element={<Search />} />
//         <Route path="/user" element={<UserProfile />}>
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ShoppingCart from "./components/cart/ShoppingCart";
import AllProductsByCategory from "./pages/AllProductsByCategory";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BuyConfirmation from "./components/BuyConfirmation";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="productdetail/:id" element={<ProductDetails />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route
          path="category"
          params={{ cat: `value` }}
          element={<AllProductsByCategory />}
        />
        <Route path="search" params={{ q: `search` }} element={<Search />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/user/signin" element={<SignIn />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/order" element={<BuyConfirmation />} />
      </Route>
    </Routes>
  );
}

export default App;
