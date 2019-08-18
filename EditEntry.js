import React, {Component} from 'react';
import firebase from 'firebase';
import PeopleList from './people-list';

class EditEntry extends Component{
    constructor(props){
        super(props)
        
        this.state={
            ID: this.props.ID,
            FirstName: this.props.FirstName,
            LastName: this.props.LastName,
            ChineseName: this.props.ChineseName,
            HKID: this.props.HKID,
            Gender: this.props.Gender,
            PhoneNumber: this.props.PhoneNumber,
            Address: this.props.Address,
            EmploymentStatus: this.props.EmploymentStatus,
            RelativeName: this.props.RelativeName,
            RelativePhoneNumber: this.props.RelativePhoneNumber,
            Remarks: this.props.Remarks,
            isInEditMode:false
        }
    };
    
    updateComponent=(event)=>{
        event.preventDefault()
      
        
        this.setState({
            isInEditMode:!this.state.isInEditMode 
        })
        
        
        firebase
        .firestore()
        .collection('Person')
        .doc(this.props.ID)
        .update({
            FirstName:this.state.FirstName,
            LastName:this.state.LastName,
            ChineseName:this.state.ChineseName,
            HKID: this.state.HKID,
            Gender:this.state.Gender,
            PhoneNumber:this.state.PhoneNumber,
            Address:this.state.Address,
            EmploymentStatus:this.state.EmploymentStatus,
            RelativeName:this.state.RelativeName,
            RelativePhoneNumber:this.state.RelativePhoneNumber,
            Remarks:this.state.Remarks})
    }

    changeEditMode =()=>{
        this.setState({
            isInEditMode:!this.state.isInEditMode 
        })
    }

    
      handleFirstNameChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.FirstName]: event.target.value,
            FirstName: event.target.value
        })
    }
    handleLastNameChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.LastName]: event.target.value,
            LastName: event.target.value
        })
    }
    handleChineseNameChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.ChineseName]: event.target.value,
            ChineseName: event.target.value
             
        })
    }
    handleHKIDChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.HKID]: event.target.value,
            HKID: event.target.value
             
        })
    }
    handleGenderChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.Gender]: event.target.value,
            Gender: event.target.value

        })
    }
    handlePhoneNumberChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.PhoneNumber]: event.target.value,
            PhoneNumber: event.target.value
             
        })
    }
    handleAddressChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.Address]: event.target.value,
            Address: event.target.value
             
        })
    }
    handleEmploymentStatusChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.EmploymentStatus]: event.target.value,
            EmploymentStatus: event.target.value
             
        })
    }
    handleRelativeNameChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.RelativeName]: event.target.value,
            RelativeName: event.target.value
        })
    }
    handleRelativePhoneNumberChange=(event)=> {
        event.preventDefault();
         this.setState({
            [event.target.RelativePhoneNumber]: event.target.value,
            RelativePhoneNumber: event.target.value
        })
    }
    handleRemarksChange=(event)=> {
        event.preventDefault();
         this.setState({ 
            [event.target.Remarks]: event.target.value,
            Remarks: event.target.value
        })
    }

    renderEditView=()=>{
        return(
        <span>
                <div>
                    <label>First Name</label>
                <input
                    type = "text"
                    value={this.state.FirstName}
                    onChange={this.handleFirstNameChange}/>   
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type = "text"
                    value={this.state.LastName}
                    onChange={this.handleLastNameChange}/>   
            </div>
            <div>
                <label>Chinese Name</label>
                <input
                    type = "text"
                    value={this.state.ChineseName}
                    onChange={this.handleChineseNameChange}/>   
            </div>
            <div>
                <label>HKID</label>
                <input
                    type = "text"
                    value={this.state.HKID}
                    onChange={this.handleHKIDChange}/>   
            </div>
            <div>
                <label>Gender</label>
                <input
                    type = "text"
                    value={this.state.Gender}
                    onChange={this.handleGenderChange}/>   
            </div>
            <div>
                <label>PhoneNumber</label>
                <input
                    type = "text"
                    value={this.state.PhoneNumber}
                    onChange={this.handlePhoneNumberChange}/>   
            </div>
            <div>
                <label>Address</label>
                <input
                    type = "text"
                    value={this.state.Address}
                    onChange={this.handleAddressChange}/>   
            </div>
            <div>
                <label>Employment Status</label>
                <input
                    type = "text"
                    value={this.state.EmploymentStatus}
                    onChange={this.handleEmploymentStatusChange}/>   
            </div>
            <div>
                <label>Relative Name</label>
                <input
                    type = "text"
                    value={this.state.RelativeName}
                    onChange={this.handleRelativeNameChange}/>   
            </div>     
            <div><label>Relative's Phone Number</label>
                <input
                    type = "text"
                    value={this.state.RelativePhoneNumber}
                    onChange={this.handleRelativePhoneNumberChange}/>   
            </div>     
            <div>
            <label>Remarks</label>
                <input
                    type = "text"
                    value={this.state.Remarks}
                    onChange={this.handleRemarksChange}/>   
            </div>
            <button onClick ={this.changeEditMode}>X</button>
            <button onClick ={this.updateComponent}>OK</button>
        </span> 
        )
    }

    renderDefaultView=()=>{
        return(
            <div >
                <ul>
                <label> First Name</label>
                <li onDoubleClick = {this.changeEditMode}>
                        {this.state.FirstName}
                    </li>
                    <label>Last Name</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.LastName}
                    </li><label>Chinese Name</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.ChineseName}
                    </li><label>HKID</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.HKID}
                    </li><label>Gender</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.Gender}
                    </li><label>Phone Number</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.PhoneNumber}
                    </li><label>Address</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.Address}
                    </li><label>Relative Name</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.RelativeName}
                    </li><label>Relative Phone Number</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.RelativePhoneNumber}
                    </li><label>Employment Status</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.EmploymentStatus}
                    </li><label>Remarks</label>
                    <li onDoubleClick = {this.changeEditMode}>
                        {this.state.Remarks}
                    </li>
                </ul>
                <button onClick ={this.changeEditMode}>Edit</button>
            </div>
            
            )}


    render()
        {return this.state.isInEditMode ?
            this.renderEditView():this.renderDefaultView()    
        }  
}
export default EditEntry;



