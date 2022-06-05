import React from 'react'
import styles from './SearchContact.module.scss';

const SearchContact = ({query, search}) => {
    return (
        <>
            <form className="input-group mx-2 w-25">
                <input type="text" className={`${styles.form_control}`} value={query.text} onChange={search} placeholder="جستجو"/>
                <button className="input-group-text btn btn-outline-success" type="submit"><i className="fa fa-search"></i></button>
            </form>
        </>
    )
}

export default SearchContact;