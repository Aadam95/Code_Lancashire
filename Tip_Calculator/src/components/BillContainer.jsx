const BillContainer = ({ setBill }) => {
  return (
    <div className="bill-container">
      <label htmlFor="bill">Bill</label>
      <input
        type="tel"
        id="bill"
        name="bill"
        placeholder="0"
        required
        onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
};

export default BillContainer;