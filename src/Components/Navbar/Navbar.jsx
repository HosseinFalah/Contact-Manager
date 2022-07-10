import { useState } from 'react';
import SearchContact from '../SearchContact/SearchContact';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const location = useLocation();
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link to={'/contacts'} className="navbar-brand text-white text-center d-flex align-items-center mt-2"><Navbar.Brand><i className="fa fa-address-book text-warning me-2"></i>Contact Management</Navbar.Brand></Link>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" onClick={handleNav}>
                        {
                            location.pathname === "/contacts" ? (
                                <SearchContact/>
                            ) : null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
 
export default NavBar;