import React from "react";
import "../../style/Navigation.css";

export const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <>
      {isSignedIn ? (
        <nav>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={(e) => onRouteChange("signout")}
          >
            Sign Out
          </p>
        </nav>
      ) : (
        <>
          <nav>
            <p
              className="f3 link dim black underline pa3 pointer"
              onClick={(e) => onRouteChange("signin")}
            >
              Sign In
            </p>
            <p
              className="f3 link dim black underline pa3 pointer"
              onClick={(e) => onRouteChange("register")}
            >
              Register
            </p>
          </nav>
        </>
      )}
    </>
  );
};
