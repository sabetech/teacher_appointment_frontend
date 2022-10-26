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
      name: "Show Teachers",
      path: "showteachers",
      icon: <LayoutIcon />,
    },
    {
        id: 3,
        name: "Add a teacher",
        path: "addteacher",
        icon: <RolesIcon />,
      },
  ];