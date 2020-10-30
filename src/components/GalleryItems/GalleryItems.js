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
          {this.props.photos.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.path} />
                  <td>{item.description}</td>
                </td>
                <td>
                  {' '}
                  This image has been liked <span>{item.likes}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default GalleryItem;
