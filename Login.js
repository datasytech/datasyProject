import React, {Component} from 'react';
import fire from './config/fire';
import './App.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            email:'',
            password:''
        }
    }
   
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error)=>{
        console.log(error);
      });
      }
      signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error)=> {console.log(error);}
        )
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
        <div className="login">
            <header className ="header">
                <h1>Datasy</h1>
            </header>
            <div className = "body">
                <p className = "paragraph"><h4>Who are we?</h4>
                Lorem ipsum
                </p>
                <p  className = "paragraph"><h4>FAQ</h4>
                    <ul>
                        <li>
                            lorem ipsum
                        </li>
                        <li>
                            lorem ipsum
                        </li>
                    </ul>
                </p>
                <p  className = "paragraph"><h4>Data privacy</h4>
                Lorem ipsum
                </p>
                <form className = "login-form">
                    <div className="form-group">
                        <label for="InputEmail" className = "emailLabel">Email address</label>
                        <input className = "input-row" value={this.state.email} onChange={this.handleChange} type="email" name="email"  id="InputEmail" placeholder="Enter email"/>
                        
                    </div>
                    <div className="form-group">
                            <label for="InputPassword" className = "passwordLabel">Password</label>
                            <input className="input-row" value={this.state.password} onChange={this.handleChange} type="password" name="password"  id="InputPassword" placeholder="Password" />
                    </div>
                    <button type = "submit" onClick = {this.login} class = "btn btn-primary">Login</button>
                    <button onClick = {this.signUp} style = {{marginLeft:'25px'}} className ="btn btn-success"> Sign up</button>
                    
                </form>
            </div>
            <footer className = "footer">
                    <p>
                        <h3>Contact us:</h3>
                    </p>
                    <p>
                        <h3>Our partners:</h3>
                    </p>
                    <p>
                        <h3>Support and maintance</h3>
                    </p>  
                    
            </footer>
            <end className="end">
            <p> ©Datasy 2019</p>  
            </end>
     </div>
        );
      }

}
export default Login;