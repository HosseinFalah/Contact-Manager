import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactContext';
import { getContact, updateContact } from '../../Services/contactServices';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from '../../Validations/contactValidation';
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

    const submitForm = async values => {
        try{
            setLoading(true)
            //copry state
            //update state
            //send request
            // status === 200 do nothing
            // status === error setState(copyState)
            const { data, status } = await updateContact(values, contactId)
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
                                <h4 className="text-success text-center border-bottom border-info pb-3">Edit Contact</h4>
                                <div className="row pt-2">
                                    <div className="col-12 col-lg-6 mb-2">
                                        <Formik
                                            initialValues={contact}
                                            validationSchema={ contactSchema }
                                            onSubmit={values => {
                                                console.log(values);
                                                submitForm(values)
                                            }}
                                        >
                                            <Form autoComplete="off">
                                                <div className="mb-2">
                                                    <Field name="fullname" type="text" className="form-control" placeholder="FirstName And LastName"/>
                                                    <ErrorMessage name="fullname" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                                </div>
                                                <div className="mb-2">
                                                    <Field name="photo" type="text" className="form-control" placeholder="Image address"/>
                                                    <ErrorMessage name="photo" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                                </div>
                                                <div className="mb-2">
                                                    <Field  name="mobile" type="tel" className="form-control" placeholder="PhoneNumber"/>
                                                    <ErrorMessage name="mobile" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                                </div>
                                                <div className="mb-2">
                                                    <Field name="email" type="email" className="form-control" placeholder="E-mail"/>
                                                    <ErrorMessage name="email" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                                </div>
                                                <div className="mb-2">
                                                    <Field name="job" type="text" className="form-control" placeholder="jobs"/>
                                                    <ErrorMessage name="job" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                                </div>
                                                <div className="mb-2">
                                                    <Field name="group" as="select" className="form-control">
                                                        <option value="" className="text-white">Select Groups</option>
                                                            {groups.length > 0 && groups.map((group) => (
                                                                <option key={group.id} value={group.id}>{group.name}</option>
                                                            ))}
                                                    </Field>
                                                    <ErrorMessage name="group" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                                </div>
                                                <div className="mt-1">
                                                    <button type="submit" className="btn btn-outline-success me-2">Edit Contact</button>
                                                    <Link to={"/contacts"} type="submit" className="btn btn-outline-danger">Cancel</Link>
                                                </div>
                                            </Form>
                                        </Formik>
                                    </div>
                                    <div className="col-12 col-lg-6">
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