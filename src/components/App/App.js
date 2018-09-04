import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex-container">
        <GalleryList />
      </div>
    );
  }
}

export default App;