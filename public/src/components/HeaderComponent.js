import React from 'react';
import { NavLink, NavText } from 'react-router-dom'
const Header = (props) => {
    return (
        <div>
            <header className='navbar navbar-dark bg-dark'>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className="navbar-brand" href="/">DeApp</a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/help'>Помочь</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='nav-link' to='/get-help'>Получить помощь</NavLink>
                            </li>

                            <li className="nav-item text-secondary">
                                <span className='nav-link'>Balance: {props.balance} </span>
                            </li>
                            <li className="nav-item text-secondary">
                                <span className='nav-link'>Address: {props.address}</span>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
            {/* <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    
    <a href="index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-2">Crypto|Technologies</span>
    </a>
    
    <ul class="nav nav-pills">
        <li class="nav-item"><a href="index.html" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="history.html" class="nav-link">History</a></li>
        <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
        <li class="nav-item"><a href="education.html" class="nav-link">Education</a></li>
        <li class="nav-item"><a href="products.html" class="nav-link">Products</a></li>
    </ul>
</header> */}
        </div>
    );
}

export default Header;
