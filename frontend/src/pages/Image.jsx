import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ImageTransform from "../components/ImageTransform";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

function Image() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = (data) => {
    setUploadedImage(data.secure_url);
  };

  return (
    <div className="container min-vh-100">
      <Navbar />
      <ImageUpload onUpload={handleUpload} />
      {uploadedImage && <ImageTransform imageUrl={uploadedImage} />}
      {/* <Footer /> */}
    </div>
  );
}

export default Image;
