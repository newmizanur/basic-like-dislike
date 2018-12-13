import React, { Component } from "react";

class Home extends Component {
  state = {
    likeCounter: 100,
    liked: false,
    dislikeCounter: 25,
    disliked: false
  };
  like() {
    let likeCounter = this.state.likeCounter;
    let dislikeCounter = this.state.dislikeCounter;
    if (this.state.disliked) {
      dislikeCounter -= 1;
    }

    likeCounter += 1;
    this.setState({
      likeCounter: likeCounter,
      liked: true,
      disliked: false,
      dislikeCounter: dislikeCounter
    });
  }

  dislike() {
    let likeCounter = this.state.likeCounter;
    let dislikeCounter = this.state.dislikeCounter;
    if (this.state.liked) {
      likeCounter -= 1;
    }

    dislikeCounter += 1;
    this.setState({
      likeCounter: likeCounter,
      liked: false,
      disliked: true,
      dislikeCounter: dislikeCounter
    });
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1>Home</h1>
        </header>
        <div>
          <button
            onClick={this.like.bind(this)}
            className={this.state.liked ? "active like-button" : "like-button"}
          >
            Like|{this.state.likeCounter}
          </button>
          <button
            onClick={this.dislike.bind(this)}
            className={
              this.state.disliked ? "active dislike-button" : "dislike-button"
            }
          >
            Dislike|{this.state.dislikeCounter}
          </button>
          <br />
          <br />
          <button
            onClick={this.props.updateVersion}
            style={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "red"
            }}
          >
            + Increase App Version {this.props.version}
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
