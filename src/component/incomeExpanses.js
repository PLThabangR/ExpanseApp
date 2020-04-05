import React from 'react'
import './style.css';

 const incomeExpanses = () => {
    return (
        
        <div className="row">
        <div className="col-md-6">
        <h4>Income</h4>
        <p>R0.00</p>
        </div>
        <div className="col-md-6">
        <h4>Expanse</h4>
        <p className="expanse">R0.00</p>
        </div>
        <hr></hr>
</div>
        
    )
}

export default incomeExpanses;
