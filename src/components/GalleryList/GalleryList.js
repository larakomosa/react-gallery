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
//   render() {
//     // map method
//     const listElements = this.props.photos.map(function (item, index) {
//       return (
//         <GalleryItem
//           item={item}
//           key={item.id}
//           updateLikes={this.props.updateLikes}
//         />
//       );
//     });
//     return (
//       <div>
//         <ul>{listElements}</ul>
//       </div>
//     );
//   }
// }
export default GalleryList;
