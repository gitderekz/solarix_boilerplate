import React from 'react'
import "./Logo.css"
import { PiCompassRose, PiSolarPanelFill } from 'react-icons/pi'
const Logo = () => {
    return (
    <div className='logo'>
        <PiCompassRose className='icon'/>
        <h1 className="name">Kam<span className="color__primary">Puni</span></h1>
    </div>
    )
}
export default Logo