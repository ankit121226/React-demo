import React from "react";

const HeaderImage = props => {
  return (
    <div>
      <img src={props.img} style={props.imagesize} />
    </div>
  );
};
export default HeaderImage;
