import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/header';
import {Grid, Row, Col} from 'react-bootstrap';
import List from './components/list';
const clienteArray =[  {name: "Jordan Quesada", cardNumber: 1001, points: 15}, 
                       {name: "Jorge Castro", cardNumber: 1002, points: 10}, 
                       {name: "Arturo Trollo", cardNumber: 1003, points: 1}
                    ];
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