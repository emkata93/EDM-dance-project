import { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Register = () => {


    const [emailValidator, setEmailValidator] = useState(true);
    const [passwordValidator, setPasswordValidator] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();

        const { email, password, confirmPassword } = Object.fromEntries(new FormData(e.target));

        console.log(email, password, confirmPassword);

        email.split('').find(x => x == '@') ? setEmailValidator(true) : setEmailValidator(false);

        password == confirmPassword ? setPasswordValidator(true) : setPasswordValidator(false)
    }

    return (
        <motion.section id="registerPage"
        initial = {{ opacity: 0, x: 100 }}
        animate = {{  opacity: 1, x: 0 }}
        exit = {{ opacity: 0, x: -100 }}
        transition = {{duration: 0.5}}
        >

            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <label htmlFor="email" className="vhide">
                        Email
                    </label>
                    <input
                        id="email"
                        className="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                    />

                    {emailValidator || <span style={{ color: "red" }}>Invalid email!</span>}


                    <label htmlFor="password" className="vhide">
                        Password
                    </label>
                    <input
                        id="password"
                        className="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="conf-pass" className="vhide">
                        Confirm Password:
                    </label>
                    <input
                        id="conf-pass"
                        className="conf-pass"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {passwordValidator || <span style={{ color: "red" }}>Passwords don't match!</span>}
                    <div>
                        <button type="submit" className="register">
                            Register
                        </button>
                    </div>

                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>.
                        </span>
                    </p>
                </fieldset>
            </form>
        </motion.section>
    )

}