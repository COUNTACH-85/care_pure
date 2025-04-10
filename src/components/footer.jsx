import React from 'react';
// import { FaAppleAlt, FaHeartbeat, FaGamepad } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-xl mb-2">CarePure</h3>
        <p className="text-sm">Empowering your health journey with personalized tools, tips, and guidance.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Features</h4>
        <ul className="space-y-1 text-sm">
          <li><a href="#features" className="hover:underline">Diet Planner</a></li>
          <li><a href="#features" className="hover:underline">Health Blogs</a></li>
          <li><a href="#features" className="hover:underline">Wellness Games</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Company</h4>
        <ul className="space-y-1 text-sm">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-green-300"><FaFacebookF className="fab fa-facebook"/></a>
          <a href="#" className="hover:text-green-300"><FaInstagram className="fab fa-instagram"/></a>
          <a href="#" className="hover:text-green-300"><FaTwitter className="fab fa-twitter"/></a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-white/80">
      &copy; {new Date().getFullYear()} CarePure. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;