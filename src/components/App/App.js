import React, { Component } from 'react';
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

  getImages() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        // {
        //   data: []
        // }
        console.log(response);
        this.setState({
          songs: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went terribly wrong.',
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
