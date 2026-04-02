import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Themes & Guidelines", to: "/guidelines" },
  { label: "Gallery", to: "/gallery/2025" },
  { label: "Speakers", to: "/speakers" },
  { label: "Committee", to: "/committee/organizing-committee" },
  { label: "Call for Papers", to: "/call-for-papers" },
  { label: "Register", to: "/register" },
  { label: "Contact", to: "/contact" },
  { label: "CMT Access", to: "/cmt-acknowledgement" },
];

const RevampedFooter = () => {
  return (
    <footer className="w-full bg-red-900 border-t border-red-950 mt-auto">
      {/* Top section */}
      <div className="w-full px-2 sm:px-6 lg:px-12 py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6">
        
        {/* Branding & Description (Occupies more space) */}
        <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dzgfsbzh6/image/upload/v1754138063/samples/Logo_a8pld4.jpg"
              alt="ICAC2N Logo"
              className="h-14 w-14 object-contain rounded-md shadow-sm border border-red-700 bg-white"
            />
            <span className="text-3xl text-white tracking-tight leading-none">
              ICAC2N 2026
            </span>
          </div>
          <p className="text-[15px] sm:text-[16px] text-red-100 leading-[1.7] max-w-md text-justify">
            International Conference on Advances in Computing, Communication and Networking (ICAC2N–26). Exploring the future of technology and fostering global academic collaboration.
          </p>
          <div className="mt-1 p-4 bg-red-950/50 border-l-4 border-red-900 rounded-r-sm">
            <p className="text-[14px] sm:text-[15px] text-white font-medium leading-[1.6]">
              Department of Computer Science and Engineering<br />
              <span className="text-red-200 font-normal">I.T.S Engineering College, Greater Noida</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-6 lg:col-span-4 lg:pl-12">
          <h3 className="text-[18px] sm:text-[20px] text-white mb-6">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 pl-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[15px] text-red-100 hover:text-red-900 hover:translate-x-1 transition-all duration-300 block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-6 lg:col-span-3">
          <h3 className="text-[18px] sm:text-[20px] text-white mb-6">Connect With Us</h3>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:dean.cse@its.edu.in" className="inline-flex items-center gap-3 text-[15px] text-red-100 hover:text-red-900 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-red-800 border border-red-700 flex items-center justify-center group-hover:border-red-900/50 group-hover:bg-red-900/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white group-hover:text-red-900" fill="currentColor"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/></svg>
              </div>
              dean.cse@its.edu.in
            </a>
            <a href="mailto:dean.academics@its.edu.in" className="inline-flex items-center gap-3 text-[15px] text-red-100 hover:text-red-900 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-red-800 border border-red-700 flex items-center justify-center group-hover:border-red-900/50 group-hover:bg-red-900/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white group-hover:text-red-900" fill="currentColor"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/></svg>
              </div>
              dean.academics@its.edu.in
            </a>
            
            <a href="tel:+917835878146" className="inline-flex items-center gap-3 text-[15px] text-red-100 hover:text-red-900 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-red-800 border border-red-700 flex items-center justify-center group-hover:border-red-900/50 group-hover:bg-red-900/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white group-hover:text-red-900" fill="currentColor"><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
              </div>
              +91-7835878146
            </a>
            
            <div className="flex gap-3 mt-3">
              <a href="https://twitter.com/ITSengggn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 hover:text-[#111827] transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
              </a>
              <a href="https://www.facebook.com/ITSengggn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 hover:text-[#111827] transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#5c1313] border-t border-red-900">
        <div className="w-full px-2 sm:px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[14px] text-red-200 font-medium text-center md:text-left">
            © 2026 ICAC2N. All rights reserved.
          </p>
          <p className="text-[14px] text-red-200 font-medium text-center md:text-right">
            Developed by{" "}
            <a href="https://www.linkedin.com/in/er-anubhav/" className="text-white hover:text-red-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-900 hover:after:w-full after:transition-all after:duration-300">Anubhav Tripathi</a>,{" "}
            <a href="https://www.linkedin.com/in/deepak-kumar-007bbb307/" className="text-white hover:text-red-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-900 hover:after:w-full after:transition-all after:duration-300">Deepak Kumar</a> &{" "}
            <a href="https://www.linkedin.com/in/samvar-jain/" className="text-white hover:text-red-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-900 hover:after:w-full after:transition-all after:duration-300">Samvar Jain</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default RevampedFooter;
