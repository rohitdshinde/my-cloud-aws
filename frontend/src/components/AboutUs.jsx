export default function AboutUs() {
  return (
    <section className="about-area about-one ">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-title text-center">
              <h2 className="title fw-bold ">Why Choose Us</h2>
            </div>
          </div>
        </div>
        {/* row */}
        <div
          className="row justify-content-center "
          style={{ marginTop: "-100px" }}
        >
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-image"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title text-g">Seamless Image Transformation</h4>
                <p className="text">
                  Effortlessly transform your images to various ratios, ensuring
                  the perfect fit for any platform.
                </p>
              </div>
            </div>
            {/* single about items */}
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-cloud-storage"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title text-g">Secure Cloud Storage</h4>
                <p className="text">
                  Store your transformed images securely in the cloud,
                  accessible anytime, anywhere.
                </p>
              </div>
            </div>
            {/* single about items */}
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-customer-support"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title text-g">Dedicated Customer Support</h4>
                <p className="text">
                  Our support team is available 24/7 to assist you with any
                  queries or issues.
                </p>
              </div>
            </div>
            {/* single about items */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
}
