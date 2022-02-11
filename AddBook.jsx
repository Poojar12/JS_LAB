import React, {Component} from "react";
import axios from "axios";

class AddBook extends Component{
    constructor(props){
        super(props)
        this.state = {
            ISBN:"",
            name:"",
            price:"",
            edition:"",
            isInStock:""
        }
    }

    handleOnChange = (event,id)=>{
        this.setState({[`${id}`]:event.target.value})
    }

    saveBook = ()=>{

        const book = {
            ISBN:this.state.ISBN,
            name:this.state.name,
            price:this.state.price,
            edition:this.state.edition,
            isInStock:this.state.isInStock === "yes" ? true:false
        }
        axios.post("http://localhost:5000/api/book",book)
        .then((res)=>{
            console.log(res.data);
            this.props.history.push("/")
        })
    }

    render(){
        return(
            <>
            <h1>Add Book</h1>
            <div >
            <label>
                ISBN :
                <input type="text" value={this.state.ISBN} onChange={(event)=>this.handleOnChange(event,"ISBN")} />
            </label>
            <br />
            <label>
                name :
                <input type="text" value={this.state.name} onChange={(event)=>this.handleOnChange(event,"name")} />
            </label>
            <br />
            <label>
                price :
                <input type="text" value={this.state.price} onChange={(event)=>this.handleOnChange(event,"price")} />
            </label>
            <br />
            <label>
                edition :
                <input type="text" value={this.state.edition} onChange={(event)=>this.handleOnChange(event,"edition")} />
            </label>
            <br />
            <label>
                IsInStock :
                <select value={this.state.isInStock} onChange={(event)=>this.handleOnChange(event,"isInStock")}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>
            <br />

            <button onClick={this.saveBook}>Save</button>

            </div>
            </>
        )
    }
}

export default AddBook