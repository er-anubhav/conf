import { Link } from "react-router-dom";
import { UsersRound, ArrowRight } from "lucide-react";
import ChromaGrid, { ChromaItem } from "./ChromaGrid";

// (Speakers array remains identical)
const speakers = [
  {
    name: "Prof. (Dr.) S. K. Singh",
    role: "National Speaker",
    title: "Vice Chancellor, Rajasthan Technical University, Kota",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/gvxgxu0hevraexehrjx3.jpg",
  },
  {
    name: "Dr. Akhilesh Tiwari",
    role: "National Speaker",
    title: "Secretary IEEE and Associate Professor in IIIT Allahabad",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/xh1ay7h3tovn6vttzcwn.jpg",
  },
  {
    name: "Dr. Virender Ranga",
    role: "National Speaker",
    title: "Associate Professor, Department of Information Technology, Delhi Technological University",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452019/ConferenceAssets/mpb5dwnyzjdrcghbkef0.jpg",
  },
  {
    name: "Prof. (Dr.) P. Nagabhushan",
    role: "National Speaker",
    title: "Vice-Chancellor, Vignan's Foundation for Science, Technology & Research, Andhra Pradesh",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/irbpoz8ub3209wf4wjp5.jpg",
  },
  {
    name: "Prof. (Dr.) Satish K. Singh",
    role: "National Speaker",
    title: "IIIT Allahabad / Section Chair, IEEE UP Section.",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/n6q7ktwnnub0ommxgomd.jpg",
  },
  {
    name: "Prof. (Dr.) Shaymaa R. Tahhan",
    role: "International Speaker",
    title: "Laser and Optoelectronics Department, College of Engineering, Al-Nahrain University, Baghdad, Iraq",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528683/ConferenceAssets/yd7bayfsfws9uit52zmx.jpg",
  },
  {
    name: "Prof. (Dr.) Anand Nayyar",
    role: "International Speaker",
    title: "School of Computer Science, Faculty of Information Technology, Duy Tan University, Da Nang, Viet Nam",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/l2cl874gzorwdjklangb.jpg",
  },
  {
    name: "Dr. Sandeep Kajal",
    role: "International Speaker",
    title: "Postdocotral Researcher at the Department of Mechanical and Material Enginnering, University of Western Ontario, Canada",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/gnadmkcrpkfc0fvonpej.jpg",
  },
  {
    name: "Dr. Ajay Beniwal",
    role: "International Speaker",
    title: "Marie Curie Fellow at University of Glasgow, United Kingdom",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/hvaxgucrjogkzmmelhbq.jpg",
  },
  {
    name: "Prof. Dr. Neyara Radwan",
    role: "International Speaker",
    title: "Associate Professor Industrial Engineering Dept., College of Applied Sciences, AL MAAREFA UNIVERSITY, Saudi Arabia & Mechanical Dept.",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/evctl9ybkyy4xdha0sqk.jpg",
  },
  {
    name: "Dr. Ahmed A. Elngar",
    role: "International Speaker",
    title: "Associate Professor, Faculty of CS and AI, Beni-Suef University, Beni-Suef City, 62511, Egypt",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/rvtqaqd2gl7wupnw8j0a.jpg",
  },
  {
    name: "Dr. Kashif Nisar",
    role: "International Speaker",
    title: "Swinburne University of Technology, Sydney, New South Wales, Australia",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/mlctgifpndbsn1p2e9sg.jpg",
  },
  {
    name: "Dr. Ana Clarke",
    role: "International Speaker",
    title: "Founder and CEO of AC SmartData",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/ci1vwoyuhrum4ashujvn.jpg",
  },
  {
    name: "Prof. Nada Ratković",
    role: "International Speaker",
    title: "Assistant Professor, Department of Quantitative Methods on Faculty of Economics, Business and Tourism, University Split.",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/dggqlawqezcvneess62a.jpg",
  },
  {
    name: "Prof. (Dr.) Deepak Garg",
    role: "National Speaker",
    title: "Vice Chancellor @ SR University | PhD in AI | Founder leadingindia.ai",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/sbbsc4xwoc1l9qogy9tr.jpg",
  },
  {
    name: "Prof. (Dr.) Asheesh K. Singh",
    role: "National Speaker",
    title: "Professor EE Department, MNNIT, Allahabad / Immediate Past Section Chair, IEEE UP Section",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/wzcnjyljg4jigusvcmhx.jpg",
  },
  {
    name: "Prof. (Dr.) Prabhakar Tiwari",
    role: "National Speaker",
    title: "MMMUT, Gorakhpur/ Secretary, IEEE U.P. Section",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/ww12ga3i21esptn3ij7s.jpg",
  },
  {
    name: "Prof. (Dr.) Malay Kishore Dutta",
    role: "National Speaker",
    title: "Director, Centre for Artificial Intelligence & Dean Student Research, Amity University, Noida, India",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/u1sr91reu5ae1eqnjtmy.jpg",
  },
  {
    name: "Prof. (Dr.) Neetesh Purohit",
    role: "National Speaker",
    title: "Director, SGSITS, Indore",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/lcs6eejonbemwbeafix8.jpg",
  },
  {
    name: "Prof. (Dr.) N. Badal",
    role: "National Speaker",
    title: "Director, REC, Bijnor (U.P.), India",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/zog1nzfyisblpai12ibq.jpg",
  },
  {
    name: "Prof. (Dr.) J Ramkumar",
    role: "National Speaker",
    title: "Professor, IIT Kanpur India, Ex Chair of IEEE UP",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/bysze53ht5kdi2hwicbo.jpg",
  },
  {
    name: "Prof. (Dr.) Rajiv Saxena",
    role: "National Speaker",
    title: "Vice Chancellor, Jaypee University, Anoopshahr",
    image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/agwdve3ak2bmgdfujfj0.jpg",
  }
];

const SpeakersSection = () => {
  const items: ChromaItem[] = speakers.map(speaker => ({
    image: speaker.image,
    title: speaker.name,
    subtitle: speaker.title,
    handle: speaker.role,
    borderColor: speaker.role === "National Speaker" ? "#00df9a" : "#3B82F6",
    gradient: speaker.role === "National Speaker" 
      ? "linear-gradient(145deg, rgba(0, 223, 154, 0.1), rgba(0,0,0,1))" 
      : "linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(0,0,0,1))",
    url: "#"
  }));

  return (
    <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold uppercase tracking-widest mb-4">
                <UsersRound size={16} /> Esteemed Guests
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Meet our Speakers
              </h2>
            </div>
            
            <Link to="/speakers" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-slate-900 text-white hover:bg-red-900 transition-all font-bold group shadow-xl shadow-slate-900/20 hover:shadow-red-900/40">
                View All Speakers <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Premium GSAP Chroma Grid */}
        <div style={{ position: 'relative', minHeight: '600px' }}>
          <ChromaGrid 
            items={items}
            radius={350}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        </div>
    </section>
  );
};

export default SpeakersSection;
