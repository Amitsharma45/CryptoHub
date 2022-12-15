import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#0B0C10', height: '55px' }}>
            <div className="container-fluid">
                <div>
                    <Link to='/' style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Crypto<span style={{ margin: '0px px', padding: '0px 2px', backgroundColor: 'orange', color: 'black', borderRadius: '3px' }}>Hub</span></Link>
                    <Link to='/about' style={{ color: 'white', textDecoration: 'none', fontSize: '18px' ,paddingLeft:'10px' }}>About Us</Link>
                    <Link to='/about' style={{ color: 'white', textDecoration: 'none', fontSize: '18px' ,paddingLeft:'10px' }}>Contact Us</Link>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link style={{color:'white',textDecoration:'none',fontSize:'20px'}}>About Us</Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default Header