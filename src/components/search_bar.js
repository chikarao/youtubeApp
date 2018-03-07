import React, { Component } from 'react';
// now don't need extends React.Component; destructuring
import { GOOGLE_API_KEY } from '../../credentials';

//funcitonal component
// const SearchBar = () => {
//   return <input />
// };


class SearchBar extends Component {
  //class based component needs render method
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  constructor(props) {
    super(props);
    // calling parent method with super
    this.state = { term: '' };
    // initialize state
    //only in constructor use this.state =; outside use this.setState()
    // term records user input in input component
  }
  // called automatically when new instance of class created
  // constructor reserved for doing set up; initialize variables, state
  // super(props); overwrites
  // only class based component has state. each class has its own state
  onInputChange(term) {
    this.setState({ term });
    // component rerenders everytime state changes
    this.props.onSearchTermChange(term);
  }

  render() {
      // render method needs to return some JSX
      console.log(this.state.term);
      return (
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            placeholder="Search... ex. snowboarding"
          />
        </div>
      );
      // with value, input becomes controlled component
      // Value of the input: {this.state.term}
      // return <input onChange={this.onInputChange} />;
  }
}

export default SearchBar;
