import React from 'react'
import './Header.css'
import { solar__skyscraper } from '../../assets';
import { Link } from 'react-router-dom';
import SolarSystem from '../SolarSystem';


const Header = () => {
  return (
    <header>
        <div id="header">
            {/* <div className="system__wrapper">
                <SolarSystem/>
            </div> */}
            <div className="container full__height blur-effect">
                <div className="column">
                    <h1 className="title">
                        Home Revolution <span className="g-text">With Solar</span>
                    </h1>
                    <p className="text__muted">
                    Warning: React does not recognize the `activeClassName` prop on a DOM element. 
                    If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `activeclassname` instead. 
                    If you accidentally passed it from a parent component, remove it from the DOM element.
                    </p>
                    <div className="buttons__container">
                        <Link to='services' className='btn'>Our Services</Link>
                        <Link to='contacts' className='btn btn__primary'>Contact us</Link>
                    </div>
                </div>
                <div className='column'>
                    <div className="image__container primary-effect">
                        <img src={solar__skyscraper} alt="solar" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;