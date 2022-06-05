import React from 'react';
import styles from './Contacts.module.scss';
import Contact from '../Contact/Contact';
import ContactNotFound from '../ContactNotFound/ContactNotFound';
import Spinner from './../Spinner/Spinner';
import { Link } from 'react-router-dom';

const Contacts = ({contacts, loading, RemoveContact}) => {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-4 p-4">
                        <Link to={"/contacts/add"} className={`${styles.btn} ${styles.btn__purple}`}>ساخت مخاطب جدید<i className="fa fa-plus-circle mx-2"></i></Link>
                    </div>
                </div>
                {loading ? <Spinner/> : (
                    <div className="container">
                        <div className="row">
                            {contacts.length > 0 ? contacts.map((contact) => (
                                <Contact key={contact.id} RemoveContact={() => RemoveContact(contact.id)} contact={contact}/>
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