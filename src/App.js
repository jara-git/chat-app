import React, { Component } from "react";
import Navbar from'./components/Navbar';
import  './components/Navbar.css';
import './components/QuoteCard.css';
import QuoteCard from'./components/QuoteCard';

class App extends Component {
  render() {
    return(
      <div className="App">
      <Navbar />
      <QuoteCard />
    </div>
    )
  }
}

export default App;


