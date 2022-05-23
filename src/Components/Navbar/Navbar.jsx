import SearchContact from './../SearchContact/SearchContact';
import './Navbar.scss'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm shadow-lg">
                <div className="container">
                    <h1 className="navbar-brand text-white text-center d-flex align-items-center mt-2"><i className="fa fa-address-book text-warning me-2"></i>مدیریت مخاطبین</h1>
                    <SearchContact/>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;