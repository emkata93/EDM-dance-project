import { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { renderSync } from 'sass';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate = useNavigate();
    const [emailValidator, setEmailValidator] = useState(true);
    // const [passwordValidator, setPasswordValidator] = useState(true);

    // need to be added pass validator

    const submitHandler = (e) => {
        e.preventDefault();

        const { userName, email, password, confirmPassword, firstName, lastName, phone } = Object.fromEntries(new FormData(e.target));

        const data = { userName, password, email, firstName, lastName, phone }

        email.split('').find(x => x == '@') ? setEmailValidator(true) : setEmailValidator(false);

        // password == confirmPassword ? setPasswordValidator(true) : setPasswordValidator(false);

        fetch(`/api/UserActions/Register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(navigate('/login'))

    }

    return (
        <motion.section id="registerPage"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >

            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <label htmlFor="userName" className="vhide">
                        Username
                    </label>
                    <input
                        id="userName"
                        className="userName"
                        name="userName"
                        type="text"
                        placeholder="ivan85"
                    />

                    <label htmlFor="password" className="vhide">
                        Password
                    </label>
                    <input
                        id="password"
                        className="password"
                        name="password"
                        type="password"
                        placeholder="********"
                    />
                    <label htmlFor="confirmPassword" className="vhide">
                        Confirm Password:
                    </label>
                    <input
                        id="confirmPassword"
                        className="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="********"
                    />
                    {/* {passwordValidator || <span style={{ color: "red" }}>Passwords don't match!</span>} */}

                    <label htmlFor="email" className="vhide">
                        Email
                    </label>
                    <input
                        id="email"
                        className="email"
                        name="email"
                        type="text"
                        placeholder="ivan.alexandrov@gmail.com"
                    />
                    {emailValidator || <span style={{ color: "red" }}>Invalid email!</span>}

                    <label htmlFor="firstName" className="vhide">
                        First name
                    </label>
                    <input
                        id="firstName"
                        className="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Ivan"
                    />
                    <label htmlFor="lastName" className="vhide">
                        Last name
                    </label>
                    <input
                        id="lastName"
                        className="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Alexandrov"
                    />
                    <label htmlFor="phone" className="vhide">
                        Phone number
                    </label>
                    <input
                        id="phone"
                        className="phone"
                        name="phone"
                        type="text"
                        placeholder="0********"
                    />
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