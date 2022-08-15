import React, { Component } from "react";

class Like extends Component {
  onLike = () => {
    return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
  };

  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={() => this.props.onClick(this.props.movie)}
        className={this.onLike()}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
