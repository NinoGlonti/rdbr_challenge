import '../assets/styles/calculator.css';

const Calculator = ({ handleCalculation, setSalary, setSickDays, setChecked, compensationData, checked, sickDays }) => (
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

export default Calculator;
