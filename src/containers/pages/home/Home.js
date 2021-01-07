import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Features from './features/Features';
import classes from './Home.module.css';
import Reviews from './reviews/Reviews';

class Home extends Component {
    render() {
        return (
            <div>
                <header className={`${classes.header}`}>
                    <div className="container">
                        <div className={classes.headerWelcome}>
                            <h2>Sweet Treats</h2>
                            <h2>For every occasion</h2>
                            <div className={classes.linksContainer}>
                                <Link to="/menu" className={classes.headerWelcomeLinkOne}>Get Started</Link>
                                <Link to="/gallery" className={classes.headerWelcomeLinkTwo}>Gallery</Link>
                            </div>
                        </div>
                    </div>
                </header>
                <Features />
                <Reviews />
            </div>
        );
    }
}

export default Home;
