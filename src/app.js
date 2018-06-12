import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/header';
import {Grid, Row, Col} from 'react-bootstrap';
import List from './components/list';
const clienteArray = [ "Uno", "Dos", "Tres"];
class VSLoyaltyPoints extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        try{
            // const clients = localStorage.getItem('clients');
            // const clientsArray = JSON.parse(clients);
            
        } catch(e){

        }      
    }   
}

const jsx = (
    <div>
        <Header />
        <Grid>
            <Row className="show-grid">
                <Col xs={6} md={4}>
                    <List clientsArray= {clienteArray}/>
                </Col>
            </Row>
        </Grid>
    </div>
);


ReactDOM.render(jsx, document.getElementById('app'));  