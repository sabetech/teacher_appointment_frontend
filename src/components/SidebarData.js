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

import Reservations from "./Reservation/Reservations";

import ReservationForm from "./Reservation/ReservationForm";
import Teachers from "./Teacher/Teachers";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Teachers",
    path: "home",
    icon: <HomeIcon />,
    component: <Teachers />
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
