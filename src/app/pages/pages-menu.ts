import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Inicio",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Configuracion",
    group: true,
  },
  {
    title: "Forms",
    icon: "edit-2-outline",
    children: [
      {
        title: "Form Inputs",
        link: "/pages/forms/inputs",
      },
      {
        title: "Form Layouts",
        link: "/pages/forms/layouts",
      },
      {
        title: "Buttons",
        link: "/pages/forms/buttons",
      },
      {
        title: "Datepicker",
        link: "/pages/forms/datepicker",
      },
    ],
  },

  {
    title: "Edificios",
    icon: "grid-outline",
    children: [
      // {
      //   title: "Sedes",
      //   link: "/pages/infraestructura/smart-table",
      // },
      {
        title: "Infraestructura",
        link: "/pages/infraestructura/index",
      },
      {
        title: "Tipo salones",
        link: "/pages/infraestructura/tipoSalon",
      },
    ],
  },
];
