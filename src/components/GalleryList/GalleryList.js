import GalleryItem from '../GalleryItems/GalleryItems';
import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {this.props.photos.map((item) => {
          return (
            <GalleryItem
              item={item}
              key={item.id}
              updateLikes={this.props.updateLikes}
            />
          );
        })}
      </div>
    );
  }
}

//render() {
//     const listElements = this.props.photos.map(function (item, index) {
//       return (
//         <GalleryItem
//           key={index}
//           item={item}
//           updateLikes={this.props.updateLikes}
//         />
//       );
//     });
//     return (
//       <div className="component-container">
//         <ul>{listElements}</ul>
//       </div>
//     );
//   }
// }

export default GalleryList;
