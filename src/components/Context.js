import React, { useEffect, useState } from "react";
import { CASH_SAVINGS, PRICE, PROMOCODE, TAX_RATE } from "../utils/Constants";

export const Context = React.createContext();

export function Provider(props) {
  let initialState = {
    price: PRICE,
    discount: CASH_SAVINGS,
    taxRate: TAX_RATE,
    promocode: PROMOCODE,
    qty: 1,
    isDiscountApplied: false,
  };

  const [state, setState] = useState(initialState);

  const applyDiscount = (code) => {
    const { promocode, finalBill, isDiscountApplied } = state;
    if (isValidPromoCode(code)) {
      if (isDiscountApplied) alert("discount already applied");
      else {
        const newPriceAfterDiscount = calculateDiscount(
          finalBill,
          promocode[code]
        );

        setState({
          ...state,
          isDiscountApplied: true,
          finalBill: newPriceAfterDiscount,
        });
      }
    } else {
      alert("Invalid promo code");
    }
  };
 
  const isValidPromoCode = (code) => initialState.promocode[code];

  const calculateDiscount = (finalBill, discountInPercentage) => {
    const discountPrice = finalBill - (finalBill * discountInPercentage) / 100;
    return discountPrice < 0 ? 0 : discountPrice;
  };

  const calculateBill = () => {
    const { price, discount, taxRate } = initialState;
    const newPriceAfterDiscount = price - discount;
    const taxes = (newPriceAfterDiscount * taxRate) / 100;
    let finalPrice = newPriceAfterDiscount + parseInt(taxes.toFixed(2));
    finalPrice = finalPrice < 0 ? 0 : finalPrice.toFixed(2);
    return { taxes, finalPrice };
  };

  useEffect(() => {
    const { taxes: taxAmount, finalPrice: bill } = calculateBill();
    setState({
      ...initialState,
      taxes: taxAmount,
      finalBill: bill,
    });
  }, [initialState.price]);

  return (
    <Context.Provider value={{ state, applyDiscount }}>
      {props.children}
    </Context.Provider>
  );
}
