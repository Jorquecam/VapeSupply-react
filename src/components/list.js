import React from 'react';
import ReactDOM from 'react-dom';
import Client from './client';
import {ListGroup} from 'react-bootstrap';

export default class List extends React.Component {
    render(){
        return(
            <ListGroup>
                {
                    this.props.clientsArray.map((client) => <Client key= {client} clientText= {client}/>)
                }
            </ListGroup>
        );
    }
}