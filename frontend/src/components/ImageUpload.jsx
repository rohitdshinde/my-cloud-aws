import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PropTypes from "prop-types";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (image === null) {
      toast("Please Select Image", {
        theme: "dark",
        type: "error",
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    toast("Please wait uploading...", {
      theme: "dark",
      type: "info",
      position: "top-center",
      autoClose: 2000,
      // onClose: resolve,
    });
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "image_transform");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dnkpxmhdr/image/upload",
      formData
    );

    onUpload(response.data);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label className="form-label text-color">
          Select an Image to Upload
        </label>
        <input
          className="form-control"
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <button className="btn btn-color" onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
};

ImageUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default ImageUpload;
