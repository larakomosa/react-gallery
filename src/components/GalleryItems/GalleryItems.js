import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.path} />
        <br />
        <button onClick={() => this.props.updateLikes(this.props.item)}>
          LIKE
        </button>
        <p>{this.props.item.likes} LIKE</p>
      </div>
    );
  }
}

export default GalleryItem;
