import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [salary, setSalary] = useState(null);
  const [sickDays, setSickDays] = useState(null);
  const [employerCompensationDays, setEmployerCompensationDays] = useState(0);
  const [insuranceCompensationDays, setInsuranceCompensationDays] = useState(0);
  const [sumDays, setSumDays] = useState(0);
  const [employerCompensationTotal, setEmployerCompensationTotal] = useState(0);
  const [employerDailyAllowance, setEmployerDayliAllowance] = useState(28);
  const [insuranceCompensationTotal, setInsuranceCompensationTotal] = useState(0)
  const [insuranceDailyAllowance, setInsuranceDailyAllowance] = useState(28);

  const handleSalary = (event) => {
    setSalary(event.target.value);
  }

  const handleSickDays = (event) => {
    setSickDays(event.target.value);
  }

  const handleDays = () => {
    let days = [];
    let insuranceDays = []

    for (let i = 0; i <= sickDays; i++) {
      if (i >= 4 && i <= 8) {
        days.push(i)
        setEmployerCompensationDays(days.length)
      }
      else if (i >= 9 && i <= 182) {
        insuranceDays.push(i)
        setInsuranceCompensationDays(insuranceDays.length);
      }
      else if (i >= 0 && i <= 3) {
        setEmployerCompensationDays(0);
        setInsuranceCompensationDays(0);
      }
    }

    setEmployerCompensationTotal(28 * employerCompensationDays);
    setInsuranceCompensationTotal(28 * insuranceCompensationDays)


    /*  let employerCompensation = Math.round((salary - ((70 / 100) * salary)) / employerCompensationDays);
      let employerAllowance = Math.round(employerCompensation / employerCompensationDays);
  
      setEmployerCompensationTotal(employerCompensation);
      setEmployerDayliAllowance(employerAllowance);
  
      let insuranceCompensation = Math.round((salary - ((70 / 100) * salary)) / insuranceCompensationDays);
      let insuranceAllowance = Math.round(insuranceCompensation / insuranceCompensationDays);
  
      setInsuranceCompensationTotal(insuranceCompensation);
      setInsuranceDailyAllowance(insuranceAllowance);
  */
  }
  return (
    <main className="main-calculator-container">
      <section className="calculator-top-section">
        <h4 className="calculator-top-header">Compensation Calculator</h4>
        <form>
          <div className="first-input">
            <label className="calculator-label">Average income</label>
            <input onChange={handleSalary} className="calculator-input" type="number" />
          </div>
          <div className="second-input">
            <label className="calculator-label">Days of sick leave</label>
            <input onChange={handleSickDays} className="calculator-input" type="number" />
          </div>
          <div className="checkbox-input">
            <input className='checkbox' type="checkbox" name="tuberculosis" />
            <label className="calculator-label"> I have tuberculosis</label>
          </div>
        </form>
        <button onClick={handleDays} className="calculator-btn" type='button'>Calculate</button>
      </section>
      <hr className="line-break" />
      <section className="calculator-middle-section">
        <article className="middle-first-article">
          <p className="days-amount-text">The employer compensates <br></br><strong> {employerCompensationDays} Days</strong></p>
          <strong className="article-total-amount">{employerCompensationTotal}$</strong>
          <p className="money-amount-text">Daily allowance <br></br>{employerDailyAllowance}$</p>
        </article>
        <article className="middle-second-article">
          <p className="days-amount-text">Health Insurance compensates <br></br><strong> {insuranceCompensationDays} Days</strong></p>
          <strong className="article-total-amount">{insuranceCompensationTotal}$</strong>
          <p className="money-amount-text">Daily allowance<br></br> {insuranceDailyAllowance}$</p>
        </article>
      </section>
      <hr className="line-break" />
      <section className="calculator-bottom-section">
        <p className="calculator-bottom-text">Compensation for total for <em className="bottom-total-days">{sickDays}</em> days(net)</p>
        <strong className="calculator-bottom-total">112,00$</strong>
      </section>
    </main>
  )
}

export default Calculator;