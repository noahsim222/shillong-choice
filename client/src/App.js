import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import Homescreen from "./pages/Homescreen/Homescreen";

import LoginScreen from "./pages/Homescreen/LoginScreen";
import RegisterScreen from "./pages/Homescreen/RegisterScreen";
import Ordersscreen from "./pages/Ordersscreen";
import CartScreen from "./pages/CartScreen";
import AdminScreen from "./pages/Homescreen/AdminScreen";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/orders" exact component={Ordersscreen} />
        <Route path="/admin" component={AdminScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
