import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { navTabs } from '../../data';
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-scroll'; // Import NavLink for active link styling
import Logo from '../Logo';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const[open,setOpen] = useState(false);
    const[activeNavbar,setActiveNavbar] = useState(false);
    const handleScroll = ()=>{
        const currentScrollPos = window.scrollY;
        if(currentScrollPos > 50){
            setActiveNavbar(true);
        }else{
            setActiveNavbar(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <nav className={`navbar ${activeNavbar?'active':''}`}>
        {
            open?(<div className='sidebar__overlay' onClick={()=>setOpen(!open)}></div>):''
        }
        <Logo/>
        <div className={`box nav__tabs ${open? 'visible':'none'}`}>
            <div className="icon__container cancel__btn" onClick={()=>setOpen(!open)}>
                <FaTimes/>
            </div>
            {
                navTabs.map((tab, index) => (
                    // Use NavLink for active class functionality
                    <Link 
                        to={tab.id} 
                        className='tab' 
                        activeClass='g-text' // Add this to automatically apply a class when the link is active
                        smooth={true} 
                        spy={true} 
                        offset={-70} 
                        onClick={()=>setOpen(!open)}
                        key={index}
                    >
                        {tab.name}
                    </Link>
                ))
            }
        </div>
        <div className='box'>
            {/* If it's a simple link, use Link instead */}
            <Link to='contact' className='btn contact__btn'>
                Get started
            </Link>
            <div className='icon__container menu__btn' onClick={()=>setOpen(!open)}>
                <RiMenu3Fill/>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
