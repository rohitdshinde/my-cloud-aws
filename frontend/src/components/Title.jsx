import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Title() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center title">
        <h1 className="display-2">
          <span className="logo">Transform</span>
        </h1>
        <p id="title-text">
          Seamlessly Transform and Download Images with Custom Ratios: Fast,
          Simple, and Tailored to Your Needs
        </p>
        {isAuthenticated && (
          <button className="btn btn-color">
            <NavLink className="nav-link" to="/upload">
              Get Started
            </NavLink>
          </button>
        )}
        {!isAuthenticated && (
          <button
            className="btn btn-color"
            onClick={() => loginWithRedirect()}
          >Get Started</button>
        )}
      </div>
    </div>
  );
}

export default Title;
