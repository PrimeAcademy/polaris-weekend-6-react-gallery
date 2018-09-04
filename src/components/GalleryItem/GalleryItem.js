import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    render() {
        return (
            <div className="galleryItem">
                <img src={this.props.itemInfo.path} 
                     alt={this.props.itemInfo.description} />
                <button className="likeButton"><i className="far fa-thumbs-up"></i></button>
            </div>
        );
    }
}

export default GalleryItem;