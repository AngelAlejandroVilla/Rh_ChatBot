import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Puestos",
        route: "/Puestos",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Chats",
        route: "/Chats",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Candidatos",
        route: "/Candidatos",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Departamentos",
        route: "/Departamentos",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-building-add",
      },
    ],
  },
];

export default MainMenuConfig;
