import React from 'react';
import classes from './TermsAndConditions.module.css';

const TermsAndConditions = (props) => {
    return (
        <div className={`${classes.termsAndConditionsContainer} mt-nav`}>
            <div className={`container`}>
                <h1>Terms and Conditions</h1>
            </div>
        </div>
    );
};

export default TermsAndConditions;
