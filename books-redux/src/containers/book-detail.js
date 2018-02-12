import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render() {
    if(!this.props.book){
      return <div>Select a book to get started</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

// populate prop's component
// take the books from the redux and put it in the props
function mapStateToProps(state) {
  return {
    book : state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);