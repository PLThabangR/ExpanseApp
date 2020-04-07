import React from "react";
import "./index.css";
import TransactionList from './component/transactionList';
import AddTransaction from './component/addTransaction';
import  Header from './component/header';
import Balance from './component/balance';
import Expanses from './component/incomeExpanses';
import { MDBCard, MDBCardBody, MDBCol } from 'mdbreact';
import {GlobalProvider} from './Context/GlobalState';


function App() {
  
    return (
      <GlobalProvider>
          <Header/>
          <div className="body">
        <div className="container">
        <MDBCol className ="center" style={{ maxWidth: "40rem" }}>
          <MDBCard>
            <MDBCardBody>
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
