import React, { useEffect, useState } from 'react'
import './nav.css';

function Nav() {
    
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                 handleShow(true);
                }
                else {
                    handleShow(false)
                }  
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" 
            alt="Netflix Logi"
            />
        </div>
    )
}

export default Nav
