import React, {Component} from 'react';

import AppContainerLeft from '../app-container/app-container-left/app-container-left';
import AppContainerRight from '../app-container/app-container-right/app-container-right';

import './app-container.css'

export default class AppContainer extends Component {
    render(){
        const {person, allPeople, comments, photos, personId} = this.props;
        return (
            <div className="container">
                <AppContainerLeft persons = {allPeople} comments = {comments} photos = {photos}/>
                <AppContainerRight currentPerson = {person} personId = {personId} photos = {photos}/>
            </div>
        )
    }
}