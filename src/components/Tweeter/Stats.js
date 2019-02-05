import React, { Component } from "react";

class Stats extends Component {
  render() {
    const { statsfigure } = this.props;
    return (
      <div>
        <h1>
          {statsfigure.map(current => (
            <div style={statsDimention} key={current.id}>
              <div>
                <div>tweets</div>
                {current.tweets}
              </div>
              <div>
                <div>followings</div>
                {current.following}
              </div>
              <div>
                <div>followers</div>
                {current.followers}
              </div>
              <div>
                <div>likes</div>
                {current.likes}
              </div>
              <div>
                <div>moments</div>
                {current.moments}
              </div>
            </div>
          ))}
        </h1>
      </div>
    );
  }
}
export default Stats;
const statsDimention = {
  display: "flex",
  justifyContent: "space-around"
};
