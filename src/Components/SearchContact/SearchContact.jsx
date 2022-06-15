import { useContext } from 'react';
import { ContactContext } from '../../Context/ContactContext';
import styles from './SearchContact.module.scss';


const SearchContact = () => {
    const {contactQuery, contactSearch} = useContext(ContactContext);
    return (
        <>
            <form className="input-group mx-2 w-25">
                <input type="text" className={`${styles.form_control}`} value={contactQuery.text} onChange={contactSearch} placeholder="جستجو"/>
                <button className="input-group-text btn btn-outline-success" type="submit"><i className="fa fa-search"></i></button>
            </form>
        </>
    )
}

export default SearchContact;