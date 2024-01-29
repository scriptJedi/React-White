import {Button} from "./Button.jsx";
import { forwardRef } from 'react';
import '../assets/styles/RegistrationForm.css'

// eslint-disable-next-line react/display-name
const RegistrationForm = forwardRef((props, ref) => {
    return (
        <section className="main-form" id="registration-form" ref={ref}>
            <div className="container">
                <form action="" method="post" className="main-form__body body-form">
                    <div>
                        <div className="body-form__upper">
                            <div className="body-form__group">
                                <label className="label">First Name
                                    <input type="text" className="home-form-control form-control" id="fName"
                                           placeholder="First Name" required=""/>
                                </label>
                            </div>
                            <div className="body-form__group">
                                <label className="label">Last Name
                                    <input type="text" className="home-form-control form-control" id="lName"
                                           placeholder="Last Name" required=""/>
                                </label>
                            </div>
                            <div className="body-form__group">
                                <label className="label">Email
                                    <input type="text" className="home-form-control form-control" id="email"
                                           placeholder="Enter email" required=""/>
                                </label>
                            </div>
                            <div className="body-form__group">
                                <label className="label">Phone
                                    <input type="number" className="home-form-control form-control" id="phone"
                                           placeholder="+123(456)78910" required=""/>
                                </label>
                            </div>
                        </div>
                        <div className="body-form__bottom">
                            <div className="body-form__group">
                                <label style={{marginTop: '20px'}}>
                                    Your message
                                    <textarea rows={5}/>
                                </label>
                            </div>
                        </div>

                        <div style={{display: 'flex', marginTop: '20px', justifyContent: 'flex-end'}}>
                            <Button isLink={false} mode={'primary'} label={'Contact us'}/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
});

export default RegistrationForm;
