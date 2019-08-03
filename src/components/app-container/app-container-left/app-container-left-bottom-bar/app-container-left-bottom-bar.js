import React from 'react';
import './app-container-left-bottom-bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

let BottomBar = () => {
    return (
        <div className="bottom-bar">
            <button className="add-contact">
            <FontAwesomeIcon icon={faUserPlus} className = "icon"/>
                Add Contact
            </button>
            <button className="settings">
            <FontAwesomeIcon icon={faCog} className = "icon"/>
            Settings
            </button>
        </div>
    )
}

export default BottomBar;