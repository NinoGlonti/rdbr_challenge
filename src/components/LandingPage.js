import React from "react";
import './styles/main.css';
import Image from '../assets/image.jpeg'
import Calculator from "./Calculator";


const LandingPage = () => {
  return (
    <main className="landing-page-container">
      <section className='left-container'>
        <section className="top-section">
          <h1>Quam Tristique Condimentum</h1>
          <p className='first-section-text'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <a className='first-section-link' href="#">Curabitur blandit</a> tempus porttitor.
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
          <img className="middle-section-image" src={Image} />
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
        <Calculator />
      </section>
    </main>
  )
}

export default LandingPage;