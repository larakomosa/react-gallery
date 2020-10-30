import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';
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

  getImages() {
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
  }

  putImages(image) {
    axios({
      type: 'PUT',
      url: 'gallery/like/:id',
      data: image, //sends taskObject data to server
    })
      .then(function (response) {
        //getTaskData(); //sends data to get function
      })
      .catch(function (err) {
        console.log('Post Error:', err); //indicates error
        alert('Sorry, there was adding your task');
      });
  }

  render() {
    console.log('gallery', this.state.galleryList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryList photos={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
