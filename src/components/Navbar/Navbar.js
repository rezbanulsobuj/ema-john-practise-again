
import './Navbar.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const haldleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='navbar-container'>
            <img src={logo} alt="" />
            <div className='navbar-info'>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user ?
                    <button className='btn' onClick={haldleSignOut}>Sign Out</button>
                    :
                    <Link to="/login">Login</Link>}


            </div>
        </div>
    );
};

export default Navbar;