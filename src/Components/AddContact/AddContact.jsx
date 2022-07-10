import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";
import Spinner from "../Spinner/Spinner";
import './AddContact.scss'

const AddContact = () => {
    const { loading, contact, onContactChange, groups, createContact } = useContext(ContactContext)
    return (
        <>
            {loading ? (<Spinner/>) : (
                <section className="p-3">
                    <div className="container">
                        <h4 className="text-success text-center border-bottom border-info pb-3">Create a new contact</h4>
                        <div className="row pt-2">
                            <div className="col-12 col-lg-6">
                                <form autoComplete="off" onSubmit={createContact}>
                                    <div className="mb-2">
                                        <input name="fullname" type="text" className="form-control" placeholder="FirstName And LastName" required={true} value={contact.fullname} onChange={onContactChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="photo" type="text" className="form-control" placeholder="Image address" required={true} value={contact.photo} onChange={onContactChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="mobile" type="tel" className="form-control" placeholder="PhoneNumber" required={true} value={contact.mobile} onChange={onContactChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="email" type="email" className="form-control" placeholder="E-mail" required={true} value={contact.email} onChange={onContactChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="job" type="text" className="form-control" placeholder="jobs" required={true} value={contact.job} onChange={onContactChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <select name="group" className="form-control" required={true} value={contact.group} onChange={onContactChange}>
                                            <option value="" className="text-white">Select Groups</option>
                                            {groups.length > 0 && groups.map((group) => (
                                                <option key={group.id} value={group.id}>{group.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mt-1">
                                        <button type="submit" className="btn btn-outline-success me-2">Create Contact</button>
                                        <Link to={"/contacts"} type="submit" className="btn btn-outline-danger">Cancel</Link>
                                    </div>
                                </form>
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