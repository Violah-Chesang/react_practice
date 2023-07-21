import React, { Component } from "react";
import API from "../../api";
import AddStrength from "./AddStrength";
import DeleteStrength from "./DeleteStrength";

class Strength extends Component{
    constructor(props){
        super(props);
        this.state = {
            strength : []
        };
    }

    async componentDidMount(){
        let strengthList = await API.get("strength/all");
        // console.log(strengthList);
        this.setState(
            {strength : strengthList.data}
        )
    }


    render(){
        let strengths = this.state.strength;
        return(
            <React.Fragment>
                <div className="bg-light text-dark">
                <h1>Strengths</h1>
                    {
                        strengths.map((strength) =>
                            <div>
                                <p>Name: {strength.name}</p>
                                <p>Value: {strength.value}</p>
                                <p>Id: {strength.strengthId}</p>
                                <hr />
                            </div>
                        )                       
                    }
                    <h2>Add A Strength</h2>
                    <AddStrength />
                    {/* <h2>Delete A Strength</h2>
                    <DeleteStrength /> */}
                </div>
            </React.Fragment>
        )
    }
}
export default Strength;