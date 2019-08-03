import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperclip} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import './app-container-right-message-field.css'

let messageField  = () => {
    return (
        <div className="wrap">
            <input className = "right-part-message-field" placeholder='Write your message'></input>
            <FontAwesomeIcon icon = {faPaperclip} className="icon-paper-clip"/>
            <FontAwesomeIcon icon = {faPaperPlane} className = "icon-paper-plane"/>
        </div>
    )
}

export default messageField