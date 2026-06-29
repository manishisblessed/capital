export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Our Business", to: "/our-business" },
  { label: "Our People", to: "/our-people" },
  {
    label: "Funds",
    to: "/funds",
    children: [
      { label: "Multiplier Fund (Open)", to: "/funds/multiplier" },
      { label: "Opportunity Fund (Closed)", to: "/funds/opportunity" },
      { label: "LVF — Large Value Fund", to: "/funds/lvf" },
      { label: "Direct SPV Route", to: "/funds/spv" },
    ],
  },
  {
    label: "Knowledge",
    to: "/knowledge",
    children: [
      { label: "Blogs", to: "/knowledge/blogs" },
      { label: "FAQ", to: "/knowledge/faq" },
    ],
  },
  { label: "Contact", to: "/contact" },
];
