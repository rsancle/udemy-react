import React from 'react';
import ReactDOM from 'react-dom';


//Custom components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDg7sC2dXvd9EST_--Ks_VL02m4gdfFQgA';

//Create a new component. This component should produce some HTML

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it on the page (in the DOM)

//First we need to instance our App component -> <App />
//And assign it a HTML element
ReactDOM.render(<App />, document.querySelector('.container'));
