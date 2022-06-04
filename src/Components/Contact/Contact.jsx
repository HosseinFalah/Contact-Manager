import styles  from './Contact.module.scss'

const Contact = ({contact}) => {
    return (
        <>
            <div className="col-md-6">
                <div className={`card my-2 ${styles.bg__card}`}>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                <img src={contact.photo} className="img-fluid rounded" alt={contact.fullname} />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-dark">نام خانوادگی: <span className='fw-bold'>{contact.fullname}</span></li>
                                    <li className="list-group-item list-group-item-dark">شماره تماس: <span className='fw-bold'>{contact.mobile}</span></li>
                                    <li className="list-group-item list-group-item-dark">ایمیل: <span className='fw-bold'>{contact.email}</span></li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                                <button className="btn my-1 btn-outline-success"><i className="fa fa-eye"></i></button>
                                <button className="btn my-1 btn-outline-warning"><i className="fa fa-pencil"></i></button>
                                <button className="btn my-1 btn-outline-danger"><i className="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}
 
export default Contact;