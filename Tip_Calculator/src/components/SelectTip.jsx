import { useRef } from 'react';

const SelectTip = ({ setTip }) => {
    const customInputRef = useRef(null);

    const tipOptions = [5, 10, 15, 25, 50];

    const handleCustomChange = (e) => {
        const value = parseFloat(e.target.value);
        setTip(value || 0);
    };

    const handleTipChange = (e) => {
        setTip(parseFloat(e.target.value));
    };

    return (
        <div className="select-tip-container">
            <label>Select Tip %</label>
            <div className="tip-input-grid">
                {tipOptions.map((tip) => (
                    <div key={tip} className="tip-option">
                        <input type="radio" id={tip} name="tip-percentage" value={tip} onClick={handleTipChange} />
                        <label htmlFor={tip}>{tip}%</label>
                    </div>
                ))}
                <div className="tip-option custom-option">
                    <input
                        type="tel"
                        id="custom"
                        ref={customInputRef}
                        name="tip-percentage"
                        placeholder="Custom"
                        onChange={handleCustomChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectTip;
