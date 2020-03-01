import React ,{ Component } from 'react';
import QuoteCard from './QuoteCard';
import './QuoteForm.css';

class QuoteForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        character: '',
        image: '',
        quote: '',
        display: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      const stateUpdate = {};
      stateUpdate[name] = value;
      this.setState(stateUpdate);
    }
    handleSubmit(event) {
      event.preventDefault();
      this.setState({ display: true });
    }
    render() {
      return (
        <>
        <form className="QuoteForm" onSubmit={this.handleSubmit}>
          <h3>New quote</h3>
          <label htmlFor="character">Character</label>
          <input
            id="name"
            name="character"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="image">Image</label>
          <input
            id="name"
            name="image"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="quote">Quote</label>
          <textarea
            id="name"
            name="quote"
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">Add quote</button>
        </form>
        {this.state.display && (
            <QuoteCard
              character={this.state.character}
              image={this.state.image}
              quote={this.state.quote}
            />
          )}
        </>
      );
    }
  }
  
  export default QuoteForm;