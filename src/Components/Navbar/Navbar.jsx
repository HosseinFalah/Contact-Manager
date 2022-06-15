import SearchContact from './../SearchContact/SearchContact';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const location = useLocation();
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm shadow-lg">
                <div className="container">
                    <Link to={'/contacts'} className="navbar-brand text-white text-center d-flex align-items-center mt-2"><i className="fa fa-address-book text-warning me-2"></i>مدیریت مخاطبین</Link>
                    {
                        location.pathname === "/contacts" ? (
                            <SearchContact/>
                        ) : null
                    }
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;