import React from 'react';
import '../app-container-right.css';
import './app-container-right-header.css'

let appHeader  = (props) => {

    const {person, photos, personId} = props;

    let currentPhoto = photos.filter((photo) => photo.id === personId);

    let personPhoto = '';
    if (currentPhoto.length === 0) {
        personPhoto = ''
    } else {
        personPhoto = currentPhoto[0].url;
    }

    console.log(person)
    return (
        <div className = "wrap">
        <img className = "person-photo" src = {personPhoto}></img>
        <span className="current-person-title">{person}</span>
        </div>
    )
}

export default appHeader