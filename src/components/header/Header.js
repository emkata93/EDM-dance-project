import { Link } from 'react-router-dom';
import './Header.scss';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
    const { auth } = useContext(AuthContext);

    return (
        <header>
            <nav>

                <div className='container blue circleBehind'>

                    {auth.userName && <span>Welcome,{auth.userName}</span>}
                    {auth.userName
                        ? <>
                            <Link to="/">Home</Link>
                            <Link to="/catalog">Catalog</Link>
                            <Link to="/search">Search</Link>
                            <Link to="/logout">Logout</Link>
                        </>
                        : <>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }

                </div>

            </nav>
        </header>)
}