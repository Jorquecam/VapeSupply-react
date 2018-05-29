import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/header';
import List from './components/list';

class VSLoyaltyPoints extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        try{
            // const clients = localStorage.getItem('clients');
            // const clientsArray = JSON.parse(clients);
            const clientsArray = [ "Uno", "Dos", "Tres"];
        } catch(e){

        }      
    }   
}

const jsx = (
    <div>
        <Header />
        <List clientsArray= {clientsArray}/>
    </div>
);


ReactDOM.render(jsx, document.getElementById('app'));  