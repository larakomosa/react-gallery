import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
  render() {
    return (
      <table>
        <tbody>
          <td>
            <img src={this.props.item.path} />
            <td>{this.props.item.description}</td>
          </td>
          <td>
            {' '}
            This image has been liked <span>{this.props.item.likes}</span>
          </td>
          <button onClick={this.putImages}>LIKE</button>
        </tbody>
      </table>
    );
  }
}

export default GalleryItem;
