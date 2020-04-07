/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment,useContext } from 'react';
import Transaction from './transaction';
import {GlobalContext} from '../Context/GlobalState';

const transactionList = () => {
  

  const { transactions} = useContext(GlobalContext); 
    return (
      
        <Fragment>
        
        <h5>History</h5>
      {transactions.map(transaction =>(
        //since it need to know which transaction 
        //we need to pass it as a prop
        <Transaction key={transaction.id} transaction={transaction}/>
      ))}
       
        </Fragment>
    )
}

export default transactionList;