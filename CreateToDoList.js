import React, {useState}from 'react';
import fire from './config/fire';
import firebase from 'firebase';

const Form = require('react-formal')
const { object, string, number, date } = require('yup')

const modelSchema = object({
  
    taskName: string().required('Please enter a task name'),
    taskDetails: string().required('Please enter task details'),
  

  startDate: date().max(new Date(), "Selected date is in the future"),

  taskProgress: string()
    .required('state the progress'),
})

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


const CreateToDoList =()=>{

    const [taskName, setTaskName] = useState();
    const [taskDetails, setTaskDetails] = useState();
    const [taskDate, setTaskDate] = useState();
    const [taskProgress, setTaskProgress] = useState();

        function onSubmit(e){
            if(e.preventDefault) 
            {
              e.preventDefault();
            }
            else
            {
               e.returnValue = false;
            }
            firebase
            .firestore()
            .collection('Task')
            .add({
                taskName, 
                taskDetails,
                taskDate, 
                taskProgress
            
            }).then(()=>{
                setTaskName(" ")
                setTaskDetails(" ")
                setTaskDate(" ")
                setTaskProgress(" ")
            })
        }
        console.log(taskName, taskDetails, taskDate, taskProgress)
        
    
        return(
        <Form schema={modelSchema} defaultValue={modelSchema.default()} onSubmit={onSubmit}>
          <div>
            <label>Task</label>
      
            <Form.Field name="taskName" placeholder="Task name" value={taskName} onChange={e=>setTaskName(e.currentTarget.value)} />
            <Form.Message  for='taskName'className="validation-error" />
            <Form.Field name="taskDetails" placeholder="Task Details" value={taskDetails} onChange={e=>setTaskDetails(e.currentTarget.value)}/>
            <Form.Message  for="taskDetails" className="validation-error" />
        
          </div>
      
          <label>Start Date</label>
          <Form.Field name="startDate"  value = {taskDate} onChange={e=>setTaskDate(e.currentTarget.value)} />
          <Form.Message for="startDate" className="validation-error" />
      
          <label>Progress</label>
          <Form.Field name="taskProgress" as="select" value = {taskProgress} onChange={e=>setTaskProgress(e.currentTarget.value)} >
            <option value={null}>Select</option>
            <option value={"Active"}>Active</option>
            <option value={"Completed"}>Completed</option>
            
          </Form.Field>
          <Form.Message for="taskProgress" className="validation-error" />
      
          <Form.Submit type="submit">Submit</Form.Submit>
        </Form>
        )
}
export default CreateToDoList;