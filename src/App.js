import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import PhotoCard from "./PhotoCard";
import Modal from "./Modal";

const API_URL =
  "https://api.unsplash.com/search/photos/?client_id=W2OTsEbAlggHUjqTJbVFgIjYTFNgzLgs8sYKI2zrejE";

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for selected photo

  const searchPhotos = async (query) => {
    const response = await fetch(`${API_URL}&query=${query}`);
    const data = await response.json();
    setPhotos(data.results);
  };

  useEffect(() => {
    searchPhotos("latest");
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo
    setModalOpen(true); // Open the modal
    document.body.style.overflow = "hidden"; // Prevent scrolling on the body
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedPhoto(null); // Reset selected photo
    document.body.style.overflow = "auto"; // Re-enable scrolling on the body
  };

  return (
    <div className="App">
      <div className="header-portion">
        <div className="search">
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchPhotos(searchTerm)}
          />
          <input
            placeholder="Search for photos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {photos?.length > 0 ? (
        <div className="container">
          {photos.map((photo) => (
            <div key={photo.id} onClick={() => handlePhotoClick(photo)}>
              {" "}
              {/* Make photo clickable */}
              <PhotoCard photo={photo} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Photos Found</h1>
        </div>
      )}

      {/* Modal to display selected photo */}
      <Modal isOpen={isModalOpen} photo={selectedPhoto} onClose={closeModal} />
    </div>
  );
}

export default App;
