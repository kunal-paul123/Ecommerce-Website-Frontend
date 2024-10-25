import { FaMinus, FaPlus } from "react-icons/fa";

function CartAmountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button className="amount" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style amount">{amount}</div>
        <button className="amount" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartAmountToggle;
