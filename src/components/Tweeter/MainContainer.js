import React, { Component } from "react";
import HeaderImage from "./HeaderImage";
import Diamond from "./images/twibck.png";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      ProfileDetails: [
        {
          id: "4",
          name: "tayler McGinnis",
          twittterName: "@taylermcginnis33",
          experties: "partner @reacttraining",
          address: "Eden, Utah",
          joiningDate: "September 2011",
          dob: "May 2, 1990"
        }
      ]
    };
  }
  render() {
    const { ProfileDetails } = this.state;
    //console.log(ProfileDetails);
    return (
      <div>
        <HeaderImage img={Diamond} imagesize={headerDimension} />
        <LeftContainer ProfileDetails={ProfileDetails} />
        <RightContainer statistics={this.state.stats} />
      </div>
    );
  }
}

const headerDimension = {
  width: "100%",
  height: "300px"
};
