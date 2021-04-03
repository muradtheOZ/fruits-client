import './App.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Components/Order/Order';
import Login from './Components/Login/Login';
import { createContext,useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Pricing from './Components/Pricing/Pricing';
import Shipment from './Components/Shipment/Shipment';
import Admin from './Components/Admin/Admin';
import AddProductd from "./Components/AddProductd/AddProductd";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
export const userContext = createContext();

function App() {
  //state saving 
  const [loggedInUSer, setLoggedInUser] = useState({});
  const[transportMode,setTransportMode] = useState({
    name:'',
    price:''
  });
  const[transportInfo,seTTransportInfo] = useState({})
  const[orderedFruits,setOrderedFruits] = useState([]);
  
  return (
    <userContext.Provider value={{ value: [loggedInUSer,setLoggedInUser], value2: [transportMode,setTransportMode], value3:[transportInfo,seTTransportInfo],value4:[orderedFruits,setOrderedFruits] }}>
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

          <PrivateRoute path="/shipment">
              <Shipment/>
          </PrivateRoute>

          <PrivateRoute path="/admin">
              <Admin/>
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
