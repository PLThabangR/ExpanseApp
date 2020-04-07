import React from 'react'
import {MDBIcon } from "mdbreact";


 const transaction = ({transaction}) => {
   const sign =transaction.amount < 0 ? '-': '+';
   const color = transaction.amount< 0 ? '#eb5334':'#34eb7d';
    return (
        <div className="row">
        <div className="col-md-6">
        <span>{transaction.text}</span>
        </div>
 
        <div className="col-md-6">
       
       <MDBIcon icon="times" />
        <span style={{color:color}}> {sign}R{Math.abs(transaction.amount)}</span>
     
       
        </div>
        </div>
    )
}

export default transaction;