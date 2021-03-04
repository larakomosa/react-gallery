import GalleryItem from '../GalleryItems/GalleryItems';
import '../GalleryItems/GalleryItems.css'; //imported so item specific formatting is including on render
import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const listElements = this.props.photos.map((item) => {
      //map function iterates over galleryList being passed from app.js using props
      return (
        <GalleryItem
          key={item.id}
          item={item}
          updateLikes={this.props.updateLikes}
        /> //GalleryItem component - props passed from item component down to main App js to connect with Like function.
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
