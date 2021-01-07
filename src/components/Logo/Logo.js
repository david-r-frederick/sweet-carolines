import React from 'react';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/branding/logo.png';

const Logo = (props) => {
    return (
        <Link className="navbar-brand" to="/home">
            <img className={classes.logo} src={logoImg} alt="Sweet Caroline's Logo" />
        </Link>
    );
};

export default Logo;
