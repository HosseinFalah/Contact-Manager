import SpinnerGIF from '../../asset/Images/Loading&&Spinner.gif';

const Spinner = () => {
    return (
        <>
            <img className="d-block m-auto img-fluid w-50 h-50" src={SpinnerGIF} alt="loadingBar"/>
        </>
    );
}
 
export default Spinner;