import React, { Component } from 'react';
import classes from './Contact.module.css';
import jigglypuffImg from '../../../assets/img/primary/CakeJigglypuff.jpg';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        howFind: 'Friends',
        wantNewsletter: false,
        message: '',
    };

    render() {
        return (
            <section className={`mt-nav container`} id="contact">
                <div className={`container ${classes.headingContainer}`}>
                    <img className={`${classes.contactImg} col col-lg-6`} src={jigglypuffImg} alt="" />
                    <form method="post" action="#" className={`${classes.contactForm} col-lg-6`}>
                        <h2 className={`${classes.heading}`}>We're happy to hear from you</h2>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-6">
                                <input
                                    className={`w-100 rounded border-0 px-2 py-2`}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    onChange={(event) => {
                                        this.setState({
                                            name: event.target.value,
                                        });
                                    }}
                                    required
                                />
                            </div>
                            <div className="col col-lg-6">
                                <input
                                    className={`w-100 rounded border-0 px-2 py-2`}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                    required
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-6">
                                <label for="email">How did you find us?</label>
                            </div>
                            <div className="col col col-lg-6">
                                <select
                                    onChange={(event) => {
                                        this.setState({
                                            howFind: event.target.value,
                                        });
                                    }}
                                    className={`w-100 rounded border-0 px-2 py-2`}
                                    name="find-us"
                                    id="find-us"
                                >
                                    <option value="friends" selected>
                                        Friends
                                    </option>
                                    <option value="Search Engine">Search Engine</option>
                                    <option value="ad">Advertisement</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-12">
                                <input
                                    className="mr-3"
                                    type="checkbox"
                                    name="newsletter"
                                    id="newsletter"
                                    checked={this.state.wantNewsletter}
                                    onChange={() =>
                                        this.setState((prevState) => {
                                            return {
                                                ...prevState,
                                                wantNewsletter: !prevState.wantNewsletter,
                                            };
                                        })
                                    }
                                />
                                Yes, I would like to receive Sweet Caroline's newsletters containing updates,
                                promotions, coupons, and events.
                            </div>
                        </div>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-12">
                                <textarea
                                    onChange={(event) => {
                                        this.setState({
                                            message: event.target.value,
                                        });
                                    }}
                                    className={`${classes.textArea} w-100 rounded border-0 px-2 py-2 h-100`}
                                    name="message"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                        </div>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-4">
                                <label>&nbsp;</label>
                            </div>
                            <div className="col col-lg-8">
                                <button
                                    onClick={() => {
                                        //do stuff
                                    }}
                                    className={`btn ${classes.submitBtn}`}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;
