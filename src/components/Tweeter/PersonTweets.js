import React, { Component } from "react";
import HeaderImage from "./HeaderImage";
import image from "./images/profile.png";

class PersonTweets extends Component {
  render() {
    const { personTweet } = this.props;

    return (
      <div style={{ display: "flex" }}>
        <HeaderImage img={image} imagesize={personlogo} />
        <h1>
          {personTweet.map(current => (
            <p key={current.id}>{current.Tweet1}</p>
          ))}
        </h1>
      </div>
    );
  }
}
export default PersonTweets;

const personlogo = {
  width: "70px",
  height: "70px"
};
