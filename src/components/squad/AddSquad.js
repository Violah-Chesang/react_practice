import React, { Component } from "react";
import API from "../../api";

class AddSquad extends Component{
    constructor(){
        super();
    }

    addSquad = async (event) => {
        event.preventDefault();
        let body = {
            squadId : event.target.squadId.value,
            name : event.target.name.value,
            heroMaxNo : event.target.heroMaxNo.value,
            cause : event.target.cause.value,
        }
        let res =await API.post('squad/add', body);
        console.log(res.data);
    }

    render(){
        return(
            <React.Fragment>
                <h2>Add A Squad</h2>
                <form onSubmit={this.addSquad}>
                        <label htmlFor="squadId">ID: </label>
                        <input type="text" name="squadId" id="squadId" /> <br />

                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" /> <br />

                        <label htmlFor="heroMaxNo">Hero Max No.: </label>
                        <input type="number" name="heroMaxNo" id="heroMaxNo" max={5}/> <br />
                        
                        <label htmlFor="cause">Cause: </label>
                        <input type="text" name="cause" id="cause" /> <br />
                        
                        <button>Add Squad</button>

                </form>

            </React.Fragment>
        )           
        
    }
}
export default AddSquad;