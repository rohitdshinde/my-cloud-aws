import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { deleteImage, getImages } from "../services/userService";

function GalleryComponent() {
  const [images, setImages] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    async function fetchImages() {
      if (isAuthenticated && user?.email) {
        try {
          const response = await getImages({ email: user.email });
          setImages(response.data.images);
        } catch (error) {
          console.error("Error fetching images:", error);
          setImages([]);
        }
      }
    }
    if (!isLoading) {
      fetchImages();
    }
  }, [user, isAuthenticated, isLoading]);

  const handleDelete = async (url) => {
    if (isAuthenticated && user?.email) {
      const imageDeleteObject = {
        email: user.email,
        imageURL: url,
      };

      try {
        await deleteImage(imageDeleteObject);

        setImages((prevImages) => prevImages.filter((image) => image !== url));

        toast("Image Deleted Successfully", {
          theme: "dark",
          position: "top-center",
          autoClose: 2000,
          type: "success",
        });
      } catch (error) {
        console.error("Error deleting image:", error);
        toast("Failed to delete image", {
          theme: "dark",
          position: "top-center",
          autoClose: 2000,
          type: "error",
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        {images.length === 0 ? (
          <div className="col-12 text-center">
            <p>No images to display</p>
          </div>
        ) : (
          images.map((image, index) => (
            <div className="col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card">
                <div className="image-wrapper">
                  <img
                    src={image}
                    className="card-img-top"
                    alt={`Image ${index}`}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <a href={image} download>
                    <button className="btn btn-color">Download</button>
                  </a>
                  <button
                    className="btn btn-color mx-1"
                    onClick={() => handleDelete(image)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GalleryComponent;
