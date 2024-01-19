// RegistrationForm.js
import React from 'react';

const RegistrationForm = () => {
    return (
        <section className="main-form">
            <div className="main-form__container">
                <form action="" method="post" className="main-form__body body-form">
                    <div>
                        <div className="body-form__upper">
                            <div className="">
                                <div className="form-group">
                                    <label className="label">First Name
                                        <input type="text" className="home-form-control form-control" id="fName"
                                               placeholder="First Name" required=""/>
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <div className="form-group">
                                    <label className="label">Last Name
                                        <input type="text" className="home-form-control form-control" id="lName"
                                               placeholder="Last Name" required=""/>
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <div className="form-group">
                                    <label className="label">Email
                                        <input type="text" className="home-form-control form-control" id="email"
                                               placeholder="Enter email" required=""/>
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <div className="form-group">
                                    <label className="label">Phone
                                        <input type="number" className="home-form-control form-control" id="phone"
                                               placeholder="+123(456)78910" required=""/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="body-form__bottom">
                            <textarea/>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary">
                                Secure Your Session
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;
