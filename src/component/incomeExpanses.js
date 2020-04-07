/* eslint-disable react-hooks/rules-of-hooks */
import React,{useContext} from 'react'
import './style.css';
import {GlobalContext} from '../Context/GlobalState';



 const incomeExpanses = () => {
    const { transactions} = useContext(GlobalContext); 
    //Putting the  amounts in a single array
    const amounts =transactions.map(transaction =>transaction.amount);
    const income =amounts.filter(item =>item>0)
                          .reduce((acc,currentN)=>(acc +=currentN),0)
                          .toFixed(2);   
                          
      const expanse = (amounts.filter(item=> item <0)
                                .reduce((acc,currentN)=>(acc +=currentN),0)*-1)
                                .toFixed(2);                    
    return (
        
        <div className="row">
        <div className="col-md-6">
        <h4>Income</h4>
        <p style={{color:'#34eb7d'}}>R{income}</p>
        </div>
        <div className="col-md-6">
        <h4>Expanse</h4>
        <p style={{color:'#eb5334'}}>R{expanse}</p>
        </div>
        <hr></hr>
</div>
        
    )
}

export default incomeExpanses;
