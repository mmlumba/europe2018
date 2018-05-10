// Most image handlers taken from here: https://github.com/jossmac/react-images

import React from 'react';
import Lightbox from 'react-images';

export default class Images extends React.Component {
    constructor(){
        super()
            this.state = {
                lightboxIsOpen: false,
                currentImage: 0
            }
    }

    openLightbox = (index, event) => {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    goToImage = (index) => {
        this.setState({
            currentImage: index,
        });
    }

    goToPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1
        })
    }

    goToNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1
        })
    }

    handleClickImage = () => {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.goToNext();
    }

    imagesArray = (name, length) => Array.apply(null, Array(length))
        .map((image, i) => {
            return { src: `https://s3.us-east-2.amazonaws.com/mlsideprojects/${name}-` + (i + 1) + ".JPG"}
        }
    );

    render() {
        const {
            name,
            picLength
        } = this.props;

        const listImages = this.imagesArray(name, picLength)

        return (
            <div>
                {
                    listImages.map((image, i) => {
                        return <a href={image.src} key={i} onClick={(e) => this.openLightbox(i, e)}>
                            <img src={image.src} height="200px" width="400px" className="image"/>
                        </a>
                    })
                }
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={listImages}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.goToNext}
                    onClickPrev={this.goToPrevious}
                    onClickThumbnail={this.goToImage}
                    onClose={this.closeLightbox}
                    showThumbnails={true}
                />
            </div>
        );
    }
}