import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import './AddContact.scss'

const AddContact = ({ loading, contact, setContactInfo, groups, createContactForm }) => {
    return (
        <>
            {loading ? (<Spinner/>) : (
                <section className="p-3">
                    <div className="container">
                        <h4 className="text-success text-center border-bottom border-info pb-3">ساخت مخاطب جدید</h4>
                        <div className="row pt-2">
                            <div className="col">
                                <form autoComplete="off" onSubmit={createContactForm}>
                                    <div className="mb-2">
                                        <input name="fullname" type="text" className="form-control" placeholder="نام و نام خانوادگی" required={true} value={contact.fullname} onChange={setContactInfo}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="photo" type="text" className="form-control" placeholder="آدرس تصویر" required={true} value={contact.photo} onChange={setContactInfo}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="mobile" type="tel" dir="rtl" className="form-control" placeholder="شماره موبایل" required={true} value={contact.mobile} onChange={setContactInfo}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="email" type="email" dir="rtl" className="form-control" placeholder="آدرس ایمیل" required={true} value={contact.email} onChange={setContactInfo}/>
                                    </div>
                                    <div className="mb-2">
                                        <input name="job" type="text" className="form-control" placeholder="شغل" required={true} value={contact.job} onChange={setContactInfo}/>
                                    </div>
                                    <div className="mb-2">
                                        <select name="group" className="form-control" required={true} value={contact.group} onChange={setContactInfo}>
                                            <option value="" className="text-white">انتخاب گروه</option>
                                            {groups.length > 0 && groups.map((group) => (
                                                <option key={group.id} value={group.id}>{group.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mt-1">
                                        <button type="submit" className="btn btn-outline-success me-2">ساخت مخاطب</button>
                                        <Link to={"/contacts"} type="submit" className="btn btn-outline-danger">انصراف</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="col">
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