import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    // state data. Will eventually come from the server/api
    this.state = {
      galleryItems: [], // from the server
    };
  }

  // Lifecycle method
  componentDidMount() {
    this.getGalleryData();
  }

  // add 1 like to a specific image
  addLike = (likedItem) => {
    console.log('recieved item to like: ', likedItem);
    // put request to the server to like this item
    axios.put(`/gallery/like/${likedItem.id}`, likedItem)
      .then((response) => {        
        this.getGalleryData();
      })
      .catch((error) => {
        console.log('put request error: ', error);
      });
  }

  getGalleryData = () => {
    axios.get('/gallery')
      .then((response) => {
        this.setState({
          galleryItems: response.data
        })
      })
      .catch((error) => {
          console.log('Get data error: ', error);
        }
      );
  }

  render() {
    return (
      <div className="flex-container">
        <GalleryList galleryItems={this.state.galleryItems} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;