import React, { Component } from 'react';

class GalleryItem extends Component {
  //Set state for our description
  state = {
    imageDisplay: true,
  };
  handleToggle = () => {
    console.log('in handleToggle');
    this.setState({
      imageDisplay: false,
    });
  };

  togglingDisplay = () => {
    console.log('toggling');
    if (this.state.imageDisplay) {
      return <img onClick={this.handleToggle} src={this.props.item.path} />;
    } else {
      return <p onClick={this.handleToggle}>{this.props.item.description}</p>;
    }
  };

  render() {
    return (
      <div>
        {this.togglingDisplay()}
        <button onClick={() => this.props.updateLikes(this.props.item)}>
          LIKE
        </button>
        <p>{this.props.item.likes} LIKE</p>
      </div>
    );
  }
}

export default GalleryItem;
