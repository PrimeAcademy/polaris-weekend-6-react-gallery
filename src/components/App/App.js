import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {

  constructor() {
    super();
    // state data. Will eventually come from the server/api
    this.state = {
      galleryItems: [
        { id: 1, path: 'images/luca-incredibles.jpg', description: 'Am I needed somewhere?', likes: 0 },
        { id: 2, path: 'images/luca-breakfast.jpg', description: 'Luca is hilarious and breakfast. What a ham.', likes: 2 },
        { id: 3, path: 'images/nora-sleeping.png', description: 'Sleeping baby is sleepy.', likes: 3 },
        { id: 4, path: 'images/gretzky.jpg', description: 'The Great One is one of my inspirational heroes.', likes: 0 },
        { id: 5, path: 'images/add2.png', description: `A Druid's Duel is my only completed and released game.`, likes: 0 },
        { id: 6, path: 'images/luca-jess.jpg', description: 'My Loves', likes: 0 },
      ],
    };
  }

  render() {
    return (
      <div className="flex-container">
        <GalleryList galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;