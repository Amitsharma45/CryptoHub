import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor : '#0B0C10'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Crypto<span style={{margin : '0px 3px', padding : '0px 2px' , backgroundColor : 'orange' , color : 'black' , borderRadius : '3px'}}>Hub</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Crypto News</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success mx-2" type="submit">Login</button>
                        <button className="btn btn-outline-success" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header