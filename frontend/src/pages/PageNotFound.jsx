import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="error-area error-one text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-8">
              <div className="error-content text-center">
                <span className="error-404">404</span>
                <h5 className="sub-title">Page Not Found</h5>
                <p className="text">
                  Oops! The page you are looking for does not exist.
                </p>
                <div className="error-form">
                  <form action="#0">
                    <div className="">
                      <button
                        className="btn btn-color"
                        to="/"
                        onClick={() => {
                          navigate("/", { replace: "true" });
                        }}
                      >
                        Back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* error content */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
    </div>
  );
}
