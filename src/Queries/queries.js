import {gql} from 'apollo-boost';

const addAuthor = gql`
  {
    authors{
      name
      id
    }
  }
`
const getBooks = gql`
  {
    books{
      name
      id
    }
  }
`
const addBookMutation = gql`
  mutation($name:String!,$genre:String!,$authorID:ID!){
      addBook(name:$name,genre:$genre,authorID:$authorID){
        name
        id
      }
  }
`
const getBookQuery = gql`
query($id:ID){
  book(id:$id){
    name
    genre
    author{
      name
      age
      id
      books{
        name
        id
      }
    }
  }
}
`
export {addAuthor,getBooks,addBookMutation,getBookQuery};
