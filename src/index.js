import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//Custom components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDg7sC2dXvd9EST_--Ks_VL02m4gdfFQgA';



//Create a new component. This component should produce some HTML
//Yhis is a functional component
/*const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}*/

//Now we rewrite App component as an Object Component to get acces to states
class App extends Component{

	//Object constructor
	constructor(props){
		super(props);

		//create a new state videos
		this.state = { videos: [] };


		//asign youtube search to videos state
		YTSearch({ key: API_KEY, term: '' }, (videos) => {
			//old sintax -> this.setState( { videos: videos });
			this.setState( { videos });
		});
	}
	// app state to child VideList as props
	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos = { this.state.videos }/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)

//First we need to instance our App component -> <App />
//And assign it a HTML element
ReactDOM.render(<App />, document.querySelector('.container'));
