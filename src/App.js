import React from "react";
import "./index.css";
import Transaction from './component/transactionList';
import AddTransaction from './component/addTransaction';
import  Header from './component/header';
import Balance from './component/balance';
import Expanses from './component/incomeExpanses';
import { MDBCard, MDBCardBody, MDBCol } from 'mdbreact';
function App() {
  
    return (
      <div  className="body">
          <Header/>

          
          

        <div className="container">
        <MDBCol className ="center" style={{ maxWidth: "40rem" }}>
          <MDBCard>
            <MDBCardBody>
            <Balance/>
            <hr></hr>
            <Expanses/>
            <hr></hr>
            <Transaction/>
            <hr></hr>
            <AddTransaction/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </div>
       </div>
    );
  
}

export default App;
