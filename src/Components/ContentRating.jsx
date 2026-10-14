import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  state = {
    likes: 0,
    dislikes: 0,
  };

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
    }));
  };

  render() {
    const { likes, dislikes } = this.state;
    const totalRatings = likes + dislikes;
    return (
      <div className="content-rating">
        <p>Approving the Content of the Code</p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p className="total-ratings">Total ratings: {totalRatings}</p>
      </div>
    );
  }
}

export default ContentRating;