import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    constructor() {
        super();
        this.state = {
            showDescription: false,
        };
    }

    handleDetailsClick = (event) => {
        console.log('clicked on details');
        // reverse state
        this.setState( {
            showDescription: !this.state.showDescription,
        });
        
    }

    render() {
        // conditional rendering
        let detailsToShow; // our JSX object
        if(this.state.showDescription) {
            detailsToShow = <p>{this.props.itemInfo.description}</p>;
        } else {
            detailsToShow = <img src={this.props.itemInfo.path}
                                 alt={this.props.itemInfo.description} />;
        }

        return (
            <div className="galleryItem">
                <div className="galleryItem-details" 
                    onClick={this.handleDetailsClick}>

                    {detailsToShow}
                    
                </div>

                <button className="likeButton"><i className="far fa-thumbs-up"></i></button>

                <p>Likes: {this.props.itemInfo.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;