import GalleryItem from '../GalleryItems/GalleryItems';
import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const listElements = this.props.photos.map(function (item, index) {
      return <GalleryItem key={index} item={item} />;
    });
    return (
      <div className="component-container">
        <ul>{listElements}</ul>
      </div>
    );
  }
}

export default GalleryList;
