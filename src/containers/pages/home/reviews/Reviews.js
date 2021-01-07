import React from 'react';
import classes from './Reviews.module.css';

const Reviews = (props) => {
    return (
        <section className={classes.reviewsContainer}>
            <div className={`${classes.content} container`}>
                <h2 className={classes.heading}>What My Customers Have to Say...</h2>
                <div className={classes.quotesContainer}>
                    <div className={classes.quote}>
                        <blockquote>"Caroline is super friendly and her desserts taste and look amazing. Would recommend to anyone and everyone!"</blockquote>
                        <cite>Nathan Rooney</cite>
                    </div>
                    <div className={classes.quote}>
                        <blockquote>"THE GIRL CAN BAKE!! She puts heart and soul into all she does. You’ll be taking a bite of heaven on earth."</blockquote>
                        <cite>Josmery Mulvahill</cite>
                    </div>
                    <div className={classes.quote}>
                        <blockquote>"I’ve never ate anything Caroline’s made that isn’t delicious! One of my favorites is her Macarons (ALL of the flavors), I’ve never tasted another quite as incredible as hers!!."</blockquote>
                        <cite>April Miller</cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
