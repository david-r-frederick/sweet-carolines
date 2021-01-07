import React from 'react';
import classes from './Gallery.module.css';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import gallery1 from '../../../assets/img/gallery/gallery1.jpg';
import gallery2 from '../../../assets/img/gallery/gallery2.jpg';
import gallery3 from '../../../assets/img/gallery/gallery3.jpg';
import gallery4 from '../../../assets/img/gallery/gallery4.jpg';
import gallery5 from '../../../assets/img/gallery/gallery5.jpg';
import gallery6 from '../../../assets/img/gallery/gallery6.jpg';
import gallery7 from '../../../assets/img/gallery/gallery7.jpg';
import gallery8 from '../../../assets/img/gallery/gallery8.jpg';
import gallery9 from '../../../assets/img/gallery/gallery9.jpg';
import gallery10 from '../../../assets/img/gallery/gallery10.jpg';
import gallery11 from '../../../assets/img/gallery/gallery11.jpg';
import gallery12 from '../../../assets/img/gallery/gallery12.jpg';
import gallery13 from '../../../assets/img/gallery/gallery13.jpg';
import gallery14 from '../../../assets/img/gallery/gallery14.jpg';
import gallery15 from '../../../assets/img/gallery/gallery15.jpg';
import gallery16 from '../../../assets/img/gallery/gallery16.jpg';
import gallery17 from '../../../assets/img/gallery/gallery17.jpg';
import gallery18 from '../../../assets/img/gallery/gallery18.jpg';
import gallery19 from '../../../assets/img/gallery/gallery19.jpg';
import gallery20 from '../../../assets/img/gallery/gallery20.jpg';
import gallery21 from '../../../assets/img/gallery/gallery21.jpg';
import gallery22 from '../../../assets/img/gallery/gallery22.jpg';
import gallery23 from '../../../assets/img/gallery/gallery23.jpg';
import gallery24 from '../../../assets/img/gallery/gallery24.jpg';
import gallery25 from '../../../assets/img/gallery/gallery25.jpg';
import gallery26 from '../../../assets/img/gallery/gallery26.jpg';
import gallery27 from '../../../assets/img/gallery/gallery27.jpg';
import gallery28 from '../../../assets/img/gallery/gallery28.jpg';
import gallery29 from '../../../assets/img/gallery/gallery29.jpg';
import gallery30 from '../../../assets/img/gallery/gallery30.jpg';
import gallery31 from '../../../assets/img/gallery/gallery31.jpg';

const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
].map((image) => {
    return {
        original: image,
        thumbnail: image,
        originalClass: 'gallery-photo',
    };
});

const Gallery = (props) => {
    return (
        <div className={`${classes.galleryContainer} mt-nav container`}>
            <ImageGallery thumbnailPosition="left" items={images} />
        </div>
    );
};

export default Gallery;
