/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useContext}from 'react'
import {GlobalContext} from '../Context/GlobalState';


 const balance = () => {
  
    const { transactions} = useContext(GlobalContext); 
    //Getting the amounts
    const amounts = transactions.map(transaction=> transaction.amount);
    const total =amounts.reduce((acc,currentN)=>(acc+=currentN),0).toFixed(2)
    return (
    
        <div>
            <h5>Available balance</h5>
            <h5>R{total}</h5>
        </div>
      
    )
}

export default balance;
