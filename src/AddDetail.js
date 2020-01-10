import React, {Component} from 'react'

class AddDetail extends Component{
    state = {
        name: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var name = document.getElementById("name");
        if(name.value!=="") {
            this.props.addDetail(this.state);
        }
        name.value ="";
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br></br><label htmlFor="name">Text: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <button>Add</button>
                </form>    
            </div>
        )
    }
}

export default AddDetail