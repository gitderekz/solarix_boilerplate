import React from 'react'
import './Testimonial.css'
import { testimonial } from '../../data'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:2,
        pauseOnHover:true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:[
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    }
  return (
    <section id='testimonial'>
        <div className="container">
            <h1 className="title">
                Clients <span className="g-text">Testimonies</span>
            </h1>
            <Slider {...settings} className="clients__container">
                {
                    testimonial.map((list,index) => (
                        <React.Fragment key={index}>
                            <div className="stars__container">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="text__muted content">{list.review}</p>
                            <div className="user__row">
                                <div className="profile">
                                    <img src={list.image} alt={list.name} />
                                </div>
                                <div className="details">
                                    <h3 className="name">{list.name}</h3>
                                    <small>CEO of company</small>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </Slider>
        </div>
    </section>
  )
}

export default Testimonial