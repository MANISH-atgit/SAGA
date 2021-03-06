import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import { loadImages } from '../../actions';
import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { isLoading, images, loadImages, error } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img src={image.urls.small} />
                        </div>
                    ))}
                </section>
                {/* {console.log(images)} */}
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button onClick={() => loadImages()} loading={isLoading}>
                    Load More
                </Button>
                {console.log(isLoading)}
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
