import React, {Component} from 'react';

import Contact from './components/Contact';

class App extends Component {

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

  render(){
    return (
      <div className="App">
        {this.checkForStatus(this.state.contacts[0])}
        {this.checkForStatus(this.state.contacts[1])}
        {this.checkForStatus(this.state.contacts[2])}
      </div>
    );    
  }
}

export default App;
