import React from 'react'
import './Contacts.css'
import { contacts } from '../../data'

const Contacts = () => {
  return (
    <section id='contact'>
        <div className="bg__image"></div>
        <div className="overlay"></div>
        <div className="container">
            <div className="column">
                {
                    contacts.map((contact, index) =>(
                        <div className="contact__info" key={index}>
                            <div className="icon__container">{contact.icon}</div>
                            <div className="details">
                                <p className="text__muted">{contact.name}</p>
                                <p className="value">{contact.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="column form__container">
                <div className="form__top">
                    <h3 className="sub__title g-text">Keep in touch</h3>
                    <p>Send us a message through an email.</p>
                    <div className="form__middle">
                        <div className="row">
                            <input type="text" name="firstname" placeholder="First Name" className='control'/>
                            <input type="text" name="lastname" placeholder="Last Name" className='control'/>
                        </div>
                        <div className="row">
                            <input type="email" name="email" placeholder="Email" className='control'/>
                            <input type="tel" name="phone" placeholder="Phone number" className='control'/>
                        </div>
                        <textarea name="message" id="" cols={30} rows={5} placeholder='Message' className='control'></textarea>
                    </div>
                    <div className="form__bottom">
                        <button className="btn btn__primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts