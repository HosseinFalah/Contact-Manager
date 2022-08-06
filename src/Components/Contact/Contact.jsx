import { Link } from 'react-router-dom';

const Contact = ({contact, deleteContact}) => {
    return (
        <>
            <div className="col col-md-12 col-xl-6">
                <div className="card my-2 bg__card">
                    <div className="card-body">
                        <div className="row align-items-center gy-3 justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                <img src={contact.photo} className="img-fluid rounded" alt={contact.fullname} />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-dark">Last name: <span className='fw-bold'>{contact.fullname}</span></li>
                                    <li className="list-group-item list-group-item-dark">Phone number: <span className='fw-bold'>{contact.mobile}</span></li>
                                    <li className="list-group-item list-group-item-dark">Email: <span className='fw-bold'>{contact.email}</span></li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 d-flex gy-sm-2 flex-row flex-sm-column justify-content-around align-items-center">
                                <Link to={`/contacts/${contact.id}`} className="btn my-1 btn-outline-success"><i className="fa fa-eye"></i></Link>
                                <Link to={`/contacts/edit/${contact.id}`} className="btn my-1 btn-outline-warning"><i className="fa fa-pencil"></i></Link>
                                <button onClick={deleteContact} className="btn my-1 btn-outline-danger"><i className="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}
 
export default Contact;