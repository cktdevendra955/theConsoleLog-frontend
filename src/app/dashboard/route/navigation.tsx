import {
  LayoutDashboard,
  Users,
  Briefcase,
  Calendar,
  Settings,
  HelpCircle,
  Folder,
  FileText,
} from "lucide-react";

import { ROUTES } from "./routes";

export type NavItem = {
  label: string;
  path: string;
  icon: any;
  section?: "main" | "secondary";
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
    section: "main",
  },
  {
    label: "Portfolio",
    path: ROUTES.PORTFOLIO,
    icon: Folder,
    section: "main",
  },
  {
    label: "Resume",
    path: ROUTES.RESUME,
    icon: FileText,
    section: "main",
  },
  {
    label: "Hiring Drives",
    path: ROUTES.DRIVE,
    icon: Users,
    section: "main",
  },
  {
    label: "Jobs",
    path: ROUTES.JOBS,
    icon: Briefcase,
    section: "main",
  },
  {
    label: "Interviews",
    path: ROUTES.INTERVIEWS,
    icon: Calendar,
    section: "main",
  },
  {
    label: "Settings",
    path: ROUTES.SETTINGS.ROOT,
    icon: Settings,
    section: "secondary",
  },
  {
    label: "Support",
    path: "/dashboard/support",
    icon: HelpCircle,
    section: "secondary",
  },
];