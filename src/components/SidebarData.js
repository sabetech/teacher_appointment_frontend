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

import Reservations from "./Reservations";
import ReservationForm from "./ReservationForm";
import Homepage from "./Homepage";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboards",
    path: "dashboards",
    icon: <HomeIcon />,
    component: <Homepage />
  },
  {
    id: 2,
    name: "Reservations",
    path: "reservations",
    icon: <LayoutIcon />,
    component: <Reservations />,
  },
  {
    id: 3,
    name: "Book appointment",
    path: "addteacher",
    icon: <RolesIcon />,
    component: <ReservationForm />,
  },
];
