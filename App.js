import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import Login from './Login';
import Home from './Home';
import ReactTable from 'react-table';
import { cpus } from 'os';
import 'react-table/react-table.css'


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    user:{},
  }
 }

  
  componentDidMount(){
    this.authListener();
  }

  authListener(){
  fire.auth().onAuthStateChanged((user) => {
    
    if(user){
      this.setState({user});
      //localStorage.setItem('user', us)
    } else {
      this.setState({user:null});
      //localStorage.removeItem('user')
    }
  });
 }
  render() {
    return (
      <div className="App">
          {this.state.user ? (<Home  />):(<Login/>)}
      </div>
    );
  }
}
export default App;