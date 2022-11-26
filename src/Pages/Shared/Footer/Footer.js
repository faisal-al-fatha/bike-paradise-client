import { FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from '../../../Resourses/icon.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:p-8 divide-gray-400">
            <div className='flex justify-center'>
            <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-center gap-7 mb-3">
                <li>Categories</li>
                <li>About</li>
                <li>Blog</li>
                <li>LogIn</li>
                <li>SignUp</li>
            </ul>
            </div>
            <div className="flex flex-col justify-center pt-6 lg:pt-0">
                <div className="flex justify-center space-x-4">
                    <Link rel="noopener noreferrer" to='/' title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-emerald-400 dark:text-gray-900">
                        <FaInstagram></FaInstagram>
                    </Link>
                    <Link rel="noopener noreferrer" to='/' title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-emerald-400 dark:text-gray-900">
                        <FaPinterest></FaPinterest>
                    </Link>
                    <Link rel="noopener noreferrer" to='/' title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-emerald-400 dark:text-gray-900">
                        <FaTwitter></FaTwitter>
                    </Link>
                    <Link rel="noopener noreferrer" to='/' title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-emerald-400 dark:text-gray-900">
                    <FaFacebookF></FaFacebookF>
                    </Link>
                    <Link rel="noopener noreferrer" to='/' title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-emerald-400 dark:text-gray-900">
                       <FaGoogle></FaGoogle>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center my-4'>
            <Link
              to="/"
              aria-label="Bike Paradise"
              title="Bike Paradise"
              className="inline-flex items-center"
            >
              <img src={logo} className= "w-12" alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Bike Paradise
              </span>
            </Link>
            </div>
        </div>
    </footer>
    );
};

export default Footer;