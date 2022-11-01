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
    path: "/",
    icon: <HomeIcon />,
    component: <Teachers />
  },
  {
    id: 2,
    name: "My Reservations",
    path: "reservations",
    icon: <LayoutIcon />,
    component: <Reservations />,
  },
  {
    id: 3,
    name: "Book appointment",
    path: "reserve",
    icon: <RolesIcon />,
    component: <ReservationForm />,
  },
  {
    id: 4,
    name: "Add Teacher",
    path: "addteacher",
    icon: <RolesIcon />,
    component: <ReservationForm />,
  },
  {
    id: 5,
    name: "Delete Teacher",
    path: "remove-teacher",
    icon: <RolesIcon />,
    component: <ReservationForm />,
  },
];
