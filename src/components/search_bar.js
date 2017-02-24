// React is still needed even though we are not directly using React key word
// This is because <input /> jsx syntax will be compiled into React.createElement
import React, { Component } from 'react';

// // Functional based component hasn't got any ability to communicate with other components 
// const SearchBar = () => {
// 	return <input />;
// };

// Class based component is good for a component with lots of functionalities i.e events like when user input, hover, etc.
// Every class based component in React must have render() method defined!
class SearchBar extends Component {

	constructor(props) {
			super(props);
			this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				value = {this.state.term}
				onChange = {event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;