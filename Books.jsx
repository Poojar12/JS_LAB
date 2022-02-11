import React , {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

class Books extends Component{

    constructor(props){
        super(props)
        this.state = {
            books:[]
        }
    }

    componentDidMount(){
        this.getBooks()
    }

    getBooks = ()=>{
        axios.get("http://localhost:5000/api/book")
        .then((res)=>{this.setState({books:res.data.books});
    console.log(this.state.books)})
        .catch((err)=>console.log(err))

        
    }

    deleteItem = (id)=>{
        axios.delete(`http://localhost:5000/api/book/${id}`)
        .then((res)=>{
            console.log(res.data);
            this.getBooks()
        })
        .catch((err)=>console.log(err))

        
        
    }

    render(){
        
        return(
            <div>
            <h1>Book Info</h1>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edition</th>
                            <th>isInStock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map((book)=>{
                            
                            return(
                                <tr key={book.ISBN}>
                                    <td>{book.ISBN}</td>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                    <td>{book.edition}</td>
                                    <td>{book.isInStock ? "Yes" : "No"}</td>
                                    <td><span onClick={(event)=> this.deleteItem(book.ISBN)}>Delete</span></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to="/add/book"><button>Add Book</button></Link>
            </div>
        )
    }

}


export default Books