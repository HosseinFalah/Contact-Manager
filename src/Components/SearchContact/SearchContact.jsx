import { useContext } from 'react';
import { ContactContext } from '../../Context/ContactContext';
import styles from './SearchContact.module.scss';
import Nav from 'react-bootstrap/Nav';

const SearchContact = () => {
    const { contactSearch } = useContext(ContactContext);
    return (
        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <form className="d-flex mx-2 ml-auto w-25">
                <input type="text" className={`${styles.form_control}`} onChange={event => contactSearch(event.target.value)} placeholder="Search ..."/>
                <button className="input-group-text btn btn-outline-success" type="submit"><i className="fa fa-search"></i></button>
            </form>
        </Nav>
    )
}

export default SearchContact;