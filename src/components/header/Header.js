import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <header>
            <nav>  
                
                <div className='container blue circleBehind'>
             
                    {/*All user*/}
                        <Link to="/">Home</Link>
                        
                        <Link to="/catalog">Catalog</Link>
                    
                  
                        <Link to="/search">Search</Link>
                 
                    {/*Only guest*/}
                   
                        <Link to="/login">Login</Link>
                    
                    
                        <Link to="/register">Register</Link>
                    
                    
                        <Link to="/">Logout</Link>
                        </div>
                
            </nav>
        </header>)
}