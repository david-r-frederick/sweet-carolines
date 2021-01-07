import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <nav className={`navbar navbar-expand-lg bg-transparent position-absolute ${classes.navbarContainer}`}>
            <div className="container-fluid">
                <Logo />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse justify-content-end ${classes.navListContainer}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${classes.navlink}`} to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${classes.navlink}`} to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${classes.navlink}`} to="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className={`nav-link dropdown-toggle ${classes.navlink}`}
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() => setShowAbout(!showAbout)}
                            >
                                About
                            </Link>
                            <ul className={`dropdown-menu ${showAbout ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Your Baker
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/faqs">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/terms">
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${classes.navlink}`} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
