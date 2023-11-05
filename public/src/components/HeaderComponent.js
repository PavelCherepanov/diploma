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
        </div>
    );
}

export default Header;
