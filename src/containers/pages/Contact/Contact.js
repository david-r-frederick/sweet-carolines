import React, { Component } from 'react';
import classes from './Contact.module.css';

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
                    <h2 className={`${classes.heading} position-absolute`}>We're happy to hear from you</h2>
                </div>
                <div className="container">
                    <form method="post" action="#" className={classes.contactForm}>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-4">
                                <label for="name">Name</label>
                            </div>
                            <div className="col col-lg-8">
                                <input
                                    className="w-100"
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
                        </div>
                        <div className={`${classes.row} row`}>
                            <div className="col col-lg-4">
                                <label for="email">Email</label>
                            </div>
                            <div className="col col-lg-8">
                                <input
                                    className="w-100"
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
                            <div className="col col-lg-4">
                                <label for="find-us">How did you find us?</label>
                            </div>
                            <div className="col col col-lg-8">
                                <select
                                    onChange={(event) => {
                                        this.setState({
                                            howFind: event.target.value,
                                        });
                                    }}
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
                            <div className="col col-lg-4">
                                <label for="newsletter">Newsletter</label>
                                <br />
                            </div>
                            <div className="col col-lg-8">
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
                            <div className="col col-lg-4">
                                <label>Drop us a line</label>
                            </div>
                            <div className="col col-lg-8">
                                <textarea
                                    onChange={(event) => {
                                        this.setState({
                                            message: event.target.value,
                                        });
                                    }}
                                    className="w-100"
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
                                <button onClick={() => {
                                  //do stuff
                                }} className="btn btn-success">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;
