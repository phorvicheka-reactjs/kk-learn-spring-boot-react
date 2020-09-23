import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <Link className='navbar-brand' to='/'>
                        ReactJs
                    </Link>
                </div>
                <ul className='navbar-nav'>
                    <li>
                        <Link className='nav-link' to='/welcome/username'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/todos'>
                            Todos
                        </Link>
                    </li>
                </ul>
                <ul className='navbar-nav navbar-collapse justify-content-end'>
                    <li>
                        <Link className='nav-link' to='/login'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/logout'>
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
