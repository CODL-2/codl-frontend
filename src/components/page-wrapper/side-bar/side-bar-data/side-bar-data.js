import { Business, Dashboard, History, Logout } from "@mui/icons-material";
import { ROUTES } from "../../../../constants/route-links";

export const SideBarData = [
  {
    title: "Dashboard",
    url: ROUTES.dashboard.url,
    route: ROUTES.dashboard.route,
    icon: <Dashboard />,
    group: 1,
  },
  {
    title: "Portfolio",
    url: ROUTES.leaderboard.url,
    route: ROUTES.leaderboard.route,
    icon: <Business />,
    group: 1,
  },
  {
    title: "Logout",
    url: ROUTES.base.url,
    route: ROUTES.base.route,
    icon: <Logout />,
    group: 2,
  },
];
