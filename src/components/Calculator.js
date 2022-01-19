import React from "react";

const Calculator = () => {
  return (
    <main className="main-calculator-container">
      <section className="calculator-top-section">
        <h4 className="calculator-top-header">Compensation Calculator</h4>
        <form>
          <div className="first-input">
            <label className="calculator-label">Average income</label>
            <input className="calculator-input" type="number" />
          </div>
          <div className="second-input">
            <label className="calculator-label">Days of sick leave</label>
            <input className="calculator-input" type="number" />
          </div>
          <div className="checkbox-input">
            <input className='checkbox' type="checkbox" name="tuberculosis" />
            <label className="calculator-label"> I have tuberculosis</label>
          </div>
        </form>
        <button className="calculator-btn" type='button'>Calculate</button>
      </section>
      <section className="calculator-bottom-section">
        <article>
          <p>The employer compensates <strong>4 days</strong></p>
          <p>112,00$</p>
          <p>Daily allowance 28,00$</p>
        </article>
        <article>
          <p>Health Insurance compensates <strong>4 days</strong></p>
          <p>112,00$</p>
          <p>Daily allowance 28,00$</p>
        </article>
      </section>
      <section className="calculator-bottom-section">
        <p>Compensation for total for <em>7</em> days(net)</p>
        <strong>112,00$</strong>
      </section>
    </main>
  )
}

export default Calculator;