import React, { Component } from "react";
import API from "../../api";
import AddHero from "./addHero";

class Hero extends Component{
    constructor(props){
        super(props);
        this.state = {
            heroes: [
                {
                    "_id": "649176419777cd33eda6b982",
                    "heroId": "hro002",
                    "name": "King",
                    "age": 47,
                    "strength": "Energetic",
                    "weakness": "Lazy",
                    "deleted": false,
                    "assigned": false,
                    "squadId": "sqd002",
                    "__v": 0
                },
                {
                    "_id": "64917b5ebdd0967228c8beac",
                    "heroId": "hro001",
                    "name": "Bravious",
                    "age": 27,
                    "strength": "Loving",
                    "weakness": "Distracted",
                    "deleted": false,
                    "assigned": false,
                    "squadId": "sqd002",
                    "__v": 0
                },
                {
                    "_id": "64917ca8c27345625e836924",
                    "heroId": "hro003",
                    "name": "Prince",
                    "age": 19,
                    "strength": "Persistence",
                    "weakness": "Arrogant",
                    "deleted": false,
                    "assigned": false,
                    "squadId": "sqd001",
                    "__v": 0
                },
                {
                    "_id": "64917cddc27345625e836929",
                    "heroId": "hro004",
                    "name": "Peace",
                    "age": 23,
                    "strength": "Loving",
                    "weakness": "Distracted",
                    "deleted": false,
                    "assigned": false,
                    "squadId": "sqd001",
                    "__v": 0
                },
                {
                    "_id": "64917d9bc27345625e83692f",
                    "heroId": "hro005",
                    "name": "Wisdom",
                    "age": 23,
                    "strength": "Knowledgable",
                    "weakness": "Short Tempered",
                    "deleted": false,
                    "assigned": false,
                    "squadId": "sqd003",
                    "__v": 0
                },
                {
                    "_id": "64917e62c27345625e836934",
                    "heroId": "hro006",
                    "name": "Cheer",
                    "age": 30,
                    "strength": "Keen",
                    "weakness": "Short Tempered",
                    "deleted": false,
                    "assigned": false,
                    "squadId": "sqd003",
                    "__v": 0
                }
            ],
        }
    }
    //when the page loads, display the squad list
    async componentDidMount(){
        let heroesList =await API.get("hero/all");
        // console.log(heroesList.data);
        this.setState({heroes : heroesList.data})
    }



    render(){
        let heroes = this.state.heroes;
        return(
            <React.Fragment>
                <div className="bg-success">
                    <h1>Heroes</h1> <hr />
                    <h2>Add A Hero</h2>
                    <AddHero />
                    {
                        heroes.map((hero) => 
                            <div>
                                <p>Name: {hero.name}</p>
                                <p>Age: {hero.age}</p>
                                <p>Strength: {hero.strength}</p>
                                <p>Weakness: {hero.weakness}</p>
                                <p>Assigned: {hero.assigned}</p>
                                <p>Squad: {hero.squadId}</p>
                                <p>ID: {hero.heroId}</p>
                                <hr  />
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Hero;