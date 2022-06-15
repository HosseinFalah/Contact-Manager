import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactContext';
import { getContact, updateContact } from '../../Services/contactServices';
import Spinner from '../Spinner/Spinner';

const EditContact = () => {
    const { contactId } = useParams();
    const navigate = useNavigate();
    const { contacts, setContacts, setFilterdContacts, loading, setLoading, groups} = useContext(ContactContext);
    const [contact, setContact] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const {data: contactData} = await getContact(contactId)
                setLoading(false)
                setContact(contactData)
            }catch(err){
                console.log(err.message);
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const onContactChange = event => {
        setContact({...contact, [event.target.name] : event.target.value})
    }

    const submitForm = async event => {
        event.preventDefault()
        try{
            setLoading(true)
            //copry state
            //update state
            //send request
            // status === 200 do nothing
            // status === error setState(copyState)
            const { data, status } = await updateContact(contact, contactId)
            if (status === 200){
                setLoading(false);
                const allContacts = [...contacts];
                const contactIndex = allContacts.findIndex(item => item.id === +contactId)
                allContacts[contactIndex] = {...data};
                setContacts(allContacts)
                setFilterdContacts(allContacts)
                navigate("/contacts");
            }
        }catch(err){
            console.log(err.message);
            setLoading(false)
        }
    }

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <>  
                    {Object.keys(contact).length > 0 && (
                        <section className="p-3">
                            <div className="container">
                                <h4 className="text-success text-center border-bottom border-info pb-3">ویرایش مخاطب</h4>
                                <div className="row pt-2">
                                    <div className="col">
                                        <form autoComplete="off" onSubmit={submitForm}>
                                            <div className="mb-2">
                                                <input name="fullname" type="text" className="form-control" placeholder="نام و نام خانوادگی" required={true} value={contact.fullname} onChange={onContactChange}/>
                                            </div>
                                            <div className="mb-2">
                                                <input name="photo" type="text" className="form-control" placeholder="آدرس تصویر" required={true} value={contact.photo} onChange={onContactChange}/>
                                            </div>
                                            <div className="mb-2">
                                                <input name="mobile" type="tel" dir="rtl" className="form-control" placeholder="شماره موبایل" required={true} value={contact.mobile} onChange={onContactChange}/>
                                            </div>
                                            <div className="mb-2">
                                                <input name="email" type="email" dir="rtl" className="form-control" placeholder="آدرس ایمیل" required={true} value={contact.email} onChange={onContactChange}/>
                                            </div>
                                            <div className="mb-2">
                                                <input name="job" type="text" className="form-control" placeholder="شغل" required={true} value={contact.job} onChange={onContactChange}/>
                                            </div>
                                            <div className="mb-2">
                                                <select name="group" className="form-control" required={true} value={contact.group} onChange={onContactChange}>
                                                    <option value="" className="text-white">انتخاب گروه</option>
                                                    {groups.length > 0 && groups.map((group) => (
                                                        <option key={group.id} value={group.id}>{group.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="mt-1">
                                                <button type="submit" className="btn btn-outline-warning me-2">ویرایش مخاطب</button>
                                                <Link to={"/contacts"} type="submit" className="btn btn-outline-danger">انصراف</Link>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col">
                                        <img src={contact.photo} className="img-fluid" alt="Create-Contact" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>

            )}
        </>
    )
}

export default EditContact