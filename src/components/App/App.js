import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    galleryItem: {
      id: '',
      path: '',
      description: '',
      likes: '',
    },
    galleryList: [],
    errorMsg: null,
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log('hi', response.data, this.state.galleryList);
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went terribly wrong.',
        });
      });
  };

  updateLikes = (clicks) => {
    console.log('meow');
    axios({
      method: 'PUT',
      url: `gallery/like/${clicks.id}`,
    })
      .then((response) => {
        this.getImages();
      })
      .catch((error) => {
        alert(`Put Error`);
        console.log('put Error', error);
      });
  };

  handleSubmit = (event) => {
    console.log('meow');
  };

  render() {
    return (
      <body>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">...life in a glimpse</h1>
            <p className="disclosure">** click photos for more details** </p>
          </header>
          <div>
            <GalleryList
              photos={this.state.galleryList}
              updateLikes={this.updateLikes}
            />
          </div>
        </div>
      </body>
    );
  }
}

export default App;
