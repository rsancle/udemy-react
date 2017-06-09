import React, { Component } from 'react';

//funcional component
/*const SearchBar = () => {
  return <input />
}*/

//object component
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render(){
    return (
      <div>
        <input 
        value = {this.state.term}
        onChange = { event => this.setState({term: event.target.value}) } />
       
      </div>
    );
  }

  onInputChange(event){
    
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }
}

export default SearchBar;
