import React, { Fragment } from 'react'
import {MDBIcon } from "mdbreact";

const transactionList = () => {
    return (
        <Fragment>
        <h3>History</h3>
       
       <div className="row">
       <div className="col-md-6">
       <span>Cash</span>
       </div>

       <div className="col-md-6">
      
      <MDBIcon icon="times" />
       <span> R600</span>
    
      
       </div>
       </div>
       
        </Fragment>
    )
}

export default transactionList;