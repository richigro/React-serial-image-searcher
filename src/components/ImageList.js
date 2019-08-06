import React from 'react';

export default function ImageList(props) {
    console.log(props.images);
    return (
        <section>
{props.images.map(image =>
    { 
        return (
            <img src={image.urls.regular} alt={image.alt_description} key={image.id}/>
            );
    })
}
        </section>
        );
};
