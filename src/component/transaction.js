/* eslint-disable react-hooks/rules-of-hooks */
import React,{useContext} from 'react'
import {MDBIcon } from "mdbreact";
import {GlobalContext} from '../Context/GlobalState';

 const transaction = ({transaction}) => {
   const sign =transaction.amount < 0 ? '-': '+';
   const color = transaction.amount< 0 ? '#eb5334':'#34eb7d';
   const { deleteTransaction} = useContext(GlobalContext); 
    return (
        <div className="row">
        <div className="col-md-6">
        <span>{transaction.text}</span>
        </div>
 
        <div className="col-md-6">
       
       <MDBIcon onClick={()=>deleteTransaction(transaction.id)} icon="times" />
        <span style={{color:color}}> {sign}R{Math.abs(transaction.amount)}</span>
     
       
        </div>
        </div>
    )
}

export default transaction;