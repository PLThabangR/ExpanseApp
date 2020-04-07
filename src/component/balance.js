/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useContext}from 'react'
import {GlobalContext} from '../Context/GlobalState';


 const balance = () => {
    // eslint-disable-next-line no-unused-vars
    const { transactions} = useContext(GlobalContext); 
    //Getting the amounts
    const amounts = transactions.map(transaction=> transaction.amount);
    const total =amounts.reduce((acc,currentN)=>(acc+=currentN),0).toFixed(2)
    return (
    
        <div>
            <h2>YOUR BALANCE</h2>
            <h3>R{total}</h3>
        </div>
      
    )
}

export default balance;
