import React from 'react';
import classes from './Menu.module.css';
import roseCakeImg from '../../../assets/img/primary/CakeButtercreamFlowers.jpg';
import sweaterWeatherCupcakeImg from '../../../assets/img/primary/CupcakesSweaterWeather.jpg';
import macaronImg from '../../../assets/img/primary/MacaronsShellsGalore.jpg';
import cookieImg from '../../../assets/img/primary/SugarCookiesPlantsBotanyBirthday.jpg';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
    return (
        <div className={`mt-nav container`}>
            <div className={`${classes.getStartedContainer}`}>
                <h2 className={`text-center`}>Getting Started</h2>
                <hr />
                <div className={`${classes.getStartedItemsContainer} d-flex flex-column`}>
                    <div className={`${classes.getStartedItem}`}>
                        <h3>Size</h3>
                        <p>
                            The number of servings you need is the first thing that I need to know when it comes to
                            determining the price. Let me know how many people you’re feeding, and I can offer you size
                            options.
                        </p>
                    </div>
                    <div className={`${classes.getStartedItem}`}>
                        <h3>Event Details</h3>
                        <p>
                            I need to know the place and time of your event as well as how long ahead of time you'd like
                            it to be delivered. Delivery outside of the Dallas,TX area is only available for weddings.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${classes.menuItemContainer}`}>
                <h3 className={classes.menuItemHeading}>Cakes</h3>
                <hr />
                <div className={`${classes.menuItemContent}`}>
                    <div className={classes.top}>
                        <div className={classes.infoContainer}>
                            <h4>Flavors</h4>
                            <ul className={`${classes.menuItemList}`}>
                                <li>Vanilla</li>
                                <li>Chocolate</li>
                                <li>Lemon</li>
                                <li>Red Velvet</li>
                                <li>By Request</li>
                            </ul>
                            Some flavors of cake require more effort and/or premium ingredients. If you would like a premium flavor, multiple flavors, or a special filling between your layers, this will raise your cost. Gluten free cakes are made more expensive by the cost of ingredients. Please be sure to let me know early on if you need a gluten free cake.
                        </div>
                        <div className={classes.infoContainer}>
                            <h4>Fillings</h4>
                            <ul className={`${classes.menuItemList}`}>
                                <li>Buttercream</li>
                                <li>Lemon or Lime Curd</li>
                                <li>Chocolate Mousse</li>
                                <li>Strawberry Filling</li>
                                <li>And More!</li>
                            </ul>
                            Some flavors of cake require more effort and/or premium ingredients. If you would like a premium flavor, multiple flavors, or a special filling between your layers, this will raise your cost. Gluten free cakes are made more expensive by the cost of ingredients. Please be sure to let me know early on if you need a gluten free cake.
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div>
                            <img
                                className={classes.menuItemImg}
                                src={roseCakeImg}
                                alt="Pink cake with roses for decoration"
                            />
                        </div>
                        <div>
                            <div className={classes.infoContainer}>
                                <h4>Decoration</h4>
                                <p>
                                    Stacking and carving cake and hand making decorative elements takes time and
                                    resources.
                                </p>
                                <p>Examples of levels of decoration are...</p>
                                <ul className={`${classes.menuItemList}`}>
                                    <li>A round stacked cake with sprinkles and an icing border</li>
                                    <li>A cake with fondant and chocolate elements made to match a theme</li>
                                    <li>A carved cake made to look like a real object.</li>
                                </ul>
                            </div>
                            <div className={classes.infoContainer}>
                                <h4>Base Pricing (per serving)</h4>
                                <p>
                                    Servings for most of my cakes are a 1 by 2 inch slice which is around 5 or 6 inches
                                    tall! I will make sure you know how to cut the cake at pick up.
                                </p>
                                <ul className={`${classes.menuItemList}`}>
                                    <li>Buttercream: $3.50</li>
                                    <li>Fondant: $4.00</li>
                                    <li>Realistic Items: $6.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MenuItem
                heading="Cupcakes"
                img={sweaterWeatherCupcakeImg}
                alt=""
                info={[
                    {
                        heading: 'Flavors',
                        list: ['Vanilla', 'Chocolate', 'Lemon', 'Red Velvet', 'By Request'],
                    },
                    {
                        heading: 'Fillings',
                        list: [
                            'Buttercream',
                            'Lemon or Lime Curd',
                            'Chocolate Mousse',
                            'Strawberry Filling',
                            'And More!',
                        ],
                    },
                    {
                        heading: 'Base Pricing (per serving)',
                        list: ['Buttercream: $3.50', 'Fondant: $4.00', 'Realistic Items: $6.00'],
                    },
                ]}
            />
            <MenuItem
                heading="Cookies"
                img={cookieImg}
                alt="Decorated sugar cookies with botany theme"
                info={[
                    {
                        heading: 'Flavors',
                        description: (
                            <p>
                                I only offer one flavor of iced cookie at this time, but I tested many, many recipes
                                before deciding on one. I believe you’ll love it!
                            </p>
                        ),
                    },
                    {
                        heading: 'Decoration',
                        description: (
                            <React.Fragment>
                                <p>
                                    Mixed batches for parties often contain a blend of these. Keep in mind that any
                                    design that contains hand painting or drawing is considered elaborate and can take
                                    me 20+ minutes per cookie.
                                </p>
                            </React.Fragment>
                        ),
                        list: [
                            `Simple: 1 -2 colors and minimal piping.`,
                            `Detailed: 4 – 6 colors and consistencies, no hand cutting shapes,
                            and simple details.`,
                            `Elaborate: 7+ colors and may be hand-cut with several details.`,
                        ],
                    },
                    {
                        heading: 'Base Pricing',
                        description: (
                            <p>
                                Most decorated cookies are around 3 to 4 inches across in size, and prices increase with
                                size by the inch.
                            </p>
                        ),
                        list: ['Quoted on individual basis', 'Minimum Order: 1 dozen / $40'],
                    },
                ]}
            />
            <MenuItem
                heading="Macarons"
                img={macaronImg}
                alt="Cream colored macarons"
                info={[
                    {
                        heading: 'Flavors/Fillings',
                        list: [
                            'Flavored Buttercream',
                            'Chocolate Ganache- Milk, White or Dark',
                            'Lemon or Lime Curd',
                            'Caramel',
                            'Cookies and Cream',
                            'Italian Cream Cake',
                            'Dark Chocolate Sea Salt Caramel',
                            'Lemon Blueberry',
                            'Swiss Buttercream with Fruit or Curd Center',
                            'And More!',
                        ],
                    },
                    {
                        heading: 'Base Pricing',
                        paragraph: `Macarons come in two sizes. Depending on filling and size, they can range from $1.50 to
                        $3 or more a piece.`,
                        list: ['Quoted on individual basis', 'Minimum Order: 2 dozen'],
                    },
                ]}
            />
        </div>
    );
};

export default Menu;
