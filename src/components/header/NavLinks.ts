import { Home, FileText } from "lucide-react";

export type NavLinkItem = {
  name: string;
  to: string;
  icon: React.ElementType;
};

export const NAV_LINKS: NavLinkItem[] = [
  {
    name: "Home",
    to: "/",
    icon: Home,
  },
  {
    name: "Blogs",
    to: "/blogs",
    icon: FileText,
  },
];
