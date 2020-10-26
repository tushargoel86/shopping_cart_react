import React, { useState, useContext } from "react";
import { Context } from "./Context";

const PromoCode = (props) => {
  const {applyDiscount} = useContext(Context);
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  const submitPromocode = (event) => {
     applyDiscount(code);
  };

  const handleInput = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#promocode"
          role="button"
          aria-expanded="false"
          aria-controls="promocode"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide" : "See"} Promo Code
        </a>
      </p>
      <div className="collapse" id="promocode">
        <div className="card card-body">
          <div className="form-group">
            <label htmlFor="promocode">Enter Promocode: </label>
            <input
              type="text"
              name="promocode"
              id="code"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              onKeyUp={handleInput}
            />
            <button className="btn-block bg-success mt-2" onClick={submitPromocode}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCode;
