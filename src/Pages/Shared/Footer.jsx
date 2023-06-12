import logo from "../../../public/logo.svg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p className="normal-case text-xs"> <span className="font-bold text-xl">Creative</span><span className="text-blue-700 font-bold text-xl">Campers</span> <br /> by BlueDot Academy</p>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <a className="link link-hover">Summer Camp</a>
                    <a className="link link-hover">BlueDot</a>
                    <a className="link link-hover">Our History</a>
                    <a className="link link-hover">Achievements</a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <p>+880 123 456 7582</p>
                    <p>3422 Hardesty Street <br />Albany, New York</p>
                    <p>info@ccampers.com</p>
                </div>
                <div>
                    <span className="footer-title">Follow Us</span>
                    <div className="flex gap-4 items-center">
                        <FaFacebook className="text-2xl link" />
                        <FaTwitter className="text-2xl link" />
                        <FaInstagram className="text-2xl link" />
                    </div>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by BlueDot Academy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;