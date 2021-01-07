import React from 'react';
import classes from './Footer.module.css';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className={`${classes.footerContainer}`}>
            <div className={`d-flex justify-content-between container`}>
                <div className={classes.left}>
                    <Link to="/copyright">Copyright 2021 - Caroline Cosio</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <a href="/">Back to Top</a>
                </div>
                <div className={classes.right}>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sweetcarolinesxo/">
                        <AiFillInstagram className={classes.iconInstagram} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sweetcarolinesxo">
                        <AiFillFacebook className={classes.iconFacebook} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
