import React from 'react';
import ReactDOM from 'react-dom';
import {ListGroupItem} from 'react-bootstrap';

export default class Client extends React.Component{
    render(){
        const data = {card: this.props.clientText.cardNumber, name:this.props.clientText.name}
        return(
            <ListGroupItem onClick = {this.alertClicked.bind(this)}>
            { data.card + " - " + data.name}
            </ListGroupItem>
        );
        function alertClicked(data) {
            alert('You clicked the ' + data.props.clientText.name);
          }
    }
    
}
