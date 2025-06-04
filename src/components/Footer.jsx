import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaUsers, FaWhatsapp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile App Section */}
        <div className="bg-gray-700 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">APPLY TO JOBS ON-THE-GO</h3>
              <p className="text-blue-400 text-lg mb-6">Jobringer Mobile App</p>
              <div className="flex gap-4">
                <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-500 text-xl">▶</span>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
                <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-white text-xl">🍎</span>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-lg">
                Mobile App <span className="text-blue-400 font-semibold">Download</span>
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-lg">Download our mobile app for easy job searching</p>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="bg-gray-700 rounded-lg p-6 mb-8">
          <h4 className="font-semibold mb-2">Disclaimer:</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. 
            Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are 
            advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Job seeker 
            services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers 
            to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & 
            evaluation. We do not guarantee any job to any jobseeker.
          </p>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-sm mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms and conditions</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Refund / Cancellation Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Blogs</a>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm">Follow us on</span>
              <div className="flex gap-3">
                <FaRegCommentDots className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaFacebookF className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaTwitter className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaInstagram className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaLinkedinIn className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaYoutube className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaUsers className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 Jobringer. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Recognized By</span>
              <span className="text-orange-500 font-bold">#startupIndia</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Float */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors">
          <FaWhatsapp className="h-6 w-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
