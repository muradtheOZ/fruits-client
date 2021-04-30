import { createContext,useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';
import SimpleOrder from './Components/SimpleOrder/SimpleOrder';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import AddProduct from './Components/AddProductd/AddProductd';
import ManageProduct from './Components/ManageProduct/ManageProduct'
import Pricing from './Components/Pricing/Pricing'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
            <Order/>
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
        <AddProduct/>
        </Route>
        <Route path='/admin/manageProduct'>
            <ManageProduct></ManageProduct>
         </Route>
    </Router>
    </userContext.Provider>
  );
}

export default App;
