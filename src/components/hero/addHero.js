import React, { Component } from 'react';
import API from '../../api';

class AddHero extends Component{
    constructor(){
        super();
    }

    addhero =async (event) => {
        event.preventDefault();
        let body = {
            heroId : event.target.heroId.value,
            name : event.target.name.value,
            age: event.target.age.value,
            strength : event.target.strength.value,
            weakness : event.target.weakness.value,
            squadId : event.target.squadId.value,
        } 

              
        const newRecord = await API.post('hero/add', body);
        console.log(newRecord.data);

    }


    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.addhero}>
                    <label htmlFor='heroId'>ID: </label>
                    <input type="text" name="heroId" id="heroId"/> <br />

                    <label htmlFor='name'>Name: </label>
                    <input type="text" name="name" id="name" /> <br />

                    <label htmlFor='age'>Age: </label>
                    <input type="number" name="age" id="age" /><br />

                    <label htmlFor='strength'>Strength: </label>
                    <input type="text" name="strength" id="strength" /><br />
                    
                    <label htmlFor='weakness'>Weakness: </label>
                    <input type="text" name="weakness" id="weakness" /> <br />

                    <label htmlFor='squadId'>Squad Id: </label>
                    <input type="text" name="squadId" id="squadId" /> <br />
                    <button>Add Hero</button>
                </form>
            </React.Fragment>
        )
    }
}
export default AddHero;