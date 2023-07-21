import React, { Component } from "react";
import API from '../../api';
import Strength from "./strength";

class DeleteStrength extends Component{
    constructor(props){
        super(props);
        this.state = {
            info : []
        };
    }
    async componentDidMount(){
        const newList =await API.get('strength/all');
        console.log(newList.data)
        this.setState({
            info:newList.data
        })
    }    
    render(){
        let info = this.state.info
        return(
            <React.Fragment>
                 {
                        info.map((oneInfo) =>
                            <div>
                                <p>Name: {oneInfo.name}</p>
                                <p>Value: {oneInfo.value}</p>
                                <p>Id: {oneInfo.strengthId}</p>
                                <button>Delete</button>
                                <hr />
                            </div>
                        )                       
                    }
            </React.Fragment>
        )
    }
}
export default DeleteStrength;