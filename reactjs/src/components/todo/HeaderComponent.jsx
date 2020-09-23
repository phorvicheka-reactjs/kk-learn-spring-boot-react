import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

const HeaderComponent = () => {
    const [isUserLoggedIn, setIsUserLoggedIn]= useState();
    const [username, setUsername]= useState();
    const location = useLocation();

    useEffect(() => {
        setIsUserLoggedIn(AuthenticationService.isUserLoggedIn());
        setUsername(AuthenticationService.getUsername());
    }, [location.key]);

    return (
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <Link className='navbar-brand' to='/'>
                        ReactJs
                    </Link>
                </div>
                <ul className='navbar-nav'>
                    {isUserLoggedIn && (
                        <li>
                            <Link
                                className='nav-link'
                                to={`/welcome/${username}`}
                            >
                                Home
                            </Link>
                        </li>
                    )}
                    {isUserLoggedIn && (
                        <li>
                            <Link className='nav-link' to='/todos'>
                                Todos
                            </Link>
                        </li>
                    )}
                </ul>
                <ul className='navbar-nav navbar-collapse justify-content-end'>
                    {!isUserLoggedIn && (
                        <li>
                            <Link className='nav-link' to='/login'>
                                Login
                            </Link>
                        </li>
                    )}
                    {isUserLoggedIn && (
                        <li>
                            <Link
                                className='nav-link'
                                to='/logout'
                                onClick={AuthenticationService.logout}
                            >
                                Logout
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
