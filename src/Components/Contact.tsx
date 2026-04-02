const Contact = () => {
  return (
    <div className="max-w-full mx-auto pb-16 pt-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 my-8 min-h-[calc(100vh-28.8rem)]">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="heading text-tw-prose-headings text-2xl mb-6 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Contact Us
          </h1>
          <p className="text-justify text-base leading-relaxed text-tw-prose-body mb-6 max-w-3xl ml-5">
            Have questions about ICAC2N 2026? Whether you're interested in attending, submitting a paper, or becoming a sponsor, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 flex flex-col space-y-10 bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-red-100 opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="heading text-tw-prose-headings text-xl mb-6 leading-tight border-l-4 border-red-600 pl-4 text-left flex items-center gap-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Get in Touch
              </h2>
              <div className="space-y-5 text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                  </div>
                  <div>
                    <p className="block text-gray-900 mb-1">General Inquiries</p>
                    <a href="mailto:icac2n.ieee@gmail.com" className="hover:text-red-700 transition duration-200">icac2n.ieee@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="block text-gray-900 mb-1">Dean Contacts</p>
                    <div className="flex flex-col">
                      <a href="mailto:dean.cse@its.edu.in" className="hover:text-red-700 transition duration-200">dean.cse@its.edu.in</a>
                      <a href="mailto:dean.academics@its.edu.in" className="hover:text-red-700 transition duration-200">dean.academics@its.edu.in</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="block text-gray-900 mb-1">Phone Number</p>
                    <a href="tel:+917835878146" className="hover:text-red-700 transition duration-200">+91-7835878146</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 !mt-12">
              <h2 className="heading text-tw-prose-headings text-xl mb-6 leading-tight border-l-4 border-red-600 pl-4 text-left flex items-center gap-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Location
              </h2>
              <div className="flex items-start gap-4 text-gray-600">
                <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <p className="block text-gray-900 mb-1">ITS Engineering College</p>
                  <span className="block leading-relaxed">
                    46, Knowledge Park III,<br/>
                    Greater Noida, Uttar Pradesh 201310
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-red-900/5 border border-gray-100">
            <h2 className="heading text-tw-prose-headings text-2xl mb-2 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">Send us a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll be in touch shortly.</p>
            
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm  text-gray-700">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 p-3.5 transition-colors focus:bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block mb-2 text-sm  text-gray-700">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 p-3.5 transition-colors focus:bg-white" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-sm  text-gray-700">Email Address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 p-3.5 transition-colors focus:bg-white" placeholder="name@company.com" required />
              </div>
              
              <div>
                <label className="block mb-2 text-sm  text-gray-700">Subject <span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 p-3.5 transition-colors focus:bg-white" placeholder="How can we help you?" required />
              </div>
              
              <div>
                <label className="block mb-2 text-sm  text-gray-700">Your Message <span className="text-red-500">*</span></label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 p-3.5 transition-colors focus:bg-white resize-none" placeholder="Write your message here..." required></textarea>
              </div>
              
              <button type="submit" className="w-full sm:w-auto px-10 py-3.5 text-sm  text-white bg-red-800 hover:bg-red-700 rounded-lg shadow-lg hover:shadow-xl hover:shadow-red-800/30 transition-all duration-300 transform hover:-translate-y-0.5 mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Full-width Map Below */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[450px] relative group">
          <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3507.3616437764367!2d77.4886966!3d28.4686536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0bb627ba3f%3A0x98ceba75b8e54979!2sITS%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708071307933!5m2!1sen!2sin"
              className="w-full h-full border-0 relative z-0 filter contrast-100 saturate-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

      </div>
    </div>
  );
};
export default Contact;
