import React from 'react';
import styles from './Contacts.module.scss';
import Contact from '../Contact/Contact';

const Contacts = () => {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className={`${styles.btn} ${styles.btn__purple}`}>ساخت مخاطب جدید<i className="fa fa-plus-circle mx-2"></i></button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Contact/>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Contacts;