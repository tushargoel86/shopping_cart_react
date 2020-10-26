import React, { useContext } from "react";
import { Context } from "./Context";

const TotalBill = (props) => {
  const { state } = useContext(Context);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 text-center">
          <h1>EST. Total</h1>
        </div>
        <div className="col-md-6 text-center">
          <h1>${state.finalBill}</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalBill;
