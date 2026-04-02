type CommitteeMember = {
  name: string;
  role: string;
};

type CommitteeSection = {
  title: string;
  members: CommitteeMember[];
};

const committeeSections: CommitteeSection[] = [
  {
    title: "Chief Patrons",
    members: [
      { name: "Dr. R. P. Chadha", role: "Chairman" },
      { name: "Mr. Sohil Chadha", role: "Vice Chairman" },
    ],
  },
  {
    title: "Patrons",
    members: [
      { name: "Shri B. K. Arora", role: "Secretary, ITSEC" },
      { name: "Prof. (Dr.) J. P. Pandey", role: "Vice Chancellor, AKTU" },
      { name: "Prof. (Dr.) S. N. Singh", role: "ABV-IIITM, Gwalior" },
    ],
  },
  {
    title: "Conference General Chairs",
    members: [
      { name: "Prof. (Dr.) Mayank Garg", role: "Director, ITSEC" },
      { name: "Prof. (Dr.) S. K. Singh", role: "IIIT, Allahabad" },
    ],
  },
  {
    title: "Convener & Conference Organising Chair",
    members: [
      { name: "Prof. (Dr.) Vishnu Sharma", role: "Dean Academics, ITSEC" },
    ],
  },
  {
    title: "Conference Chairs",
    members: [
      { name: "Prof. (Dr.) Vishnu Sharma", role: "Dean Academics, ITSEC" },
      { name: "Prof. (Dr.) Jaya Sinha", role: "HOD, CSE, ITSEC" },
    ],
  },
  {
    title: "Conference Publication Chairs",
    members: [
      { name: "Prof. (Dr.) Sandhya Umrao", role: "CSE, ITSEC" },
      { name: "Prof. (Dr.) Hariom Tyagi", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Technical Program Chairs",
    members: [
      { name: "Prof. (Dr.) Nishant Gupta", role: "CSE, ITSEC" },
      { name: "Prof. (Dr.) Anuj Kumar", role: "CSE, ITSEC" },
      { name: "Prof. (Dr.) Tanushree", role: "CSE, ITSEC" },
      { name: "Prof. (Dr.) Rakesh Kumar Singh", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      { name: "Prof. (Dr.) Rajesh", role: "CSE, ITSEC" },
      { name: "Prof. Tarun Chugh", role: "CSE, ITSEC" },
      { name: "Prof. Abhishek Shivhare", role: "CSE, ITSEC" },
      { name: "Prof. Yogesh Sharma", role: "CSE, ITSEC" },
      { name: "Prof. (Dr.) Prachi Jain", role: "CSE, ITSEC" },
      { name: "Prof. Akansha Sharma", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Publication Committee",
    members: [
      { name: "Prof. Bhupendra Bhadana", role: "CSE, ITSEC" },
      { name: "Prof. Aman Anand", role: "CSE, ITSEC" },
      { name: "Prof. Shomil Bansal", role: "CSE, ITSEC" },
      { name: "Prof. Rakhi Puri", role: "CSE, ITSEC" },
      { name: "Prof. Tanmayee Tilekar", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Publicity Committee",
    members: [
      { name: "Mr. Anurag Gupta", role: "CSE, ITSEC" },
      { name: "Prof. Manik Chandra", role: "CSE, ITSEC" },
      { name: "Prof. Ghanshyam Yadav", role: "CSE, ITSEC" },
      { name: "Prof. Shomil Bansal", role: "CSE, ITSEC" },
      { name: "Prof. Vivek Agarwal", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Finance Committee",
    members: [
      { name: "Prof. Abhishek Shivhare", role: "CSE, ITSEC" },
      { name: "Prof. Yogesh Sharma", role: "CSE, ITSEC" },
      { name: "Prof. Anurag Gupta", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Hospitality Committee",
    members: [
      { name: "Prof. Abhishek Shivhare", role: "CSE, ITSEC" },
      { name: "Prof. Bhupendra Bhadana", role: "CSE, ITSEC" },
      { name: "Prof. Akansha Sharma", role: "CSE, ITSEC" },
      { name: "Prof. Nishant Awana", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Transport and Accommodation Committee",
    members: [
      { name: "Prof. Tarun Chug", role: "CSE, ITSEC" },
      { name: "Prof. Vijay Kumar Tiwari", role: "CSE, ITSEC" },
      { name: "Prof. Prashant Kumar", role: "CSE, ITSEC" },
      { name: "Prof.Umesh Goyal", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Website Committee",
    members: [
      { name: "Prof. (Dr.) Prachi Jain", role: "CSE, ITSEC" },
      { name: "Mr. Anubhav Tripathi", role: "CSE Student, ITSEC" },
      { name: "Mr. Deepak Kumar", role: "CSE Student, ITSEC" },
      { name: "Mr. Samvar Jain", role: "CSE Student, ITSEC" },
    ],
  },
  {
    title: "Sponsorship / Media Committee",
    members: [
      { name: "Prof. Manish Sharma", role: "CSE, ITSEC" },
      { name: "Prof. Arti Tiwari", role: "CSE, ITSEC" },
      { name: "Prof. Radha", role: "CSE, ITSEC" },
    ],
  },
  {
    title: "Student Coordinators",
    members: [
      { name: "Mr. Ashish Kumar Shahi", role: "CSE Student, ITSEC" },
      { name: "Mr. Ayushi Gupta", role: "CSE Student, ITSEC" },
      { name: "Mr. Ayushi Mishra", role: "CSE Student, ITSEC" },
      { name: "Mr. Ansh Yadav", role: "CSE Student, ITSEC" },
      { name: "Ms. Anjali Kumari", role: "CSE Student, ITSEC" },
      { name: "Mr. Shrey Srivastava", role: "CSE Student, ITSEC" },
      { name: "Mr. Aryan", role: "CSE Student, ITSEC" },
    ],
  },
];

const OrganizingComittee = () => {
  return (
    <div className="max-w-full mx-auto py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 my-8 min-h-[calc(100vh-28.8rem)]">
        <div
          className="prose max-w-screen-lg mx-2 sm:mx-4"
          itemType="https://schema.org/Organization"
        >
          <h1
            className="heading text-tw-prose-headings text-2xl mb-6 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left"
            itemProp="name"
          >
            ORGANISING COMMITTEE
          </h1>

          {committeeSections.map((section) => (
            <div key={section.title} itemProp="department" className="ml-3">
              <h2
                className="heading text-tw-prose-headings text-xl mb-4 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left"
                itemProp="name"
                id={section.title}
              >
                {section.title}
              </h2>
              <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
                {section.members.map((member, index) => (
                  <li
                    key={`${member.name}-${index}`}
                    itemProp="member"
                    className="pl-1.5 mt-2 mb-2"
                  >
                    <span itemProp="name">{member.name}</span>,{" "}
                    <span itemProp="jobTitle">{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizingComittee;
