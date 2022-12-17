import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <section id="loginPage">
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
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </fieldset>
            </form>
        </section>
    )

}