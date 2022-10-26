import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboards",
    path: "dashboards",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Reservations",
    path: "showteachers",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "Book appointment",
    path: "addteacher",
    icon: <RolesIcon />,
  },
];
