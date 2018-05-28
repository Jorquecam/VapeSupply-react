import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/header';

class VSLoyaltyPoints extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        try{
            const clientes = localStorage.getItem('clientes');
            const clientesArray = JSON.parse(clientes);
        } catch(e){
           
    }
  
    
}
const jsx = (
    <div>
        <Header />
    </div>
);


ReactDOM.render(jsx, document.getElementById('app'));  