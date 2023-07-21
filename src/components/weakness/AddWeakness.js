import React, { Component } from "react";
import API from "../../api";

class AddWeakness extends Component{
    constructor(){
        super();
    }

    AddWeakness =async (event) => {
        event.preventDefault();
        let body = {
            name : event.target.name.value,
            value : event.target.value.value,
            weaknessId : event.target.weaknessId.value
        }
        let res =await API.post('weakness/add', body);
        console.log(res.data);
    }

    

    render(){
        return(
            <React.Fragment>
                <h2>Add A Weakness</h2>
                <form onSubmit={this.AddWeakness}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" /> <br />

                    <label htmlFor="value">Value: </label>
                    <input type="number" name="value" id="value" /> <br />
                    
                    <label htmlFor="weaknessId">ID</label>
                    <input type="text" name="weaknessId" id="weaknessId" /> <br />
                    
                    <button>Add Weakness</button>

                </form>
            </React.Fragment>
        )
    }
}
export default AddWeakness;