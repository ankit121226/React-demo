import React from "react";
import HeaderImage from "./HeaderImage";
import profile from "./images/profile.png";
import PhotosAndVideos from "./PhotosAndVideos";

const LeftContainer = props => {
  const { ProfileDetails } = props;
  //console.log(ProfileDetails);
  return (
    <div style={leftContainerdimension}>
      <HeaderImage img={profile} imagesize={profileDimesion} />

      {ProfileDetails.map(current => (
        <div key={current.id}>
          <ul>
            <li>{current.name}</li>
            <li>{current.twittterName}</li>
            <p>{current.experties}</p>
            <li>{current.address}</li>
            <li>{current.joiningDate}</li>
            <li>{current.dob}</li>
          </ul>
        </div>
      ))}

      <PhotosAndVideos />
    </div>
  );
};
export default LeftContainer;
const profileDimesion = {
  width: "200px",
  height: "200px",
  position: "relative",
  top: "-96px",
  left: "30px"
};
const leftContainerdimension = {
  background: "green",
  width: "20%",
  display: "inline-block"
};
