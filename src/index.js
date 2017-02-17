// Import react modules so that i can render the component using React.render
// Otherwise React is going to return undefined
// React module is used to create and manage components ONLY!
// ReactDOM is used to put the created components to the DOM!
import React from 'react';
import ReactDOM from 'react-dom';

// Declare variable to store youtube API key
const API_KEY = 'AIzaSyDcYnQtlPaUcMTEjrS-iosfKep06sGqX7s';

// Create a simple component using ECMA6
const App => {
	return <div>Hello world</div>;
}

// Take the component and put it on the page (DOM), remember to use ReactDOM instead of React
ReactDOM.render(<App />, document.querySelector('.container'));