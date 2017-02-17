// React is still needed even though we are not directly using React key word
// This is because <input /> jsx syntax will be compiled into React.createElement
import React from 'react';

const SearchBar = () => {
	return <input />;
};

export default SearchBar;