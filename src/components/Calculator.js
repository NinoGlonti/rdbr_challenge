import React, { useEffect } from "react";
import { useState } from "react";

const Calculator = () => {
  const [salary, setSalary] = useState(0);
  const [sickDays, setSickDays] = useState(0);
  const [checked, setChecked] = useState(false)
  const [compensationData, setCompensationData] = useState({});

  const handleCalculation = () => {
    let days = [];
    let insuranceDays = [];
    let newObj = {};

    for (let i = 0; i <= sickDays; i++) {
      if (i >= 4 && i <= 8) {
        days.push(i)
        newObj.employerCompensationDays = days.length;
      }
      else if (i >= 9 && i <= 190 || i >= 9 && checked && i <= 248) {
        insuranceDays.push(i)
        newObj.insuranceCompensationDays = insuranceDays.length;
      }
      else {
        newObj.employerCompensationDays = 0;
        newObj.insuranceCompensationDays = 0;
      }
    }

    newObj.dailyAllowance = ((salary / 20) / 100) * 70;
    newObj.employerCompensation = newObj.dailyAllowance * newObj.employerCompensationDays;
    newObj.insuranceCompensation = newObj.dailyAllowance * newObj.insuranceCompensationDays;
    newObj.compensationTotalAmount = newObj.employerCompensation + newObj.insuranceCompensation

    setCompensationData(newObj);
  }
  return (
    <main className="main-calculator-container">
      <section className="calculator-top-section">
        <h4 className="calculator-top-header">Compensation Calculator</h4>
        <form>
          <section className="first-input">
            <label className="calculator-label">Average income</label>
            <div className="income-input">
              <input onChange={e => setSalary(e.target.value)} className="calculator-input" type="number" />
              <p className="euro-sign">€</p>
            </div>
          </section>
          <section className="second-input">
            <label className="calculator-label">Days of sick leave</label>
            <div className="sick-days-input">
              <input onChange={e => setSickDays(e.target.value)} className="calculator-input" type="number" />
              <p className="days">days</p>
            </div>
          </section>
          <section className="checkbox-input">
            <input onChange={e => setChecked(e.target.checked)} className='checkbox' checked={checked} type="checkbox" name="tuberculosis" />
            <label className="calculator-label"> I have tuberculosis</label>
          </section>
        </form>
        <button className="calculator-btn" onClick={handleCalculation}>Calculate</button>
      </section>
      <hr className="line-break" />
      <section className="calculator-middle-section">
        <article className="middle-first-article">
          <p className="days-amount-text">The employer compensates</p>
          <p className="compensation-days"><strong> {compensationData.employerCompensationDays} Days</strong></p>
          <strong className="article-total-amount">{compensationData.employerCompensation}€</strong>
          <p className="money-amount-text">Daily allowance</p>
          <p className="money-amount-text">{compensationData.dailyAllowance}€</p>
        </article>
        <article className="middle-second-article">
          <p className="days-amount-text">Health Insurance compensates </p>
          <p className="compensation-days"><strong> {compensationData.insuranceCompensationDays} Days</strong></p>
          <strong className="article-total-amount">{compensationData.insuranceCompensation}€</strong>
          <p className="money-amount-text">Daily allowance</p>
          <p className="money-amount-text">{compensationData.dailyAllowance}€</p>
        </article>
      </section>
      <hr className="line-break" />
      <section className="calculator-bottom-section">
        <p className="calculator-bottom-text">Compensation for total for <em className="bottom-total-days">{sickDays}</em> days(net)</p>
        <strong className="calculator-bottom-total">{compensationData.compensationTotalAmount}€</strong>
      </section>
    </main>
  )
}

export default Calculator;