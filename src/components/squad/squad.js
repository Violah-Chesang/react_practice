import React, { Component } from "react";
import API from "../../api";
import AddSquad from "./AddSquad";

class Squad extends Component{
    constructor(props){
        super(props);
        this.state = {
            squads: []
        }
    }
    // when the page loads, display the squad list
    async componentDidMount(){
        let squadList =await API.get("squad/all");
        console.log(squadList.data);
        this.setState({squads : squadList.data})
    }

    render(){
        let squads = this.state.squads;
        return(
            <React.Fragment>
                <div className="bg-danger">
                    <h1>Squads</h1> <hr />
                    <AddSquad />
                    {
                        squads.map((squad) => 
                            <div>
                                <p>Name: {squad.name}</p>
                                <p>Cause: {squad.cause}</p>
                                <p>Hero Max No.: {squad.heroMaxNo}</p>
                                <p>ID: {squad.squadId}</p>
                                <hr  />
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Squad;