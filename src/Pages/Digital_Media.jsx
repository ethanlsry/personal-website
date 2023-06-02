import React from 'react';
import { Image } from 'antd';


function Digital_Media() {
    const photos = [
        { id: 1, src: 'https://live.staticflickr.com/65535/52935425371_d995735647_b.jpg', alt: 'Photo 1', description: "Boulder, CO" },
        { id: 2, src: 'https://live.staticflickr.com/65535/52935816530_1e0f4fa7e3_b.jpg', alt: 'Photo 2', description: "Pembrooke, NH" },
        { id: 3, src: 'https://live.staticflickr.com/65535/52935425236_c7408478c8_b.jpg', alt: 'Photo 3', description: "Haleakala National Park, HI"},
        { id: 4, src: 'https://live.staticflickr.com/65535/52935412181_bb56071ebb_b.jpg', alt: 'Photo 4', description: "Grand Teton Natl. Park, WY"},
        
        { id: 5, src: 'https://live.staticflickr.com/65535/52935804335_35bcb1bca9_b.jpg', alt: 'Photo 1', description: "Maui, HI" },
        { id: 6, src: 'https://live.staticflickr.com/65535/52936396558_7c45cb3b13_b.jpg', alt: 'Photo 2', description: "Seattle, WA" },
        { id: 7, src: 'https://live.staticflickr.com/65535/52935424656_7cbe0c97e3_b.jpg', alt: 'Photo 3', description: "Jackson, WY"},
        { id: 8, src: 'https://live.staticflickr.com/65535/52935425376_61163f2a4d_b.jpg', alt: 'Photo 4', description: "Great Sand Dunes Natl. Park, CO"}
    ];

    return (
        <div id="digital_media_container">
                {photos.map((photo) => (
                    <div key={photo.id} className="digital_media_child">
                        <Image 
                            className="digital_media_photo"
                            src={photo.src}
                            alt={photo.alt}
                        />
                        <div className="digital_media_description"><p>{photo.description}</p></div>
                    </div>
                ))}
                </div>
        );
    };

export default Digital_Media;