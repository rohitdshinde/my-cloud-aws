import { useState } from "react";
import { Image } from "cloudinary-react";
import PropTypes from "prop-types";
import { addImage } from "../services/userService";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const ImageTransform = ({ imageUrl }) => {
  const [ratio, setRatio] = useState("1:1");
  const { user } = useAuth0();
  // console.log(user);

  const handleRatioChange = (e) => {
    setRatio(e.target.value);
  };

  const handleSave = async () => {
    try {
      const imageObject = {
        email: user.email,
        image: transformedUrl,
      };
      const response = await addImage(imageObject);
      if (response.status === 200) {
        toast("Saved Successfully", {
          theme: "dark",
          position: "top-center",
          autoClose: 2000,
          type: "success",
        });
      } else {
        toast("Please try again later", {
          theme: "dark",
          position: "top-center",
          autoClose: 2000,
          type: "error",
        });
      }
    } catch (err) {
      console.log(err)
      toast("Try Again later", {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
        type: "error",
      });
    }
  };

  const getTransformation = () => {
    switch (ratio) {
      case "1:1":
        return "c_fill,g_auto,w_1080,h_1080"; // Instagram Post
      case "9:16":
        return "c_fill,g_auto,w_1080,h_1920"; // Instagram Story
      case "16:9":
        return "c_fill,g_auto,w_1920,h_1080"; // Twitter Post
      default:
        return "c_scale,w_400"; // Default transformation
    }
  };

  const transformedUrl = imageUrl.replace(
    "/upload/",
    `/upload/fl_attachment/${getTransformation()}/`
  );

  return (
    <div className="container mt-4">
      <h3 className="text-color">Select Image Ratio:</h3>
      <select
        className="form-select mb-3"
        value={ratio}
        onChange={handleRatioChange}
      >
        <option value="1:1">1:1 (Instagram Post)</option>
        <option value="9:16">9:16 (Instagram Story)</option>
        <option value="16:9">16:9 (Twitter Post)</option>
      </select>

      <h3 className="text-color">Images:</h3>
      <div className="row">
        <div className="col-md-6 text-center text-color">
          <h4>Original Image:</h4>
          <Image
            cloudName="dnkpxmhdr"
            publicId={imageUrl}
            width="300"
            crop="scale"
          />
        </div>
        <div className="col-md-6 text-center">
          <h4 className="text-color">Transformed Image:</h4>
          <Image
            cloudName="dnkpxmhdr"
            publicId={transformedUrl}
            width="300"
            crop="scale"
          />
          <div className="mt-3 text-center">
            <a href={transformedUrl} download>
              <button className="btn btn-color mx-2">Download</button>
            </a>
            <button className="btn btn-color" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ImageTransform.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImageTransform;
