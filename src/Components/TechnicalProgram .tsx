const technicalProgramMembers: string[] = [
  "Prof. Parmanand, PVC, SU, Gr.Noida",
  "Prof. Rajiv Saxena, Jaypee University",
  "Prof S.S. Bhaudaria, MITS Gwalior",
  "Prof. Arun Sharma, Dean Academics, IGDTUW, Delhi",
  "Prof. Karan Singh, JNU, Delhi",
  "Prof. Himanshu Mishra, MEGDF, Hyderabad",
  "Prof. Prabhod Vajpayee, IIT Kharagpur",
  "Prof. B Kalyan Kumar, IIT Chennai",
  "Prof. Bharat Singh Rajpurohit, IIT Mandi",
  "Prof. Naran M. Pindoria, IIT Gandhi Nagar",
  "Prof. R C Bansal, Univ. of Pretoria, South Africa",
  "Prof. Sanjay Gairola, GBPIET, Pauri",
  "Prof. O P Rahi, NIT, Hamirpur",
  "Prof. D. K. Caturvedi, DEI, Agra",
  "Prof. Shailesh Tiwari, Bennett University, Delhi",
  "Prof. Seema Arora, WCAS, Muscut, Oman",
  "Prof. Arun K. Verma, MNIT, Jaipur",
  "Prof. Abhishesk Swaroop, BPIT, Delhi",
  "Prof. Neetesh Purohit, Director, SGSITS, Indore",
  "Prof. Neelendra Badal, Director, REC B, Bijnor",
  "Prof. Jawar Singh, IIITDM Jabalpur",
  "Prof. Buddha Singh, JNU, Delhi",
  "Prof. J. K Verma, Amity University, Gurugram",
  "Prof. Ratnesh Litoriya, Jaypee University",
  "Prof. Manjeet Singh, Dept.of Higher Education, Govt. of Haryana",
  "Prof. Aditya Dev Mishra, Bennett University, Greater Noida",
  "Prof. Satish Kumar Singh, IIITA, Allahabad",
  "Prof. J. Ram Kumar, IIT Kanpur",
  "Prof. Malay Kishore Dutta-PVC, Amity University, Noida",
  "Prof. Prabhakar Tiwari,MMUT, Gorakhpur",
  "Prof. Asheesh Singh, MNNIT, Allahabad",
  "Prof. Neetesh Purohit, Director, SGSITS, Indore",
  "Prof. J. Ram Kumar, IIT Kanpur",
  "Prof. S. K. Singh, IIIT, Allahabad",
];

const TechnicalProgram = () => {
  return (
    <div className="max-w-full mx-auto py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 my-8 min-h-[calc(100vh-28.8rem)]">
        <div className="prose max-w-screen-lg mx-2 sm:mx-4">
          <h1 className="heading text-tw-prose-headings text-2xl mb-6 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Technical Program Committee
          </h1>
          <div>
            <ul className="list-disc mt-5 mb-5 pl-6.5 m-10 marker:text-zinc-500">
              {technicalProgramMembers.map((member, index) => (
                <li key={`${member}-${index}`} className="pl-1.5 mt-2 mb-2">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProgram;
