import { SideNavItemGroup } from "@/types";
import {
  BsEnvelope,
  BsGear,
  BsHouseDoor,
  BsKanban,
  BsListUl,
  BsQuestionCircle,
} from "react-icons/bs";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Dashboards",
    menuList: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <BsHouseDoor size={20} />,
      },
    ],
  },
  {
    title: "Manage",
    menuList: [
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <BsKanban size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "All", path: "/products" },
          { title: "New", path: "/products/new" },
        ],
      },
      {
        title: "Orders",
        path: "/dashboard/orders",
        icon: <BsListUl size={20} />,
      },
      {
        title: "Feedbacks",
        path: "/dashboard/feedbacks",
        icon: <BsEnvelope size={20} />,
      },
    ],
  },
  {
    title: "Others",
    menuList: [
      {
        title: "Account",
        path: "/dashboard/account",
        icon: <BsGear size={20} />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <BsQuestionCircle size={20} />,
      },
    ],
  },
];
