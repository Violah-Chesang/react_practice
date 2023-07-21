import React, { Component } from "react";
import API from '../../api';

class AddStrength extends Component{
    constructor(props){
        super(props);
        this.state = {
            info : []
        };
    }

    addStrength =async (event) => {
        event.preventDefault();
        let newInfo = {
            name : event.target.name.value,
            value : event.target.value.value,
            strengthId: event.target.id.value
        } 
              
        const newRecord = await API.post('strength/add', newInfo);
        console.log(newRecord);

    }


    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.addStrength}>
                    <label>Name: </label>
                    <input type="text" name="name" /> <br />

                    <label>Value: </label>
                    <input type="number" name="value" /><br />

                    <label>ID: </label>
                    <input type="text" name="id" /><br />
                    
                    <button>Add</button>
                </form>
            </React.Fragment>
        )
    }
}
export default AddStrength;