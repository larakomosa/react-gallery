import GalleryItem from '../GalleryItems/GalleryItems';
import '../GalleryItems/GalleryItems.css';
import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const listElements = this.props.photos.map((item) => {
      return (
        <GalleryItem
          key={item.id}
          item={item}
          updateLikes={this.props.updateLikes}
        />
      );
    });
    return (
      <div className="container">
        <div className="row">{listElements}</div>
      </div>
    );
  }
}

export default GalleryList;
