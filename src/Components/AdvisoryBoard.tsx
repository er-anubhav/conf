const advisoryBoardMembers: string[] = [
  "Prof. S. C. Srivastava, IIT Kanpur",
  "Prof. J. Ram Kumar, IIT Kanpur",
  "Prof. Vivekanand Mukherjee, ISM, Dhanbad",
  "Prof. Fushuan Wen, China",
  "Prof. Malay Kishore Dutta- PVC Amity University, Noida",
  "Prof. Avadhesh Kumar -PVC, GU",
  "Prof. Anurag Srivastava, WS University, USA",
  "Prof. Parmanand- PVC, SU, Gr.Noida",
  "Prof. Jai Govind, AIT, Bangkok",
  "Prof. Brij N. Singh, North Dakota, USA",
  "Prof. K. P. Wang, Sydney University, Australia",
  "Prof. Istovan Erlich, DE University, Germany",
  "Prof. L Lai, City University, London",
  "Prof. K. N. Srivastava, ABB Sweden",
  "Prof. Ambrish Chandra, Montreal Canada",
  "Prof. D. S. Chauhan, Vice Chancellor, GLA University, Mathura",
  "Prof. Bhim Singh, Chairman, IEEE Delhi Section, IITD, India",
  "Prof. Shailesh Tiwari, ABESEC, Ghaziabad",
  "Prof. Dilip Sharma, GLA University, Mathura",
  "Prof. Rajiv Saxena, Jaypee University",
  "Prof. S. S. Bhaudaria, MITS, Gwalior",
  "Prof. N. P. Padhy, IIT Rorkee",
  "Prof. Avadhesh Kumar, PVC, GU, Gr. Noida.",
  "Prof. Sukumar Mishra, IIT Delhi",
  "Prof. A. N. Tiwari, MMMTU, Gorakhpur",
  "Prof. Asheesh Singh, MNNIT, Allahabad",
  "Prof. S. K. Singh, IIIT, Allahabad",
  "Prof. Neetesh Purohit, Director, SGSITS, Indore",
  "Prof. Neelendra Badal, KNIT Sultanpur",
  "Prof. Jawar Singh, IIITDM, Jabalpur",
  "Prof. Mini S. Thomas, JMI, New Delhi",
  "Prof. Shivaji Chakraborthy, JU, West Bengal",
  "Prof. Kwang Lee, BB University, USA",
  "Prof. Praveen Maduri, GCET, Greater Noida",
  "Prof. Brijesh Singh, Director, GCET, Greater Noida",
  "Prof. Lakshmanan M, GCET, Sri Eshwar College of Engineering, Tamilnadu,",
  "Prof. Mohd Asim Qadri, GCET, Greater Noida",
  "Prof. Rajni Saggu, GCET Greater Noida",
  "Prof. Md. Danish Equbal, GCET, Greater Noida",
  "Prof. A. Ambikapathy, HOD ECE, ITSEC, Greater Noida",
  "Prof. Sansar Singh Chauhan, HOD CSE, GL Bajaj, Greater Noida",
  "Prof. Sanjay Chauhan, HOD CSE, GNIOT, Greater Noida",
  "Prof. Usha Chauhan, GU, Greater Noida",
  "Prof. Sanjeev Pippal, HOD AI, GL Bajaj, Greater Noida",
  "Prof. Ajay Shankar Singh, Sanjivani University, Maharashtra",
  "Prof. Prashant Jhori, GU, Greater Noida",
  "Prof. Thirunavukkarasu K, GU, Greater Noida",
  "Prof. J N Singh, GU, Greater Noida",
  "Prof. Rani Astya, SU, Greater Noida",
  "Prof. Anurag Dixit, GU, Greater Noida",
  "Prof. Nikhil Marriwala, UIET, Kurukshetra University",
  "Prof. Sanjoy Das, IGNTU, Manipur",
];

const AdvisoryBoard = () => {
  return (
    <div className="max-w-full mx-auto py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 my-8 min-h-[calc(100vh-28.8rem)]">
        <div className="prose max-w-screen-lg mx-2 sm:mx-4">
          <h1 className="heading text-tw-prose-headings text-2xl mb-6 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Advisory Board
          </h1>
          <div>
            <ul className="list-disc marker:text-zinc-500 mt-5 mb-5 pl-7 m-3">
              {advisoryBoardMembers.map((member, index) => (
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

export default AdvisoryBoard;
