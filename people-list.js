import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {DeleteEntry} from './DeleteEntry';
import EditEntry from './EditEntry';
import { anyTypeAnnotation } from '@babel/types';
import ReactTable from 'react-table';
import { cpus } from 'os';
import 'react-table/react-table.css'




function useData(Key){


    const [people, setPeople] =useState([])


    useEffect(()=> {
     
    const unsuscribe =firebase
            .firestore()
            .collection('Person')
            .onSnapshot((snapshot) =>{
                const newPeople = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setPeople(newPeople)
            })
        return ()=> unsuscribe()
    },[])
    return people
}



const PeopleList = ()=>{
    const people =useData()
    console.log(people.id)
    
    const columns = [
        {Header: "First Name",
        accessor:"FirstName"},

        {Header: "Last Name",
        accessor:"LastName"},

        {Header: "Nick Name",
        accessor:"ChineseName"},

        {Header: "HKID",
        accessor:"HKID"},

        {Header: "Phone Number",
        accessor:"PhoneNumber"},

        {Header: "Address/Area",
        accessor:"Address"},

        {Header: "Gender",
        accessor:"Gender",
        filterable: false},

        {Header: "Employment Status",
        accessor:"EmploymentStatus",
        filterable: false},

        {Header: "Relative's Name",
        accessor:"RelativeName",
        filterable: false},

        {Header: "Relative's Phone Number",
        accessor:"RelativePhoneNumber",
        filterable: false},

        {Header: "Remarks",
        accessor:"Remarks",
        filterable: false},

        // {Header: '',  Cell: people => <DeleteEntry id={people.id} />}
     
    ]

    return (
        <div>
            <ReactTable
                columns ={columns}
                data ={people}
                filterable
                defaultPageSize={10}/>
        </div>
    )
}
export default PeopleList;