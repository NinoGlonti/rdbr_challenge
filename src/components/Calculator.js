import React, { useEffect } from "react";
import { useState } from "react";

const Calculator = () => {
  const [salary, setSalary] = useState(0);
  const [sickDays, setSickDays] = useState(0);
  const [employerCompensationDays, setEmployerCompensationDays] = useState(0);
  const [insuranceCompensationDays, setInsuranceCompensationDays] = useState(0);
  const [compensation, setCompensation] = useState({ dayliAllowance: 0, emoloyerCompensation: 0, insuranceCompensation: 0, compensationTotal: 0 })
  const [checked, setChecked] = useState(false)

  const handleSalary = (event) => {
    setSalary(event.target.value);
  }

  const handleSickDays = (event) => {
    setSickDays(event.target.value);
  }

  useEffect(() => {
    setCompensation({
      dayliAllowance: ((salary / 20) / 100) * 70,
      emoloyerCompensation: compensation.dayliAllowance * employerCompensationDays,
      insuranceCompensation: compensation.dayliAllowance * insuranceCompensationDays,
      compensationTotal: compensation.emoloyerCompensation + compensation.insuranceCompensation
    })
  }, [salary, sickDays])
  console.log('laaaaaaaa', compensation)
  const handleDays = () => {
    let days = [];
    let insuranceDays = []

    for (let i = 0; i <= sickDays; i++) {
      if (i >= 4 && i <= 8) {
        days.push(i)
        setEmployerCompensationDays(days.length)
      }
      else if (i >= 9 && i <= 190 || i >= 9 && checked && i <= 248) {
        insuranceDays.push(i)
        setInsuranceCompensationDays(insuranceDays.length);
      }
      else if (i >= 0 && i <= 3) {
        setEmployerCompensationDays(0);
        setInsuranceCompensationDays(0);
      }
    }
  }
  return (
    <main className="main-calculator-container">
      <section className="calculator-top-section">
        <h4 className="calculator-top-header">Compensation Calculator</h4>
        <form>
          <section className="first-input">
            <label className="calculator-label">Average income</label>
            <div className="income-input">
              <input onChange={handleSalary} className="calculator-input" type="number" />
              <p className="euro-sign">€</p>
            </div>
          </section>
          <section className="second-input">
            <label className="calculator-label">Days of sick leave</label>
            <div className="sick-days-input">
              <input onChange={handleSickDays} className="calculator-input" type="number" />
              <p className="days">days</p>
            </div>
          </section>
          <section className="checkbox-input">
            <input className='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)} type="checkbox" name="tuberculosis" />
            <label className="calculator-label"> I have tuberculosis</label>
          </section>
        </form>
        <button onClick={handleDays} className="calculator-btn" type='button'>Calculate</button>
      </section>
      <hr className="line-break" />
      <section className="calculator-middle-section">
        <article className="middle-first-article">
          <p className="days-amount-text">The employer compensates <br></br><strong> {employerCompensationDays} Days</strong></p>
          <strong className="article-total-amount">{compensation.emoloyerCompensation}€</strong>
          <p className="money-amount-text">Daily allowance <br></br>{compensation.dayliAllowance}€</p>
        </article>
        <article className="middle-second-article">
          <p className="days-amount-text">Health Insurance compensates <br></br><strong> {insuranceCompensationDays} Days</strong></p>
          <strong className="article-total-amount">{compensation.insuranceCompensation}€</strong>
          <p className="money-amount-text">Daily allowance<br></br> {compensation.dayliAllowance}€</p>
        </article>
      </section>
      <hr className="line-break" />
      <section className="calculator-bottom-section">
        <p className="calculator-bottom-text">Compensation for total for <em className="bottom-total-days">{sickDays}</em> days(net)</p>
        <strong className="calculator-bottom-total">{compensation.compensationTotal}€</strong>
      </section>
    </main>
  )
}

export default Calculator;