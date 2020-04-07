import React from "react";
import "./index.css";
import TransactionList from './component/transactionList';
import AddTransaction from './component/addTransaction';
import Balance from './component/balance';
import Expanses from './component/incomeExpanses';
import { MDBCard, MDBCardBody,MDBCardTitle, MDBCol } from 'mdbreact';
import {GlobalProvider} from './Context/GlobalState';


function App() {
  
    return (
      <GlobalProvider>
      
          <div className="body">    
        <div className="container">
    
        <MDBCol className ="center" style={{ maxWidth: "32rem" }}>
          <MDBCard style={{backgroundColor:'#f5f5f5'}}>
         
            <MDBCardBody>
            <MDBCardTitle className='font-weight-bold indigo-text'>Expanse tracker app</MDBCardTitle>
            <Balance/>
            <hr></hr>
            <Expanses/>
            <hr></hr>
            <TransactionList/>
            <hr></hr>
            <AddTransaction/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </div>
        </div>
       </GlobalProvider>
    );
  
}

export default App;
