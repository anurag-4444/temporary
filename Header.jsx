import React from 'react'
import "../styles/header.css"
import { Link } from "react-router-dom";

const Header = () => {
    const sidebar = document.getElementsByClassName("sidebar");
    const appdrawer = document.getElementsByClassName('bla')
    const active = () => {
        sidebar[0].classList.add("active")
        appdrawer[0].classList.add('drawer')
    }
    const disable = () => {
        sidebar[0].classList.remove("active")
        appdrawer[0].classList.remove('drawer')
    }


    return (
        <>
            <div className='openMenu' onClick={active}>
                <div className='color'></div>
                <div className='color'></div>
                <div className='color'></div>
            </div>

            <div className="sidebar">

                <div className='sidebarHeader'>
                    <div className='closeMenu' onClick={disable}>
                        <div className='color'></div>
                        <div className='color'></div>
                        <div className='color'></div>
                    </div>
                    <div className='title'>
                        <h3>VIDEO HUB</h3>
                    </div>
                </div>

                <div className="sidebarItems">

                        <Link onClick={disable} className='sidebarItem' to={"/"}>Home</Link>

                        <Link onClick={disable} className='sidebarItem' to={"/videos"}>Videos</Link>

                        <Link onClick={disable} className='sidebarItem' to={"/videos?category=free"}>Free Videos</Link>

                        <Link onClick={disable} className='sidebarItem' to={"/Upload"}>Upload Video</Link>

                </div> 

                <div className="sidebarFooter">
                    
                        <Link onClick={disable} className='login' to={'/login'}>Login</Link>
                        <Link onClick={disable} className='signUp' to={'signup'}>Sign Up</Link>
                </div>
            </div>

            <div className='bla' id='appdrawer' style={{ 'transitionDuration': '850ms' }} onClick={disable}></div>
        </>
    )
}

export default Header