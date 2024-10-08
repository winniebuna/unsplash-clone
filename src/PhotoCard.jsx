import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo">
      <img
        src={
          photo.urls.regular !== "N/A"
            ? photo.urls.regular
            : "https://via.placeholder.com/400"
        }
        alt={photo.alt_description}
        className="photo-image"
      />
      <div className="overlay">
        <p
          className="user-name"
          style={{ fontSize: "15px", paddingBottom: "0.2rem" }}
        >
          {photo.user.name}
        </p>
        <p
          className="user-location"
          style={{
            fontSize: "10px",
            opacity: 0.8,
          }}
        >
          {photo.user.location}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
