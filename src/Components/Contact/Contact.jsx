import profile from '../../asset/Images/Profile_hossein.jpg'
import styles  from './Contact.module.scss'

const Contact = () => {
    return (
        <>
            <div className="col-md-6">
                <div className={`card my-2 ${styles.bg__card}`}>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                <img src={profile} className="img-fluid rounded" alt="" />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-dark">نام خانوادگی: <span className='fw-bold'>حسین فلاح</span></li>
                                    <li className="list-group-item list-group-item-dark">شماره تماس: <span className='fw-bold'>09922477517</span></li>
                                    <li className="list-group-item list-group-item-dark">ایمیل: <span className='fw-bold'>hosseinfalah2021@gmail.com</span></li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                                <button className="btn my-1 btn-outline-success"><i className="fa fa-eye"></i></button>
                                <button className="btn my-1 btn-outline-warning"><i class="fa fa-pencil"></i></button>
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