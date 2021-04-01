import './App.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Components/Routes/Routes';
import Login from './Components/Login/Login';
import { createContext,useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Pricing from './Components/Pricing/Pricing';
export const userContext = createContext();

function App() {
  //state saving 
  const [loggedInUSer, setLoggedInUser] = useState({});
  const[transportMode,setTransportMode] = useState('');
  const[transportInfo,seTTransportInfo] = useState({})
  
  return (
    <userContext.Provider value={{ value: [loggedInUSer,setLoggedInUser], value2: [transportMode,setTransportMode], value3:[transportInfo,seTTransportInfo] }}>
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
    </Router>
    </userContext.Provider>
  );
}

export default App;
