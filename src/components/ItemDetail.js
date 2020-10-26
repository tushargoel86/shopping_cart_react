import React, { useState, useContext } from "react";
import { Context } from "./Context";

// will show the item seleced in the cart
const ItemDetails = (props) => {
  const {state} = useContext(Context);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#item"
          role="button"
          aria-expanded="false"
          aria-controls="item"
          onClick={() => setOpen(!open)}
        > 
          {open ? 'Hide' : 'See'} Item details
        </a>
      </p>
      <div className="collapse" id="item">
        <div className="card card-body">
          <div className="media">
            <img
              className="align-self-start mr-3"
              width={100}
              height={100}
              src="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
              alt=""
            />
            <div className="media-body">
              <h5 className="mt-0">
                {" "}
                Apple iPhone 11 (64GB) - Black (Includes EarPods, Power Adapter)
              </h5>
              <div className="row">
                <div className="col-md-4">
                  <strong>${state.finalBill}</strong>
                </div>
                <div className="col-md-8 text-center">
                  <strong>Qty: {state.qty}</strong>
                </div>
              </div>
              <div className="row">
                <div className="text-info">
                  {" "}
                  <strong>
                    <del>${state.price}</del>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
