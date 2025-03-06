const PeopleContainer = ({ nbPeople, setNbPeople }) => {
  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setNbPeople(value);
    } else {
      setNbPeople(0);
    }
  };

  return (
    <div className="people-container">
      {nbPeople > 0 ? (
        <div>
          <label htmlFor="people">Number of People</label>
          <input
            type="tel"
            id="people"
            name="people"
            placeholder="0"
            required
            onChange={handleChange}
          />
        </div>
      ) : (
        <div>
          <div className="nb-people-error">
            <label htmlFor="people">Number of People</label>
            <p className="input-error">
              Please input a value that is greater than zero.
            </p>
          </div>
          <input
            className="error"
            type="tel"
            id="people"
            name="people"
            placeholder="0"
            required
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default PeopleContainer;
