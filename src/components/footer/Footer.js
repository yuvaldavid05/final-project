import './Footer.css';
import { RiLoginBoxLine } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";


export default function Footer() {

    return (
        <>
            <div className='footerDiv'>
                <div>
                    login/signup
                    <RiLoginBoxLine />
                </div>
                <div>
                    about
                    <FaInfo />

                </div>
                <div>contact</div>
                <div>4</div>
            </div >
        </>
    );
}