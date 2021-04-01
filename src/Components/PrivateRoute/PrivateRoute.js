import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({children, ...rest }) => {
  const {value,value2} = useContext(userContext);
  const[loggedInUSer, setLoggedInUser] = value; 

    console.log(loggedInUSer.isSigned);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUSer.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;