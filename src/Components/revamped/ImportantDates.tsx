import {ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ImportantDates = () => {
  const dates = [
    { title: "Paper Submission Starts", date: "01/10/2025", isPast: false },
    { title: "Paper Submission Deadline", date: "30/04/2026", isUrgent: true },
    { title: "Notification of Acceptance", date: "30/06/2026", sub: "Within 6-8 weeks" },
    { title: "Registration Opens", date: "14/07/2026" },
    { title: "Camera Ready Paper", date: "31/07/2026" },
    { title: "Conference Dates", date: "30-31 Oct '26", isMain: true },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Elegant Timeline */}
          <div className="w-full lg:w-7/12">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Milestones & Dates</h2>
              <p className="text-lg text-slate-500 font-medium">Keep track of the important deadlines to ensure your participation.</p>
            </div>
            
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pl-8 md:pl-12">
              {dates.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-125
                    ${item.isUrgent ? 'bg-red-500' : item.isMain ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-blue-400'}`} 
                  />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${item.isUrgent ? 'text-red-700' : item.isMain ? 'text-blue-700' : 'text-slate-900'}`}>{item.title}</h3>
                      {item.sub && <p className="text-sm font-medium text-slate-500">{item.sub}</p>}
                    </div>
                    <div className="shrink-0 bg-slate-50 px-4 py-2 rounded-xl text-slate-700 font-bold border border-slate-100 group-hover:bg-slate-100 transition-colors">
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Floating Action Cards */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:sticky lg:top-24">
             
             {/* Primary Action Card */}
             <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl p-8 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                  <FileText size={120} />
               </div>
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                   Action Required
                 </div>
                 <h3 className="text-3xl font-bold mb-3">Submit your PPT</h3>
                 <p className="text-blue-100 font-medium mb-8 max-w-[280px]">
                   Authorised presentation submission portal for accepted candidates.
                 </p>
                 <Link to="https://forms.gle/BEaCfyGJwSNbuuHPA" className="inline-flex items-center justify-between w-full p-4 bg-white text-blue-900 rounded-2xl hover:bg-slate-50 transition-colors font-bold shadow-lg">
                   Go to Submission Form <ArrowUpRight className="w-5 h-5 text-blue-600" />
                 </Link>
               </div>
             </div>

             {/* Resources Links */}
             <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-200/60">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Conference Resources</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link to="https://conference-website-beryl.vercel.app" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <span className="font-bold text-slate-700 group-hover:text-slate-900">Past Conference Site</span>
                      </div>
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://ieeexplore.ieee.org/xpl/conhome/10894760/proceeding" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <span className="font-bold text-slate-700 group-hover:text-slate-900">IEEE Xplore Proceedings</span>
                      </div>
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/cmt-acknowledgement" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <span className="font-bold text-slate-700 group-hover:text-slate-900">CMT Acknowledgement</span>
                      </div>
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600" />
                    </Link>
                  </li>
                </ul>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
