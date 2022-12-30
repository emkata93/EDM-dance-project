import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.scss';
export const Login = () => {
    return (
        <motion.section id="loginPage"
        initial = {{ opacity: 0, x: 100 }}
        animate = {{  opacity: 1, x: 0 }}
        exit = {{ opacity: 0, x: -100 }}
        transition = {{duration: 0.5}}
        >

            <form>
                <fieldset>
                    <legend>Login</legend>
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