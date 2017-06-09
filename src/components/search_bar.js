import React, { Component } from 'react';

//funcional component
/*const SearchBar = () => {
  return <input />
}*/

//object component
class SearchBar extends Component{
  render(){
    return <input onChange = {this.onInputChange} />
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
