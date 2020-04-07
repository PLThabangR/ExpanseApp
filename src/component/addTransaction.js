import React,{useState,useContext} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {GlobalContext} from '../Context/GlobalState';
const FormPage = () => {
  //Set the state for our variable
  const [text,setText] =useState('');
  const [amount,setAmount] =useState(0);

  const {addTransaction} = useContext(GlobalContext) ;

  const onSubmit =(e) =>{
    e.preventDefault();
    const newTransaction ={
      id: Math.floor(Math.random()*100000),
      text,
      amount:+amount
    }

    addTransaction(newTransaction);

  }
return (

  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={onSubmit}>
        <h5>Add transation</h5>
        <label htmlFor="text" className="grey-text">
          Text
        </label>
        <input type="text" id="text" value={text} onChange={(e)=> setText(e.target.value)} className="form-control" />
       
        <label htmlFor="amount" className="grey-text">
          Amount
        </label>
        <input type="number" id="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} className="form-control" />
        <div>
        <br/>
          <MDBBtn color="unique" type="submit">
            Add transaction
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
  


);
};

export default FormPage;