import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {

  state = {
    contacts: 
    [
        {
            name: 'Nemo',
            image: 'https://randomuser.me/api/portraits/lego/1.jpg',
            connected: false
            },
            {
            name: 'Diana',
            image: 'https://randomuser.me/api/portraits/lego/2.jpg',
            connected: true
            },
            {
            name: 'Oxmo',
            image: 'https://randomuser.me/api/portraits/lego/4.jpg',
            connected: false
            },
            {
              name: 'Finx',
              image: 'https://randomuser.me/api/portraits/lego/5.jpg',
              connected: true
            },
            {
                name: 'Lu',
                image: 'https://randomuser.me/api/portraits/lego/8.jpg',
                connected: false
            }
    
    ]
  }

  checkForStatus(person){
    return (
      person.connected
      ? <Contact name={person.name} image={person.image} onlineStatus/>
      : <Contact name={person.name} image={person.image} />
    )
  }

  renderPeople(){
   return(
    this.state.contacts.map((person)=>{
      return this.checkForStatus(person)
    })
   ) 
  }

  render(){
    return (
      <div className="ContactList">
        {this.renderPeople()}
      </div>
    );    
  }
}

export default ContactList;