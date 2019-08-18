import React, {Component} from 'react';
import firebase from 'firebase';

export class DeleteEntry extends Component{
    constructor(props){
        super(props)
        this.onDelete=this.onDelete.bind(this);
    }


    onDelete(e){
        e.preventDefault();
        
         console.log(this.props.id);
        firebase
        .firestore()
        .collection('Person')
        .doc(this.props.id)
        .delete()
    }

    render(){
        return(
            <button onClick={this.onDelete}>Delete</button>
        )
    }
}
