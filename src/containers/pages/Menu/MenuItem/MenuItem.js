import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <div className={`${classes.menuItemContainer}`}>
            <h3 className={classes.menuItemHeading}>{props.heading}</h3>
            <hr />
            <div className={`${classes.menuItemContent}`}>
                <div className={classes.left}>
                    <img className={classes.menuItemImg} src={props.img} alt={props.alt} />
                    {/* Carousel would go here */}
                </div>
                <div className={classes.right}>
                    {props.info.map((infoObject) => {
                        return (
                            <div className={classes.infoContainer}>
                                <h4>{infoObject.heading}</h4>
                                <ul className={`${classes.menuItemList}`}>
                                    {infoObject.list ? infoObject.list.map((listItem) => {
                                        return <li>{listItem}</li>;
                                    }) : null}
                                </ul>
                                {infoObject.description ? infoObject.description : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
