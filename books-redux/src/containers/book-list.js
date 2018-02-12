import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

/*
* React Component that returns a books html list
*/
class BookList extends Component{
   renderlist() {
     // For each book
     return this.props.books.map( (book) => {
       return (
         <li
           key = {book.title}
           onClick = {() => this.props.selectBook(book)}
           className = "list-group-item">
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

// populate prop's component
// take the books from the redux and put it in the props
function mapStateToProps(state) {
  return {
    books : state.books
  };
}
// Anything returned from this function will end up as a prop
// on the BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook action is called,the result should be
  // past to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//connect our map state with our component
//connect-> function of react-redux lib
// export the container populated
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
