
import { useContext, useEffect, useState } from 'react';
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css'
import { createUserWithEmailAndPassword, handleFbSignIN, handleGithubSignIn, iniTiaLoginFramework, signInGoogleHandler, signInWithEmailAndPassword, signOutHandler } from './LoginManager';

function Login() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    photo: '',
    error: '',
  })
  iniTiaLoginFramework();
  let history = useHistory();
  let location = useLocation();
  const { value } = useContext(userContext);
  const [loggedInUSer, setLoggedInUser] = value;

  let { from } = location.state || { from: { pathname: "/" } };

  //google sign in handler
  const googleSignIN = () => {
    signInGoogleHandler()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }



  return (
    <div class="login-center bg ">
          <div className="text-center">
          <button onClick={googleSignIN} className="custom-button mb-2 mt-2 p-2"><img src="https://img.icons8.com/fluent/50/000000/google-logo.png"/>Continue with Google</button>
          </div>

          {user.error}

        </div>
  );
}

export default Login;
