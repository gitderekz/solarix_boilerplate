import React from 'react'
import "./About.css";
import {company__photo} from "../../assets"
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const About = () =>{
    return(
        <section id='about'>
            <div className="container">
                <div className="column company__photo">
                    <img src={company__photo} alt="Solarix" />
                </div>
                <div className="column">
                    <h3 className='sub__title'>With +7 years experience</h3>
                    <h1 className='sub__title'>
                        Turning your <div className="g-text">vision</div> into reality by focusing on the basics
                    </h1>
                    <p className="text__muted description">The most straightforward way to import an image in React is to import it directly into your component file. This method assumes that the image file is located within your project directory. </p>
                    <div className="group">
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Consultation</p>
                                <h3>Free</h3>
                            </div>
                        </div>

                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Expert</p>
                                <h3>Engineers</h3>
                            </div>
                        </div>
                        
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Customer</p>
                                <h3>Support</h3>
                            </div>
                        </div>
                        
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Quality</p>
                                <h3>Service</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="buttons__container">
                        <Link to='project' smooth={true} className='btn'>Explore</Link>
                        <Link to='contact' smooth={true} className='btn btn__primary'>Get a quote</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About