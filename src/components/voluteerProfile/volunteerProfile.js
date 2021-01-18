import React, { Component } from 'react';
import ImageAvatars from './ImageAvatars';
import MyEvents from './MyEvents';

class volunteerProfile extends Component {
    state = { 
        id: "",
        name :"",
        dp : "",
        email:"",
        events: [],
        skils:[],
        connections:[]
     }

     componentDidMount(){
         //inject all data to viewing volunteer profiles
        let id = this.props.match.params.vId;
        // get all deatails of given ID
        const detailState = {
            id: id,
            name :"Tishan kamal Perera D.Y.K",
            dp : "/assets/static/images/profile/1.jpg",
            email:"tishanperera.18@cse.mrt.ac.lk",
            events: [
                {id: 1, title:"Walk for Homeless", position: "Accountant", currentStatus: "In-Progress", img:"/assets/static/images/events/eventSample.jfif"},
                {id: 2, title:"Neighbourhood Love", position: "Team-Lead", currentStatus: "In-Progress", img:"/assets/static/images/events/eventSample.jfif"},
                {id: 3, title:"Smieys", position: "Finance Manger", currentStatus: "Completed", img:"/assets/static/images/events/eventSample.jfif"},
                {id: 4, title:"Donation", position: "Consultant", currentStatus: "Completed", img:"/assets/static/images/events/eventSample.jfif"},
            ],
            skils:["Time management", "Accounting", "Finance", "LeaderShip"],
            connections:[
                {id : 6, name: "Thisara Perera", profile: "/assets/static/images/profile/1.jpg"},
                {id : 7, name: "Kusal Perera", profile: "/assets/static/images/profile/1.jpg"},
                {id : 8, name: "Kamal", profile: "/assets/static/images/profile/1.jpg"},
                {id : 9, name: "Isure perera", profile: "/assets/static/images/profile/1.jpg"},
            ]
        }
        this.setState(detailState);
     }
    render() { 
        return (
            <div>
                <ImageAvatars dp={this.state.dp}/>
                <h1 className="vCircleProfile">{this.state.name}</h1>
                <p className="vCirclemail">{this.state.email}</p>
                <MyEvents events={this.state.events}/>
            </div>
        );
    }
}
 
export default volunteerProfile;