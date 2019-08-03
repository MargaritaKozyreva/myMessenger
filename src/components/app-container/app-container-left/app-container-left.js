import React from 'react';
import SearchPanel from './app-container-left-search-panel/app-container-left-search-panel'
import PersonInfo from './app-container-left-person-info/app-container-left-person-info'
import BottomBar from './app-container-left-bottom-bar/app-container-left-bottom-bar'
import './app-container-left.css'
let AppContainerLeft = (props) => {

    let persons = props.persons;
    let comments = props.comments;
    let photos = props.photos;

    let renderPeople = () => {

        let peoples = persons.map((person) => {

            let commentsArray = comments.filter((comment) => comment.id === person.id);
            let photoArrays = photos.filter((photo) => photo.id === person.id)

            let commentsBody = '';
            let personPhoto = '';

            if (commentsArray.length === 0) {
                commentsBody = ''
            } else {
                commentsBody = commentsArray[0].body;
            }

            if (photoArrays.length === 0) {
                personPhoto = ''
            } else {
                personPhoto = photoArrays[0].url;
            }

            return (
                <div className="person-card">
                    <span class="contact-status offline"></span>
                    <img className="person-photo" src={personPhoto}></img>
                    <div>
                        <p className="person-name">{person.name}</p>
                        <p className="person-comment">{commentsBody}</p>
                    </div>
                </div>
            )
        })
        return peoples
    }


    return (
        <div className="left-part-container">
            <PersonInfo />
            <SearchPanel />
            <div>
                {renderPeople()}
            </div>
            <BottomBar/>
        </div>
    )
}

export default AppContainerLeft;