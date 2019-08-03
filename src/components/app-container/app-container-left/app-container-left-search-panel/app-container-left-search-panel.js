import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './app-container-left-search-panel.css'
let SearchPanel = () => {
    return(
        <div className = "wrap">
        <FontAwesomeIcon icon = {faSearch} className="search-icon"/>
        <input className = "search-panel" placeholder = "Search contacts..."></input>
        </div>
    )
}

export default SearchPanel