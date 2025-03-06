const RecapContainer = ({
  bill,
  setBill,
  setTip,
  setNbPeople,
  setTipAmount,
  setTotalAmount,
  tipAmount,
  totalAmount,
  nbPeople,
}) => {
  const handleReset = () => {
    setBill(0);
    setTip(0);
    setNbPeople(1);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <div className="recap-container">
      <div className="recap-top">
        <div className="tip-container">
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>
        <div className="tip-amount">
          <p>${tipAmount > 0 ? tipAmount.toFixed(2) : "0.00"}</p>
        </div>
      </div>

      <div className="recap-bottom">
        <div className="total-container">
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <div className="total-amount">
          <p>${totalAmount > 0 ? totalAmount.toFixed(2) : "0.00"}</p>
        </div>
      </div>

      <div
        className={`btn-reset-form ${
          bill > 0 && tipAmount > 0 && nbPeople > 0 ? "" : "empty"
        }`}
      >
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default RecapContainer;
