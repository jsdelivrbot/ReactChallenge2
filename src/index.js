// Import react modules so that i can render the component using React.render
// Otherwise React is going to return undefined
// React module is used to create and manage components ONLY!
// ReactDOM is used to put the created components to the DOM!
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Declare variable to store youtube API key
const API_KEY = 'AIzaSyDcYnQtlPaUcMTEjrS-iosfKep06sGqX7s';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos : [] };

		YTSearch({key: API_KEY, term: 'layphyu'}, (videos) => {
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take the component and put it on the page (DOM), remember to use ReactDOM instead of React
ReactDOM.render(<App />, document.querySelector('.container'));


