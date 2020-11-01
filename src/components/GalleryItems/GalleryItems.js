import React, { Component } from 'react';

//https://reactjs.org/docs/handling-events.html

class GalleryItem extends Component {
  state = {
    imageDisplay: true,
  };
  activateToggle = () => {
    console.log('toggle fired');
    this.setState({
      imageDisplay: this.state.imageDisplay === false,
    });
  };

  togglingDisplay = () => {
    if (this.state.imageDisplay === true) {
      return (
        <img
          onClick={this.activateToggle}
          className="rounded"
          src={this.props.item.path}
        />
      );
    } else {
      return (
        <p class="box" onClick={this.activateToggle}>
          {this.props.item.description}
        </p>
      );
    }
  };

  render() {
    return (
      <div className="col-3">
        <div className="box">{this.togglingDisplay()}</div>
        <button
          class="btn btn-outline-primary btn-sm"
          onClick={() => this.props.updateLikes(this.props.item)}
        >
          LIKE
        </button>
        <p>{this.props.item.likes} people love this!</p>
      </div>
    );
  }
}

export default GalleryItem;
