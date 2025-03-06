import Header from "./components/Header";
import BillContainer from "./components/BillContainer";
import SelectTip from "./components/SelectTip";
import PeopleContainer from "./components/PeopleContainer";
import RecapContainer from "./components/RecapContainer";
import { useEffect, useState } from "react";

function App() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [nbPeople, setNbPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (bill > 0 && tip > 0 && nbPeople > 0) {
      const calculatedTipAmount = (bill * (tip / 100)) / nbPeople;
      const calculatedTotalAmount = (bill / nbPeople) + calculatedTipAmount;
      setTipAmount(calculatedTipAmount);
      setTotalAmount(calculatedTotalAmount);
    } else {
      setTipAmount(0);
      setTotalAmount(0);
    }
  }, [bill, tip, nbPeople]);

  return (
    <div>
      <header role="banner">
        <Header />
      </header>

      <main role="main">
        <form className="container" role="form">
          <div className="general-input-container">
            <BillContainer setBill={setBill} />
            <SelectTip setTip={setTip} />
            <PeopleContainer nbPeople={nbPeople} setNbPeople={setNbPeople} />
          </div>
          <RecapContainer
            tip={tip}
            bill={bill}
            nbPeople={nbPeople}
            setBill={setBill}
            setTip={setTip}
            setNbPeople={setNbPeople}
            setTipAmount={setTipAmount}
            setTotalAmount={setTotalAmount}
            tipAmount={tipAmount}
            totalAmount={totalAmount}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
