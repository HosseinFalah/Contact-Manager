import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../../Validations/contactValidation";
import Spinner from "../Spinner/Spinner";

const AddContact = () => {
    const { loading, groups, createContact } = useContext(ContactContext);
    return (
        <>
            {loading ? (<Spinner/>) : (
                <section className="p-3">
                    <div className="container">
                        <h4 className="text-success text-center border-bottom border-info pb-3">Create a new contact</h4>
                        <div className="row pt-2">
                            <div className="col-12 col-lg-6">
                                <Formik
                                    initialValues={{
                                        fullname: "",
                                        photo: "",
                                        mobile: "",
                                        email: "",
                                        job: "",
                                        group: ""
                                    }}
                                    validationSchema={ contactSchema }
                                    onSubmit={values => {
                                        console.log(values);
                                        createContact(values)
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
                                                <button type="submit" className="btn btn-outline-success me-2">Create Contact</button>
                                                <Link to={"/contacts"} type="submit" className="btn btn-outline-danger">Cancel</Link>
                                            </div>
                                        </Form>
                                </Formik>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img src={require("../../asset/Images/man-taking-note.png")} className="img-fluid" alt="Create-Contact" />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default AddContact