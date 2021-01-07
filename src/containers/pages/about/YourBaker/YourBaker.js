import React from 'react';
import classes from './YourBaker.module.css';
import bakerChildImg from '../../../../assets/img/your-baker/baker-child.jpg';
import bakerWeddingOneImg from '../../../../assets/img/your-baker/baker-wedding-one.jpg';
import bakerWeddingTwoImg from '../../../../assets/img/your-baker/baker-wedding-two.jpg';

const YourBaker = (props) => {
    return (
        <div className={`${classes.yourBakerContainer} mt-nav`}>
            <div className={`container my-5`}>
                <h1>Hi, I'm Caroline.</h1>
            </div>
            <section className={`bg-light px-5 py-5`}>
                <div className={`container d-flex gap-3`}>
                    <div className={`flex-basis-100`}>
                        <img className={`w-100`} src={bakerChildImg} alt="Caroline as a child" />
                    </div>
                    <div className={`flex-basis-100 text-dark`}>
                        <h3>from Nederland to McKinney</h3>
                        <p>
                            I’m a born and raised Texas girl who loves to try new things and challenge herself. Several
                            years ago, in the midst of a nation-wide obsession with cake (thank you, Ace of Cakes and
                            Cake Boss), I decided that I could totally make crazy cakes like that and got to baking!
                        </p>
                    </div>
                </div>
            </section>
            <section className={`px-5 py-5`}>
                <div className={`container d-flex gap-3`}>
                    <div className={`flex-basis-100 text-dark`}>
                        <h3>a lifelong journey, really</h3>
                        <p>
                            I’ve always been a baker though. I laugh about it now, but as a kid, I remember being so mad
                            that my parents wouldn’t get me an Easy-Bake Oven. Their reasoning was solid though. I was
                            already allowed to bake real food using the actual oven.
                        </p>
                    </div>
                    <div className={`flex-basis-100 bg-light`}>
                        <img
                            className={`w-100`}
                            src={bakerWeddingOneImg}
                            alt="Caroline in a wedding dress with a nature background"
                        />
                    </div>
                </div>
            </section>
            <section className={`bg-light px-5 py-5`}>
                <div className={`container d-flex gap-3`}>
                    <div className={`flex-basis-100 bg-light`}>
                        <img
                            className={`w-100`}
                            src={bakerWeddingTwoImg}
                            alt="Caroline in a wedding dress with a nature background"
                        />
                    </div>
                    <div className={`flex-basis-100 text-dark`}>
                        <h3>a family affair</h3>
                        <p>
                            Baking is in my blood. I knew that my grandmothers and my mom all baked (my mom would make
                            the cutest cakewalk desserts and birthday cakes for us), but after I started making more
                            complicated cakes, I learned that one of my grandmas used to make wedding cakes! She’s now
                            shared lots of wisdom and even some pans and other tools with me.
                        </p>
                    </div>
                </div>
            </section>
            <section className={`px-5 py-5`}>
                <div className={`container d-flex gap-3`}>
                    <div className={`flex-basis-100 text-dark`}>
                        <h3>sharing and caring</h3>
                        <p>
                            I love baking for a number of reasons, the family aspect, the challenge of doing something
                            new, the eating, etc, but the thing that brings me back every time I stray is how much I
                            love sharing it with others. I think that sharing baked goods is a love language, and I
                            think it’s mine! I want to give people exactly what they expect and more because, to me,
                            it’s a way to show I care.
                        </p>
                    </div>
                    <div className={`flex-basis-100 bg-light`}>
                        <img
                            className={`w-100`}
                            src={bakerWeddingTwoImg}
                            alt="Caroline in a wedding dress with a nature background"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YourBaker;
