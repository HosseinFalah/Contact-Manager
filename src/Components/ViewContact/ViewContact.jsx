import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getContact, getGroup } from '../../Services/contactServices';
import Spinner from '../Spinner/Spinner';
import styles from '../ViewContact/viewContact.module.scss'

const ViewContact = () => {
    const { contactId } = useParams();
    const [state, setState] = useState({
        loading: false,
        contact: {},
        group: {},
    })

    useEffect(() => {
        const fetchData = async () => {
            try{
                setState({...state, loading: true})
                const {data: contactData} = await getContact(contactId)
                const {data: groupData} = await getGroup(contactData.group)
                setState({...state, loading: false, contact: contactData, group: groupData})
            }catch(err){
                console.log(err.message);
                setState({...state, loading: false})
            }
        }
        fetchData()
    }, [])
    const {loading, contact, group} = state
    console.log(group);
    return (
        <>
            {loading ? (<Spinner/>) : (
                <section className="p-3">
                    <div className="container">
                        <h4 className="text-success text-center border-bottom border-info pb-3">اطلاعات مخاطب</h4>
                        <div className="row pt-2">
                            <div className="col">
                                <div className={`card my-2 ${styles.bg__card}`}>
                                    <div className="card-body">
                                        <div className="row align-items-center justify-content-around">
                                            <div className="col-md-4 col-sm-4">
                                                <img src={contact.photo} className="img-fluid rounded" alt={contact.fullname} />
                                            </div>
                                            <div className="col-md-8 col-sm-8">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-dark">نام خانوادگی: <span className='fw-bold'>{contact.fullname}</span></li>
                                                    <li className="list-group-item list-group-item-dark">شماره تماس: <span className='fw-bold'>{contact.mobile}</span></li>
                                                    <li className="list-group-item list-group-item-dark">ایمیل: <span className='fw-bold'>{contact.email}</span></li>
                                                    <li className="list-group-item list-group-item-dark">شغل: <span className='fw-bold'>{contact.job}</span></li>
                                                    <li className="list-group-item list-group-item-dark">گروه: <span className='fw-bold'>{group.name}</span></li>
                                                </ul>
                                            </div>
                                            <Link to={"/contacts"} className="btn btn-outline-primary mt-2">بازگشت به صفحه اصلی</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default ViewContact