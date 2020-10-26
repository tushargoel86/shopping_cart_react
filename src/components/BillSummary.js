import React, { useContext } from "react";
import { Context } from "./Context";

export default function BillSummary(props) {
  const {state} = useContext(Context);
  
  console.log(state);
  return (
    <div className="form-group mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <h5>SubTotal:</h5>
        </div>
        <h5 className="col-md-6 text-center">${state.price}</h5>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 text-center">
          <h5>
            <u>Pickup Savings:</u>
          </h5>
        </div>
        <h5 className="col-md-6 text-danger text-center">-${state.discount}</h5>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 text-center">
          <h5>Est. taxes & Fees:</h5>({state.taxRate}% GST)
        </div>
        <h5 className="col-md-6 text-center">${state.taxes}</h5>
      </div>
    </div>
  );
}
