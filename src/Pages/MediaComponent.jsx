import React from "react";
import "../styles/Site.scss";
import iR1 from "../images/media/4iR-1.jpg";
import iR2 from "../images/media/4iR-2.jpg";
import iR3 from "../images/media/4iR-3.jpg";
import HackX1 from "../images/media/HackX-1.jpg";
import HackX2 from "../images/media/HackX-2.jpg";
import HackX3 from "../images/media/HackX-3.jpg";
import IEEEP1 from "../images/media/IEEEP-1.jpg";
import IEEEP2 from "../images/media/IEEEP-2.jpg";
import IEEES1 from "../images/media/IEEES12-1.jpg";
import IEEES2 from "../images/media/IEEES12-2.jpg";
import ImageCardComponent from "../components/ImageCardComponent";

export const MediaComponent = () => {
  const imgList = [
    iR3,
    iR2,
    iR1,
    IEEEP2,
    IEEEP1,
    IEEES2,
    IEEES1,
    HackX3,
    HackX2,
    HackX1,
  ];
  return (
    <section className="moments_area pad_top">
      <div className="container box_1620">
        <div className="moments_inner imageGallery1">
          {imgList.reverse().map((img, key) => {
            return <ImageCardComponent key={key} image={img} />;
          })}
        </div>
      </div>
    </section>
  );
};
