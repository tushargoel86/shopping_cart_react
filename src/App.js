import BillSummary from "./components/BillSummary";
import ItemDetails from "./components/ItemDetail";
import PromoCode from "./components/PromoCode";
import TotalBill from "./components/TotalBill";
import { Provider } from "./components/Context";

const UI = (props) => {
  return (
    <div className="container mt-5">
      <div className="card bg-light" style={{ width: "50%" }}>
        <div className="card-body">
          <h4 className="card-title text-center">Shopping Cart</h4>
          <div className="card-text">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider>
      <UI>
        <BillSummary />
        <hr />
        <TotalBill />
        <br />
        <ItemDetails />
        <br />
        <PromoCode />
      </UI>
    </Provider>
  );
}

export default App;
