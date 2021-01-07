import React from 'react';
import classes from './Features.module.css';
import { BiCustomize, BiTimer } from 'react-icons/bi';
import { RiDoorOpenFill } from 'react-icons/ri';

const Features = (props) => {
    return (
        <section className={`${classes.featuresSection} container d-flex flex-column py-5`}>
            <div className={classes.featureHeader}>
                <h2 className={classes.featureHeading}>Get Delicious Treats, Your Way</h2>
                <hr />
                <p className={`${classes.featureParagraph}`}>
                    Hello, welcome to my website. I’m glad you’re here. I’m a home baker in McKinney, TX, and this site is home to my cottage baking business, Sweet Caroline’s! Please have a look around and if you like what you see, hop over to the contact page to get in touch.
                </p>
            </div>
            <div className={classes.featuresContainer}>
                <div className={classes.feature}>
                    <BiTimer className={classes.featureIcon} />
                    <h3>Quick Responses</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste maxime autem ab, beatae
                        facilis dolorem totam eum neque ex tempora ut natus distinctio excepturi qui, itaque delectus
                        labore deserunt!
                    </p>
                </div>
                <div className={classes.feature}>
                    <BiCustomize className={classes.featureIcon} />
                    <h3>Custom Orders</h3>
                    <p>
                        All of my products are completely customizable to meet your specific needs. From flavors to fillings to colors to design, we make custom-tailored goods so that your event, big or small, will have the perfect touch.
                    </p>
                </div>
                <div className={classes.feature}>
                    <RiDoorOpenFill className={classes.featureIcon} />
                    <h3>Always Open</h3>
                    <p>
                        We're available
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
