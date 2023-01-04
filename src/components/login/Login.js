import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import { motion } from 'framer-motion';
import './Login.scss';

export const Login = () => {
    const { userLoginHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const { userName, password } = Object.fromEntries(new FormData(e.target));

        fetch(`api/UserActions/Login`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                password,
            })
        })
            .then(response => response.text())
            .then(result => {
                if (result == "User does not exists") {
                    alert('Incorrect username or password')
                } else {
                    userLoginHandler({ accessToken: result, userName });
                    navigate('/');
                }
            })
    }

    return (
        <motion.section id="loginPage"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >

            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="email" className="vhide">
                        Username
                    </label>
                    <input
                        id="userName"
                        className="userName"
                        name="userName"
                        type="text"
                        placeholder="username"
                    />
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
                    <button type="submit" className="login">
                        Login
                    </button>
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>.
                        </span>
                    </p>
                </fieldset>
            </form>
        </motion.section>
    )

}