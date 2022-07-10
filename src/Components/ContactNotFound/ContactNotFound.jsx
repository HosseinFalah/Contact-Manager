import style from './ContactNotFound.module.scss';

const ContactNotFound = () => {
    return (
        <div className={`text-center py-5 ${style.bg__secondery} rounded`}>
            <p className="h3 text-warning mb-3">Not Found Contact🥲</p>
            <img src={require("../../asset/Images/NotFound.jpg")} className="w-25" alt="NotFound" />
        </div>
    );
}
 
export default ContactNotFound;