import React, { useContext, useState } from "react";
import { Redirect, useAuth } from "react-router";
import { Route } from "react-router-dom";
import { userContext } from "./../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const email = sessionStorage.getItem("email");
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
