import React, { Component } from "react";
import API from "../../api";
import AddWeakness from "./AddWeakness";

class Weakness extends Component{
    constructor(props){
        super(props);
        this.state = {
            weakness: []
        }
    }

    async componentDidMount(){
        let weaknessList =await API.get("weakness/all");
        console.log(weaknessList.data);
        this.setState({weakness : weaknessList.data})
    }

    render(){
        let weaknesses = this.state.weakness;
        return(
            <React.Fragment>
                <div className="bg-secondary">
                    <h1>Weaknesses</h1> <hr />
                    <h2>Add A Weakness</h2>
                    <AddWeakness />
                    <h2>All Weaknesses</h2>
                    {
                        weaknesses.map((weakness) => 
                            <div>
                                <p>Name: {weakness.name}</p>
                                <p>Value: {weakness.value}</p>
                                <p>ID: {weakness.weaknessId}</p>
                                <hr  />
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Weakness;