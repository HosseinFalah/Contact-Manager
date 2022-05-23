import style from './ContactNotFound.module.scss';

const ContactNotFound = () => {
    return (
        <div className={`text-center py-5 ${style.bg__secondery} rounded`}>
            <p className="h3 text-warning mb-3">هیچ مخاطبی پیدا نشد🥲</p>
            <img src={require("../../asset/Images/NotFound.jpg")} className="w-25" alt="پیدا نشد" />
        </div>
    );
}
 
export default ContactNotFound;