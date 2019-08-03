import React, {Component} from 'react';

import Header from './app-container-right-header/app-container-right-header'
import Main from './app-container-right-main/app-container-right-main'
import MessageField from './app-container-right-message-field/app-container-right-message-field'
import './app-container-right.css'

export default class AppContainerRight extends Component {
    render(){
        return (
            <div className = "right-part-container">
                <Header person = {this.props.currentPerson} personId = {this.props.personId} photos = {this.props.photos}/>
                <Main/>
                <MessageField/>
            </div>
        )
    }
}