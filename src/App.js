import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteList/>

      {/* <QuoteCard
        quote="Shoplifting is a victimless crime, like punching someone in the dark."
        character="Nelson Muntz"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqUuyCEmsgq_bJCXWw-NFwvrG39FY2PJPGoOlz9MExIvcmbTFr" alt="Nelson Muntz"
        />

      <QuoteCard
        quote="Family, religion, friendship. These are the three demons you must slay if you wish to succeed in busniess."
        character="Mr Burns"
        image="https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png" alt="Mr Burns"
      />

      <QuoteCard
        quote="Me fail English? That's unpossible.."
        character="Ralph Wiggun"
        image="https://upload.wikimedia.org/wikipedia/en/1/14/Ralph_Wiggum.png" alt="Ralph Wiggun"
      /> */}
      <QuoteForm />
      
    </div>
  );
}

export default App;


