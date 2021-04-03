import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <Link to="/admin/addProduct">   
      <button>ADD product</button></Link>
      <Link to="/admin/manageProduct">   
      <button>Manage product</button></Link>
    </div>
  );
};

export default Admin;
