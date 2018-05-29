import React from 'react';
import ReactDOM from 'react-dom';
import {ListGroupItem} from 'react-bootstrap';

export default class Client extends React.Component{
    render(){
        return(
            <ListGroupItem>
            {this.props.clientText}
            </ListGroupItem>
        );
    }
}