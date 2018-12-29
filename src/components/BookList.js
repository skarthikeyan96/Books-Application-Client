import React, { Component } from 'react';
import {graphql} from 'react-apollo';//bind react with apollo
import {getBooks} from '../Queries/queries'

import BookDetails from './BookDetails'

class BookList extends Component {
  constructor(props){
    super(props)
    this.state={
        selected : null
      }

  }
displayBooks(){
  const data = this.props.data;
  if(data.loading){
    return (<div>loading Books ...</div>)
  }
  else{

    return data.books.map(book => {
      return (
        <li key={book.id} onClick={(e)=>{this.setState({selected:book.id})}}>{book.name}</li>
      )
    })
  }
}
  render() {
    return (
      <div>
      <ul id="book-list">
        {this.displayBooks()}
      </ul>
      <BookDetails BookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooks)(BookList);
