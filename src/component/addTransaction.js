import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  //Set the state for our variable
  const [text,setText] =useState('');
  const [amount,setAmount] =useState(0);

return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <h3 className="h4 text-center mb-4">Add transtion</h3>
        <label htmlFor="text" className="grey-text">
          Text
        </label>
        <input type="text" id="text" value={text} onChange={(e)=> setText(e.target.value)} className="form-control" />
        <br />
        <label htmlFor="amount" className="grey-text">
          Amount
        </label>
        <input type="" id="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} className="form-control" />
        <br />
     
       
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Add transaction
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
  
</MDBContainer>

);
};

export default FormPage;