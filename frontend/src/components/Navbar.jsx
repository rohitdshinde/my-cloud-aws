import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";
import { addUser } from "../services/userService";
import { useEffect } from "react";

function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    navigate("/", { replace: true });
  };

  useEffect(() => {
    async function User() {
      if (isAuthenticated && user) {
        const userObject = {
          name: user.name,
          email: user.email,
        };
        await addUser(userObject);
      }
    }
    User();
  }, [isAuthenticated, user]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#03011c !important", color: "white" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand text-color" to="/">
            Transform
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/price">
                  Pricing
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isAuthenticated && (
                  <>
                    {" "}
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/gallery">
                        Gallery
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/upload">
                        Upload
                      </NavLink>
                    </li>
                  </>
                )}
                {!isAuthenticated && (
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </button>
                  </li>
                )}

                {isAuthenticated && (
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}
                {isAuthenticated && (
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
