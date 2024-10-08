import React from "react";

const Modal = ({ isOpen, photo, onClose }) => {
  // Do not render the modal if it is not open
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div
        className={`modal-content ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          className="modal-image"
        />
        <div className="modal-text">
          <p className="user-name">{photo.user.name}</p>
          <p className="user-location">{photo.user.location}</p>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
