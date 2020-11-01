import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'; //imported component
import 'bootstrap/dist/css/bootstrap.css'; //importing bootstrap for formatting
import axios from 'axios'; //importing axios for get/put calls
import './App.css'; //importing .css file

class App extends Component {
  state = {
    //sets state
    galleryList: [],
  };

  componentDidMount() {
    this.getImages(); //ready on page load. (comparable to document on ready Jquery function)
  }

  getImages = () => {
    // axios call retrieves galleryList data from server
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log('hi', response.data, this.state.galleryList);
        this.setState({
          galleryList: response.data, //updates state with data retrieved
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went terribly wrong.', //indicated error
        });
      });
  };

  updateLikes = (clicks) => {
    // axios call to update galleryList data from server
    console.log('meow');
    axios({
      method: 'PUT',
      url: `gallery/like/${clicks.id}`, //specific ID of item being updated
    })
      .then((response) => {
        this.getImages(); //re-renders Gallery with updated data
      })
      .catch((error) => {
        alert(`Put Error`);
        console.log('put Error', error); //indicates error
      });
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
            <GalleryList //imported component
              photos={this.state.galleryList}
              updateLikes={this.updateLikes}
            />{' '}
            {/* passes PUT function and GalleryList data to GalleryList component */}
          </div>
        </div>
      </body>
    );
  }
}

export default App;
