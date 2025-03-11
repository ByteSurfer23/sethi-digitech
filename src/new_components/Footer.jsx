import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
      <footer className="text-white py-8 px-4 md:px-10 w-full bg-stone-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
          <img 
  src="https://res.cloudinary.com/ddljq4uyx/image/upload/v1741679305/Sethi_DigiTech_Logo_ainocd.svg" 
  alt="Logo" 
  className="w-[60px] h-[75px]" 
/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/training" className="hover:text-white">AI Bootcamp</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://www.linkedin.com/company/sethi-digitech-agency/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/sethidigitech/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white mt-2"
            />
            <button className="mt-2 bg-blue-500 px-4 py-2 rounded text-white">Subscribe</button>
          </div> 
        </div>
        <div className="text-center text-gray-400 mt-6 text-sm">
          © 2025 Sethi DigiTech. All rights reserved. | <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | <Link to="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </footer>
      
      
  );
};

export default Footer;
