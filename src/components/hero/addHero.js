import React, { Component } from 'react';
import API from '../../api';

class AddHero extends Component{
    constructor(){
        super();
        this.state = {
            strength : [],
            weakness: [],
            strengthValue : '',
            weaknessValue : ''
        }
    }
    async componentDidMount(){
        let strengthList = await API.get('strength/all');
        this.setState({strength : strengthList.data})

        let weaknessList = await API.get('weakness/all');
        this.setState({weakness : weaknessList.data});
    }

    handleStrengthSelection = (e) => {
        // Strength
        let strengthOptionValue = e.target.value;
        this.setState({strengthValue : strengthOptionValue})
    }
        //Weakness
    handleWeaknessSelection = (e) => {
        let weaknessOptionValue = e.target.value;
        this.setState({weaknessValue : weaknessOptionValue})       
    }

    addhero =async (event) => {
        event.preventDefault();
        let body = {
            heroId : event.target.heroId.value,
            name : event.target.name.value,
            age: parseInt(event.target.age.value),
            strength : this.state.strengthValue,
            weakness : this.state.weaknessValue,
            squadId : event.target.squadId.value,
        } 

              
        const newRecord = await API.post('hero/add', body);
        console.log(newRecord.data);
    }


    render(){
        const strengths = this.state.strength;
        const weaknesses = this.state.weakness;
        return(
            <React.Fragment>
                <form onSubmit={this.addhero}>
                    <label htmlFor='heroId'>ID: </label>
                    <input type="text" name="heroId" id="heroId"/> <br />

                    <label htmlFor='name'>Name: </label>
                    <input type="text" name="name" id="name" /> <br />

                    <label htmlFor='age'>Age: </label>
                    <input type="number" name="age" id="age" /><br />
                    {/* Select strength */}
                    <label htmlFor='strength'>Strength: </label>
                    <select className='form-select mt-4' onSelect={this.handleStrengthSelection}>
                        {
                            strengths.map((strength) =>
                                    <option key={strength.name} value={strength.name}>{strength.name}</option>
                            )
                        }
                    </select>
                    {/* Select weakness */}
                    <label htmlFor='weakness'>Weakness: </label>                    
                    <select className='form-select mt-4' onSelect={this.handleWeaknessSelection}>
                        {
                            weaknesses.map((weakness) =>
                                    <option value={weakness.name}>{weakness.name}</option>
                            )
                        }
                    </select>

                    <label htmlFor='squadId'>Squad Id: </label>
                    <input type="text" name="squadId" id="squadId" /> <br />
                    <button>Add Hero</button>
                </form>
            </React.Fragment>
        )
    }
}
export default AddHero;