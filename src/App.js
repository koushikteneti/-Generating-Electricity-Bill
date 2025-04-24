import React, { useState } from 'react';
import './App.css';

function App() {
  const [units, setUnits] = useState('');
  const [category, setCategory] = useState('domestic');
  const [bill, setBill] = useState(null);

  const calculateBill = () => {
    const unitCount = parseFloat(units);
    let cost = 0;

    if (category === 'domestic') {
      if (unitCount <= 50) cost = unitCount * 1.95;
      else if (unitCount <= 100) cost = (50 * 1.95) + (unitCount - 50) * 3.10;
      else if (unitCount <= 200) cost = (50 * 1.95) + (50 * 3.10) + (unitCount - 100) * 4.80;
      else if (unitCount <= 300) cost = (50 * 1.95) + (50 * 3.10) + (100 * 4.80) + (unitCount - 200) * 7.70;
      else if (unitCount <= 400) cost += 50 * 1.95 + 50 * 3.10 + 100 * 4.80 + 100 * 7.70 + (unitCount - 300) * 9.00;
      else if (unitCount <= 800) cost += 50 * 1.95 + 50 * 3.10 + 100 * 4.80 + 100 * 7.70 + 100 * 9.00 + (unitCount - 400) * 9.50;
      else cost += 50 * 1.95 + 50 * 3.10 + 100 * 4.80 + 100 * 7.70 + 100 * 9.00 + 400 * 9.50 + (unitCount - 800) * 10.00;
    }

    else if (category === 'commercial') {
      if (unitCount <= 100) cost = unitCount * 7.50;
      else if (unitCount <= 300) cost = (100 * 7.50) + (unitCount - 100) * 8.50;
      else if (unitCount <= 500) cost = (100 * 7.50) + (200 * 8.50) + (unitCount - 300) * 9.00;
      else cost = (100 * 7.50) + (200 * 8.50) + (200 * 9.00) + (unitCount - 500) * 9.50;
    }

    else if (category === 'industrial') {
      if (unitCount <= 50) cost = unitCount * 7.00;
      else if (unitCount <= 100) cost = (50 * 7.00) + (unitCount - 50) * 8.50;
      else if (unitCount <= 300) cost = (50 * 7.00) + (50 * 8.50) + (unitCount - 100) * 9.90;
      else if (unitCount <= 500) cost = (50 * 7.00) + (50 * 8.50) + (200 * 9.90) + (unitCount - 300) * 10.40;
      else cost = (50 * 7.00) + (50 * 8.50) + (200 * 9.90) + (200 * 10.40) + (unitCount - 500) * 11.00;
    }

    setBill(cost.toFixed(2));
  };

  return (
    <div className="container">
      <h1 className="title">Electricity Bill Calculator ⚡</h1>

      <div className="form">
        <input
          type="number"
          className="input"
          placeholder="Enter units consumed"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="domestic">Domestic</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
        </select>
        <button className="button" onClick={calculateBill}>
          Calculate Bill
        </button>
      </div>

      {bill !== null && (
        <div className="result">Estimated Bill: ₹{bill}</div>
      )}

      <div className="rate-info">
        <h2>📊 Electricity Tariff Rates</h2>

        <div className="rate-table">
          <h3>Domestic Electricity Rates</h3>
          <ul>
            <li>Up to 50 units: ₹1.95/unit</li>
            <li>51-100 units: ₹3.10/unit</li>
            <li>101-200 units: ₹4.80/unit</li>
            <li>201-300 units: ₹7.70/unit</li>
            <li>301-400 units: ₹9.00/unit</li>
            <li>401-800 units: ₹9.50/unit</li>
            <li>Above 800 units: ₹10.00/unit</li>
          </ul>

          <h3>Commercial Electricity Rates</h3>
          <ul>
            <li>Up to 100 kW: ₹7.50/unit</li>
            <li>101-300 kW: ₹8.50/unit</li>
            <li>301-500 kW: ₹9.00/unit</li>
            <li>Above 500 kW: ₹9.50/unit</li>
          </ul>

          <h3>Industrial Electricity Rates</h3>
          <ul>
            <li>Up to 50 units: ₹7.00/unit</li>
            <li>51-100 units: ₹8.50/unit</li>
            <li>101-300 units: ₹9.90/unit</li>
            <li>301-500 units: ₹10.40/unit</li>
            <li>Above 500 units: ₹11.00/unit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
