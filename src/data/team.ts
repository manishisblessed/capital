export type TeamMember = {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "team";
  bio: string[];
  credentials?: string;
  linkedin?: string;
  // Use silhouette/initials avatar until real photo is provided
  photo?: string;
};

export const team: TeamMember[] = [
  {
    id: "ashish-joshi",
    name: "Ashish Joshi",
    role: "Managing Partner & Fund Manager",
    category: "leadership",
    bio: [
      "30+ years of experience in Real Estate, Logistics and Telecom industry",
      "Ex-Managing Partner at Milestone Capital Advisors",
      "Built a real estate AUM of INR 3,000 Crores across 7 real estate funds",
      "Involved in fund raising, sourcing and closing deals pan India with successful exits at attractive IRRs",
    ],
    credentials: "Chartered Accountant and Cost Accountant",
    linkedin: "https://www.linkedin.com/in/ashish-joshi-85a1ab5/",
  },
  {
    id: "rajneesh-pathak",
    name: "Rajneesh Pathak",
    role: "Partner",
    category: "leadership",
    bio: [
      "Senior leader with extensive experience across real estate and asset management",
      "Drives strategic platform direction and investor relationships",
      "Brings institutional discipline to deal structuring and execution",
    ],
  },
  {
    id: "deepalidevi-pathak",
    name: "Deepalidevi Pathak",
    role: "Partner",
    category: "leadership",
    bio: [
      "Strategic partner with deep expertise in real estate investment and platform building",
      "Oversees governance, investor engagement, and long-term partnership development",
    ],
  },
  {
    id: "ravindra-gupta",
    name: "Ravindra Gupta",
    role: "Legal & Compliance",
    category: "leadership",
    bio: [
      "25+ years across Company Law, FEMA, SEBI, corporate restructuring, joint ventures, and private equity transactions",
      "Leads pre-investment strategy including deal origination, diligence, structuring, and execution",
      "Former Head – Legal & Compliance at Milestone Capital Advisors Ltd. and senior leader at Future Group",
      "Led legal diligence for 50+ private equity transactions aggregating over INR 50 billion and 10+ million sq. ft. of real estate transactions",
    ],
    credentials:
      "Company Secretary, Insolvency Professional (IBBI), Registered Valuer, Certified Anti-Money Laundering Manager",
  },
  {
    id: "vikram-mohite",
    name: "Vikram Mohite",
    role: "Operations",
    category: "team",
    bio: [
      "Experienced operations leader overseeing portfolio execution and on-ground delivery",
      "Manages relationships with developers, contractors, and local partners",
    ],
  },
  {
    id: "rohit-raj-chauhan",
    name: "Rohit Raj Chauhan",
    role: "Strategy & Planning",
    category: "team",
    bio: [
      "Leads strategy and planning including investment structuring, portfolio design, and risk oversight",
      "9+ years' experience in alternative asset management and fund administration",
      "Structured and launched Category I, II, and III AIFs across formats",
      "Served in roles at JP Morgan Chase & Group and Merisis Advisors",
    ],
    credentials: "Chartered Accountant",
  },
  {
    id: "drumil-gana",
    name: "Drumil Gana",
    role: "Principal – Investment",
    category: "team",
    bio: [
      "7 years of experience in deal structuring and risk management",
      "Responsible for deal sourcing, analysis and execution",
      "Previously worked with E&Y in areas related to structuring and taxation",
    ],
    credentials: "Chartered Accountant and CFA Level III Candidate",
  },
  {
    id: "neeta-joshi",
    name: "Neeta Joshi",
    role: "AVP – Risk Management",
    category: "team",
    bio: [
      "Responsible for pre- and post-investment activities including monitoring, compliance, and coordination with investee companies",
      "Leads investor relationships and fund valuation",
      "Drives research and reporting on areas of investment",
      "6+ years of experience across investor engagement, investment lifecycle management, and financial analysis",
    ],
    credentials: "Chartered Accountant",
    linkedin: "https://in.linkedin.com/in/neeta-dwivedi-joshi-b9340729",
  },
  {
    id: "gourav-kundalia",
    name: "Gourav Kundalia",
    role: "Investment Manager",
    category: "team",
    bio: [
      "3+ years of experience in accounts, business planning & analysis and taxation",
      "Responsible for pre- and post-investment activities including monitoring, compliance and coordination",
      "Previously associated with Allcargo Logistics",
    ],
    credentials: "Chartered Accountant and CFA Level III Candidate",
  },
];

export const leadership = team.filter((m) => m.category === "leadership");
export const teamMembers = team.filter((m) => m.category === "team");
