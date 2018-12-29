import React, { Component } from 'react';
import {graphql,compose} from 'react-apollo';//bind react with apollo
import {addAuthor,addBookMutation,getBooks} from '../Queries/queries'



class AddBook extends Component {
  constructor(props){
    super(props)
    this.state={
      name : "",
      genre : "",
      authorId : ""
    }
  }
displayAuthors(){
  const data = this.props.addAuthor;
  if(data.loading){
    return (<option disabled>loading Authors ...</option>)
  }
  else{
    return data.authors.map(author => {
      return (
        <option key={author.id} value={author.id}>{author.name}</option>
      )
    })
  }
}
submitForm(e){
  e.preventDefault();
  this.props.addBookMutation({
    variables:{
      name : this.state.name,
      genre : this.state.genre,
      authorID : this.state.authorId
    },
    refetchQueries: [{ query: getBooks}]
  });
}
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={ (e)=>this.setState({name : e.target.value})} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={ (e)=>this.setState({genre : e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=>this.setState({authorId : e.target.value})}>
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>

            </form>
    );
  }
}
// export default compose(
//     graphql(addAuthor, { name: "addAuthor" }),
//     graphql(addBookMutation, { name: "addBookMutation" })
// )(AddBook);
export default compose(
  graphql(addAuthor,{name : "addAuthor"}),
  graphql(addBookMutation,{name : "addBookMutation"})
)(AddBook);
