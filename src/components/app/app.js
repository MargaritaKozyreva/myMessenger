import React, { Component } from 'react';
import AppContainer from '../app-container/app-container.js';
import Service from '../../services/service';

class App extends Component {

  Service = new Service();

  state = {
    person: null,
    personId: null,
    allPeople: [],
    comments: [],
    photos: [],
  }

  componentDidMount () {
    this.getPerson();
    this.getAllPerson();
    this.getComments();
    this.getPhotos();
  }

  getPerson() {
    this.Service.getPerson(1).then(person => {
      this.setState({
        person: person.name,
        personId: person.id
      })
    })
  }

  getAllPerson() {
    this.Service.getAllPeople().then((persons) => {
      this.setState({
        allPeople: persons.slice(0, 3)
      })
    })
  }

  getComments() {
    this.Service.getComments().then((notif) => {
      this.setState({
        comments: notif
      })
    })
  }

  getPhotos () {
    this.Service.getPhotos().then((photo) => {
      this.setState({
        photos: photo
      })
    })
  }

  render() {
    let { person, allPeople, comments, photos, personId } = this.state;
    return (
      <AppContainer
        person={person}
        personId = {personId}
        allPeople={allPeople}
        comments = {comments} 
        photos = {photos}/>
    );
  }
}

export default App;
