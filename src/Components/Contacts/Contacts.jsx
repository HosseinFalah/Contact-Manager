import React from 'react';
import styles from './Contacts.module.scss';
import Contact from '../Contact/Contact';
import ContactNotFound from '../ContactNotFound/ContactNotFound';
import Spinner from './../Spinner/Spinner';

const Contacts = ({contacts, loading}) => {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className={`${styles.btn} ${styles.btn__purple}`}>ساخت مخاطب جدید<i className="fa fa-plus-circle mx-2"></i></button>
                    </div>
                </div>
                {loading ? <Spinner/> : (
                    <div className="container">
                        <div className="row">
                            {contacts.length > 0 ? contacts.map((contact) => (
                                <Contact key={contact.id}/>
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