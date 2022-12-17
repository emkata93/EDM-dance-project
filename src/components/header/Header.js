import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <img src="./images/dance.jpg" />
                <Link to="/">Home</Link>
                <ul>
                    {/*All user*/}
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    {/*Only guest*/}
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>)
}