export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "About", to: "/about" },
  {
    label: "Strategies",
    to: "/strategies",
    children: [
      { label: "Overview", to: "/strategies" },
      { label: "Multiplier Fund", to: "/strategies/multiplier" },
      { label: "Opportunity Fund", to: "/strategies/opportunity" },
      { label: "LVF", to: "/strategies/lvf" },
      { label: "Direct SPV", to: "/strategies/spv" },
    ],
  },
  { label: "Opportunities", to: "/opportunities" },
  { label: "Transactions", to: "/transactions" },
  {
    label: "Insights",
    to: "/insights",
    children: [
      { label: "Research & Insights", to: "/insights" },
      { label: "FAQ", to: "/insights/faq" },
    ],
  },
  { label: "Leadership", to: "/leadership" },
  { label: "Contact", to: "/contact" },
];
