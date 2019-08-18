import React, { Component } from 'react';
import fire from './config/fire';
import firebase from 'firebase';

const Form = require('react-formal')
const { object, string, number, date } = require('yup')

const modelSchema = object({
  name: object({
    first: string().required('Please enter a first name'),
    last: string().required('Please enter a surname'),
  }),

  dateOfBirth: date().max(new Date(), "Selected date is in the future"),

  gender: string()
    .required('Please select gender'),
})


class YupForm extends Component{
    render(){
        return(
        <Form schema={modelSchema} defaultValue={modelSchema.default()}>
          <div>
            <label>Name</label>
      
            <Form.Field name="name.first" placeholder="First name" />
            <Form.Field name="name.last" placeholder="Surname" />
      
            <Form.Message
              for={['name.first', 'name.last']}
              className="validation-error"
            />
          </div>
      
          <label>Date of Birth</label>
          <Form.Field name="dateOfBirth" />
          <Form.Message for="dateOfBirth" className="validation-error" />
      
          <label>Gender</label>
          <Form.Field name="colorId" as="select">
            <option value={null}>Select gender</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
        
          </Form.Field>
          <Form.Message for="colorId" className="validation-error" />
      
          <Form.Submit type="submit">Submit</Form.Submit>
        </Form>
        )}
      



}
export default YupForm;