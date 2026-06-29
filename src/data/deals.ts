export type Deal = {
  id: string;
  name: string;
  city: string;
  category: "Warehousing" | "Commercial" | "Residential" | "Plotted" | "Industrial" | "Mixed Use";
  investment?: string;
  exitIRR?: string;
  status: "completed" | "current";
  landArea?: string;
  developmentArea?: string;
};

export const completedDeals: Deal[] = [
  {
    id: "sai-krishna",
    name: "Sai Krishna Warehouse",
    city: "Mumbai",
    category: "Warehousing",
    investment: "INR 45 Crores",
    exitIRR: "23%",
    status: "completed",
  },
  {
    id: "247-park",
    name: "247 Park",
    city: "Mumbai",
    category: "Commercial",
    investment: "INR 775 Crores",
    exitIRR: "21%",
    status: "completed",
  },
  {
    id: "godrej-prakriti",
    name: "Godrej Prakriti",
    city: "Kolkata",
    category: "Residential",
    investment: "INR 85 Crores",
    exitIRR: "22%",
    status: "completed",
  },
  {
    id: "acorn-warehouse",
    name: "Acorn Warehouse",
    city: "NCR",
    category: "Warehousing",
    investment: "INR 68 Crores",
    exitIRR: "16%",
    status: "completed",
  },
  {
    id: "ecity",
    name: "E-City",
    city: "Bengaluru",
    category: "Commercial",
    investment: "INR 120 Crores",
    exitIRR: "18%",
    status: "completed",
  },
  {
    id: "ackruti-city",
    name: "Ackruti City",
    city: "Mumbai",
    category: "Residential",
    investment: "INR 60 Crores",
    exitIRR: "21%",
    status: "completed",
  },
];

export const currentDeals: Deal[] = [
  {
    id: "doddaballapur",
    name: "Plotted Development",
    city: "Bengaluru — Doddaballapur",
    category: "Plotted",
    landArea: "22 acres",
    developmentArea: "5 Lakh sq. ft.",
    status: "current",
  },
  {
    id: "sadahalli",
    name: "Villa Development",
    city: "Bengaluru — Sadahalli",
    category: "Residential",
    landArea: "36 acres",
    developmentArea: "14 Lakh sq. ft.",
    status: "current",
  },
  {
    id: "mankoli",
    name: "Industrial Park",
    city: "Mumbai — Mankoli",
    category: "Industrial",
    landArea: "16.5 acres",
    developmentArea: "17 Lakh sq. ft.",
    status: "current",
  },
  {
    id: "dhamanagaon",
    name: "Warehousing",
    city: "Mumbai — Dhamanagaon",
    category: "Warehousing",
    landArea: "55 acres",
    developmentArea: "15 Lakh sq. ft.",
    status: "current",
  },
  {
    id: "gachibowli",
    name: "Mixed Use",
    city: "Hyderabad — Gachibowli",
    category: "Mixed Use",
    landArea: "4.4 acres",
    developmentArea: "11 Lakh sq. ft.",
    status: "current",
  },
  {
    id: "manikonda",
    name: "Mixed Use",
    city: "Hyderabad — Manikonda",
    category: "Mixed Use",
    landArea: "8 acres",
    developmentArea: "13 Lakh sq. ft.",
    status: "current",
  },
];
