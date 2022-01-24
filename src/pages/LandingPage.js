import { useState } from "react";
import Calculator from "../components/Calculator";
import Image from '../assets/image.jpeg';
import '../assets/styles/main.css';

const LandingPage = () => {
  const [salary, setSalary] = useState(0);
  const [sickDays, setSickDays] = useState(0);
  const [checked, setChecked] = useState(false);
  const [compensationData, setCompensationData] = useState({
    dailyAllowance: 0,
    employerCompensation: 0,
    insuranceCompensation: 0,
    compensationTotalAmount: 0,
  });

  const handleCalculation = () => {
    let days = [];
    let insuranceDays = [];
    let newObj = {};

    for (let i = 0; i <= sickDays; i++) {
      if (i >= 4 && i <= 8) {
        days.push(i);
        newObj.employerCompensationDays = days.length;
      } else if ((i >= 9 && i <= 190) || (i >= 9 && checked && i <= 248)) {
        insuranceDays.push(i);
        newObj.insuranceCompensationDays = insuranceDays.length;
      } else if (i >= 0 && i <= 3) {
        newObj.employerCompensationDays = 0;
        newObj.insuranceCompensationDays = 0;
      }
    }

    newObj.dailyAllowance = ((salary / 20) / 100) * 70;
    newObj.employerCompensation = parseInt(newObj.dailyAllowance * newObj.employerCompensationDays).toFixed();
    newObj.insuranceCompensation = parseInt(newObj.dailyAllowance * newObj.insuranceCompensationDays).toFixed();
    newObj.compensationTotalAmount = parseInt(newObj.employerCompensation) + parseInt(newObj.insuranceCompensation);

    setCompensationData(newObj);
  }

  return (
    <main className="landing-page-container">
      <section className='left-container'>
        <section className="top-section">
          <h1>Quam Tristique Condimentum</h1>
          <p className='first-section-text'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <a className='first-section-link' href="#/">Curabitur blandit</a> tempus porttitor.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.
          </p>
        </section>
        <section className='middle-section'>
          <section>
            <h2>Fringilla Euismod Adipiscing Ipsum</h2>
            <p className='second-section-text'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.
            </p>
          </section>
          <img className="middle-section-image" src={Image} alt="middle-img" />
        </section>
        <section className="bottom-section">
          <ul className="bottom-section-list">
            <li>Tellus Ullamcorper Inceptos</li>
            <li>Magna Condimentum
              <ul className="nested-list">
                <li>Mattis Tristique </li>
                <li>Pharetra Pellentesque Dapibus</li>
              </ul>
            </li>
            <li>Aenean Inceptos</li>
            <li>Parturient Bibendum</li>
          </ul>
        </section>
      </section>
      <section className='right-container'>
        <Calculator
          handleCalculation={handleCalculation}
          setSalary={setSalary}
          sickDays={sickDays}
          setSickDays={setSickDays}
          checked={checked}
          setChecked={setChecked}
          compensationData={compensationData}
        />
      </section>
    </main>
  )
}

export default LandingPage;