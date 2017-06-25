import React, { Component } from 'react';

 export default class bookList extends Component{
   renderlist() {
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
