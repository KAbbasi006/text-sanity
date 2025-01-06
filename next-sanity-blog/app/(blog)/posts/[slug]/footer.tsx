import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#124E66] text-white py-10">
      <div className="container mx-auto px-5">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Title */}
          <div className="mb-5 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              CodeStep
            </h2>
            <p className="text-sm">Learning Web Development as a Beginner</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 text-white text-center">
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/#blg">
              Blog
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-600"></div>

        {/* Social Media Links */}
        <div className="flex justify-center text-white space-x-6 mb-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
    
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
    
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
    
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
    
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">&hearts;</span> by Komal
          </p>
        </div>
      </div>
    </footer>
  );
}
