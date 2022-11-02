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
  DeleteIcon,
} from "./Icons";

import Reservations from "./Reservation/Reservations";

import ReservationForm from "./Reservation/ReservationForm";
import Teachers from "./Teacher/Teachers";
import RemoveTeacher from "./Teacher/RemoveTeacher";

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
    icon: <UserIcon />,
    component: <ReservationForm />,
  },
  {
    id: 5,
    name: "Delete Teacher",
    path: "remove-teacher",
    icon: <DeleteIcon />,
    component: <RemoveTeacher />,
  },

];
