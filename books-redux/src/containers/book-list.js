import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
* React Component that returns a books html list
*/
class bookList extends Component{
   renderlist() {

     // For each book
     return this.props.books.map( (book) => {
       return (
         <li key = {book.title} className = "list-group-item">
           { book.title }
         </li>
       );
     });
   }
   render() {
     return (
       <ul className="list-group col-sm-4">
         { this.renderlist() }
       </ul>
     );
   }
}

//populate prop's component
function mapStateToProps(state) {
  return {
    books : state.books
  };
}

//connect our map state with our component
export default connect(mapStateToProps)(BookList);
