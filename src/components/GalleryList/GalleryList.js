import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component {

  constructor() {
    super();    
  }

  render() {
    // do some mappin'
    const data = this.props.galleryItems.map( (item) => {
      return <GalleryItem key={item.id} itemInfo={item} addLike={this.props.addLike} />;
    });

    return (
      <div className="flex-container">
        {data}
      </div>
    );
  }
}

export default GalleryList;