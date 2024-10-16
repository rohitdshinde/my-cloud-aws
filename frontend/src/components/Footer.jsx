function Footer() {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="container">
          <hr />
          <div className="row mx-4">
            <div className="col-md-4 my-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>

                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-md-4 my-4">
              <h5>Contact Information</h5>
              <p>Shivajinagar, Pune, Maharashtra, 411003</p>
              <p>Email: transform@gmail.com</p>
              <p>Phone: +91 1234567890</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="text-center my-1">
              &copy; 2024 Transform. All rights reserved.
            </p>
          </div>
          <hr />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
