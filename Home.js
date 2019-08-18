import React, {Component} from 'react';
import Login from './Login'
import fire from './config/fire';
import firebase from 'firebase';
import PeopleList from './people-list'; 
import AddPersonForm from './add-person';
import ListQuery from './Query';
import ReactTable from 'react-table';
import { cpus } from 'os';
import 'react-table/react-table.css';
import YupForm from "./yup-add-person";
import CreateToDoList from "./CreateToDoList";




class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state ={
            userName: null
        }
        
    }
    
    
    logout(){
        fire.auth().signOut();
    }
    componentDidMount(){
        firebase
        .firestore()
        .collection('Users')
        .doc("dtcZeCRnGdM823H8cqQ8IXuJLG53").get().then(function(doc){
            if (doc.exists){
                
                var name = doc.data().userName;
                // TODO: how to pass the "name" variable to a render
                
                return name
                
            }
        }) 
        
    }
   
   
    render() {
        
        return (
           <div>
               <h1>Datasy</h1>
               <h3>{this.retrireveName}</h3>
               <AddPersonForm />
               <CreateToDoList/>
                <YupForm />
               <PeopleList /> 
            
               
               <button onClick = {this.logout}>Logout</button>
            </div>
        );
      }
}
export default Home;