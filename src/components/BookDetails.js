import React, { Component } from 'react';
import {graphql} from 'react-apollo';//bind react with apollo
import {getBookQuery} from '../Queries/queries'

class BookDetails extends Component{
  displayBookdetails(){
  const {book} = this.props.data;
  if(book){
           return(
               <div>
                   <h2>{ book.name }</h2>
                   <p>{ book.genre }</p>
                   <p>{ book.author.name }</p>
                   <p>All books by this author:</p>
                   <ul className="other-books">
                       { book.author.books.map(item => {
                         console.log("item Details"+item.id)
                           return <li key={item.id}>{ item.name }</li>
                       })}
                   </ul>
               </div>
           );
       } else {
           return( <div>No book selected...</div> );
       }
  }

  render(){
   console.log(this.props);
    return(
      <div id="book-details">
    <p> Book Details</p>
    {this.displayBookdetails()}
      </div>
    )
  }
}

//export default graphql(getBookQuery)(BookDetails);
export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.BookId
            }
        }
    }
})(BookDetails);
