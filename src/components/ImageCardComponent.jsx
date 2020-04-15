import React from "react";
import "../styles/Site.scss";

export default function ImageCardComponent(image) {
  return (
    <div className="gallery_item">
      <div className="h_gallery_item">
        <img src={image.image} alt="" />
        <div className="hover">
          <a className="light" href={image.image}>
            <i className="fa fa-expand"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
