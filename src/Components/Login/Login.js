
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



  // facebook sign in Handler 

  const fbSignIN = () => {
    handleFbSignIN()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }



  // sign or signup handle 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          setUser(res);
        })
    }

    else if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
        .catch(err => {
          setUser(err);
          setLoggedInUser(err);

        })
    }

  }

  // check email and password are valid or not 
  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)

    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }



  return (
    <div class="outer">
      <div class="middle">
        <div class="inner">
          <div class="bg-tomato text-center">

          <p className="custom-font">Login</p>
          <form className="sign-up" onClick={handleSubmit} >
            {newUser &&
            <div>
              <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" required />
              <input type="password" name="password" onBlur={handleBlur} placeholder=" your password" required />
            </div>
              
            }
            <input type="password" name="password" onBlur={handleBlur} placeholder=" your password" required />
            <input type="email" name="email" onBlur={handleBlur} placeholder=" your mail" required />
            
            <input type="submit" value={newUser ? "Sign up" : "Sign In"} />
          </form>

          <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
          <label htmlFor="newUser"> New user sign Up </label>
          
          <br />
            </div>
            <div className="bg-blue text-center">
          <button onClick={googleSignIN} className="custom-button mb-2 mt-2 p-2"><img src="https://img.icons8.com/fluent/50/000000/google-logo.png"/>Continue with Google</button>
          <br />
          <button onClick={fbSignIN} className="custom-button mb-2 mt-2 p-2"><img src="https://img.icons8.com/fluent/50/000000/facebook-new.png"/>Continue with facebook</button>
          <br />
          </div>

          {user.error}

        </div>
      </div>
    </div>
  );
}

export default Login;
