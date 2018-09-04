import React, { Component } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    );
  }
}

export default App;