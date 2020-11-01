import React, { Component } from 'react';

//https://reactjs.org/docs/handling-events.html <-- info used to figure out toggle

class GalleryItem extends Component {
  state = {
    //sets initial state
    imageDisplay: true,
  };
  activateToggle = () => {
    //changes state when an image is clicked

    console.log('toggle fired');
    this.setState({
      imageDisplay: this.state.imageDisplay === false,
    });
  };

  togglingDisplay = () => {
    //Function renders element based on state
    if (this.state.imageDisplay === true) {
      return (
        //renders image
        <img
          onClick={this.activateToggle}
          className="rounded"
          src={this.props.item.path}
          alt={this.props.item.description}
        />
      );
    } else {
      return (
        //render description (false)
        <p className="text box" onClick={this.activateToggle}>
          {this.props.item.description}
        </p>
      );
    }
  };

  render() {
    return (
      <div className="itemdiv col-3">
        {' '}
        {/* designates that item will use 3/12 columns on page */}
        <div className="box">{this.togglingDisplay()}</div>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => this.props.updateLikes(this.props.item)}
        >
          {' '}
          {/* upon click, put(updateLikes) function is passed to app.js. using props */}
          love it!
        </button>
        <h6>{this.props.item.likes} people love this!</h6>.{' '}
        {/* shows like count on page*/}
      </div>
    );
  }
}

export default GalleryItem; //exports data
