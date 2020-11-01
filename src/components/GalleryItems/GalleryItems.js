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
        <p className="text box" onClick={this.activateToggle}>
          {this.props.item.description}
        </p>
      );
    }
  };

  render() {
    return (
      <div className="itemdiv col-3">
        <div className="box">{this.togglingDisplay()}</div>
        <button
          class="btn btn-outline-secondary btn-sm"
          onClick={() => this.props.updateLikes(this.props.item)}
        >
          love it!
        </button>
        <h6>{this.props.item.likes} people love this!</h6>
      </div>
    );
  }
}

export default GalleryItem;
