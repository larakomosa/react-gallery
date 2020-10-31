import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button>LIKE</button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <td>
            <img src={this.props.item.path} />
            <td>{this.props.item.description}</td>
          </td>
          <td>
            {' '}
            This image has been liked <span>{this.props.item.likes}</span>
          </td>
        </tbody>
      </table>
    );
  }
}

export default GalleryItem;
