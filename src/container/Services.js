import React,{Component} from "react";
import axios from "axios";
import { useResolvedPath } from "react-router-dom";

class Services extends React.Component{
    constructor(props){
     super(props);
     this.state = {
         services: "Hi I am Manojkumar",
     
        };

        this.state = {
            users:[],
            posts:[],
            albums:[],
        };
      this.updateState = this.updateState.bind(this);
      console.log(props);
    }
        updateState(){ 
            this.setState({ services: "I am a Web Developer"});
        }

        componentDidMount(){
            setTimeout(() => {
                this.setState({ services: "I am from KARIMNAGAR"});
            }, 4000);
            setTimeout(() => {
                this.setState({ services: "I am A former"});
            }, 6000);
            setTimeout(() => {
                this.setState({ services: "Thank you"});
            }, 8000);

            //api calls

            fetch('https://jsonplaceholder.typicode.com/users').then(
                (responce) => responce.json()
            ).then(
                  (responce)=>this.setState({users:responce})
            );
            axios.get('https://jsonplaceholder.typicode.com/posts').then(
                res=>{
                    this.setState({posts: res.data});
                }
            )
            axios.post('https://jsonplaceholder.typicode.com/albums').then(
                res=>{
                    this.setState({album:res.data});

                }
            )
        }
      
    render(){
        return(
            <>
            <h1>{ this.state.services}</h1>
            <button onClick={this.updateState}>Update State</button>
            <h3>Developed by : { this.props.developer}</h3>

            <h1>List of Users</h1>
            <ul>
                {this.state.users.map( (d)=>(
                    <li>{d.name}</li>
                ) )}
            </ul>

            <h1>List of email</h1>
            <ul>
                {this.state.users.map( (d)=>(
                    <li>{d.email}</li>
                ) )}
            </ul>

            <h1>List of their phone numbers</h1>
            <ul>
                {this.state.users.map( (d)=>(
                    <li>{d.phone}</li>
                ) )}
            </ul>
             
            <h1>List of their phone no</h1>
            <ul>
                {this.state.posts.map( (d)=>(
                    <li>{d.id}</li>
                ) )}
            </ul>

            <h1>List of Albums</h1>
            <ul>
                {this.state.albums.map( (d)=>(
                    <li>{d.title}</li>
                ) )}
            </ul>
            </>
        )
    }
}

export default Services;