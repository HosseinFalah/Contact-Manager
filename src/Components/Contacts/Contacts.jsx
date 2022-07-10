import React, { useContext } from 'react';
import Contact from '../Contact/Contact';
import ContactNotFound from '../ContactNotFound/ContactNotFound';
import Spinner from './../Spinner/Spinner';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import { ContactContext } from '../../Context/ContactContext'; 

const Contacts = () => {
    const {filterdContacts, loading, deleteContact} = useContext(ContactContext);
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-4 p-4">
                        <Link to={"/contacts/add"} className={`${styles.btn} ${styles.btn__purple}`}>Create Contact<i className="fa fa-plus-circle mx-2"></i></Link>
                    </div>
                </div>
                {loading ? <Spinner/> : (
                    <div className="container">
                        <div className="row">
                            {filterdContacts.length > 0 ? filterdContacts.map((contact) => (
                                <Contact key={contact.id} deleteContact={() => deleteContact(contact.id)} contact={contact}/>
                            )): (
                                <ContactNotFound/>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
 
export default Contacts;