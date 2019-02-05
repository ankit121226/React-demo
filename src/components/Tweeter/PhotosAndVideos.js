import React from "react";
import HeaderImage from "./HeaderImage";
import photos from "./images/profile.png";

export default function PhotosAndVideos() {
  return (
    <div>
      <h5>192 Photos and Videos</h5>
      <div style={photosVideos}>
        <HeaderImage img={photos} imagesize={photosandvideos} />
        <HeaderImage img={photos} imagesize={photosandvideos} />
        <HeaderImage img={photos} imagesize={photosandvideos} />
      </div>
      <div style={photosVideos}>
        <HeaderImage img={photos} imagesize={photosandvideos} />
        <HeaderImage img={photos} imagesize={photosandvideos} />
        <HeaderImage img={photos} imagesize={photosandvideos} />
      </div>
    </div>
  );
}

const photosandvideos = {
  height: "70px",
  width: "80px"
};

const photosVideos = {
  display: "flex",
  justifyContent: "space-between"
};
