import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Routes from './components/Order/Order';
import Login from './components/LogIn/Login';
import { createContext,useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Pricing from './components/Pricing/Pricing';
import Shipment from './components/Shipment/Shipment';
import Admin from './components/Admin/Admin';
import AddProductd from "./components/AddProductd/AddProductd";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SimpleOrder from './components/SimpleOrder/SimpleOrder';
import Order from './components/Order/Order';
export const userContext = createContext();

function App() {
  //state saving 
  const [loggedInUSer, setLoggedInUser] = useState({});
  const [simpleOrder,setSimpleOrder] = useState({});
  const[transportInfo,seTTransportInfo] = useState({})
  const[orderedFruits,setOrderedFruits] = useState([]);
  
  return (
    <userContext.Provider value={{ value: [loggedInUSer,setLoggedInUser],value3:[simpleOrder,setSimpleOrder],value4:[orderedFruits,setOrderedFruits] }}>
    <Router>
    <Header/>
      <Route path="/header">
      <Header/>
      </Route>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/routes">
            <Routes />
          </PrivateRoute>

          <PrivateRoute path="/shipment/:_id">
              <Shipment/>
          </PrivateRoute>
          <PrivateRoute path="/fruits/:_id">
              <SimpleOrder/>
          </PrivateRoute>

          <PrivateRoute path="/admin">
              <Admin/>
          </PrivateRoute>

          <PrivateRoute path="/order">
              <Order/>
          </PrivateRoute>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Route path='/admin/addProduct'>
        <AddProductd></AddProductd>
        </Route>
        <Route path='/admin/manageProduct'>
            <ManageProduct></ManageProduct>
         </Route>
    </Router>
    </userContext.Provider>
  );
}

export default App;
