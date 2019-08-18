import React, {useState} from 'react';
import firebase from 'firebase';

const AddPersonForm = ()=>{
  
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [ChineseName, setChineseName] = useState();
    const [HKID, setHKID] = useState();
    const [Gender, setGender] = useState();
    const [PhoneNumber, setPhoneNumber] = useState();
    const [Address, setAddress] = useState();
    const [EmploymentStatus, setEmpoymentStatus] = useState();
    const [RelativeName, setRelativeName] = useState();
    const [RelativePhoneNumber, setRelativePhoneNumber] = useState();
    const [Remarks, setRemarks] = useState();


    function onSubmit(e){
        e.preventDefault()
        firebase
        .firestore()
        .collection('Person')
        .add({
            FirstName,
            LastName,
            ChineseName,
            HKID,
            Gender,
            PhoneNumber,
            Address,
            EmploymentStatus,
            RelativeName,
            RelativePhoneNumber,
            Remarks
        }).then(()=>{
        setFirstName(" ")
        setLastName(" ")
        setChineseName(" ")
        setHKID(" ")
        setGender(" ")
        setPhoneNumber(" ")
        setAddress(" ")
        setEmpoymentStatus(" ")
        setRelativeName(" ")
        setRelativePhoneNumber(" ")
        setRemarks(" ")
        })
    }
    

    return(
        <form onSubmit={onSubmit}>
            <h3>Add a person into the database</h3>
            <div>
                <label>First Name</label>
                <input type = "text" value={FirstName} onChange={e=>setFirstName(e.currentTarget.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input type = "text"value={LastName} onChange={e=>setLastName(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Chinese Name</label>
                <input type = "text"value={ChineseName} onChange={e=>setChineseName(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Gender</label>
                <input type = "text"value={Gender} onChange={e=>setGender(e.currentTarget.value)}/>
            </div>
            <div>
                <label>HKID</label>
                <input type = "text"value={HKID} onChange={e=>setHKID(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type = "text"value={PhoneNumber} onChange={e=>setPhoneNumber(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Address</label>
                <input type = "text"value={Address} onChange={e=>setAddress(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Employment Status</label>
                <input type = "text"value={EmploymentStatus} onChange={e=>setEmpoymentStatus(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Relative's Name</label>
                <input type = "text"value={RelativeName} onChange={e=>setRelativeName(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Relative's Phone Number</label>
                <input type = "text"value={RelativePhoneNumber} onChange={e=>setRelativePhoneNumber(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Remarks</label>
                <input type = "text"value={Remarks} onChange={e=>setRemarks(e.currentTarget.value)}/>
            </div>
        
            <button>Save</button>
        </form>
    )
}
export default AddPersonForm; 